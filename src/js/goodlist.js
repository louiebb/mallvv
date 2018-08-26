require(['config'],function(){
    require(['jquery','common','top','bottom'],function($,com,vvtop,vvbott){
        var page = {
            header:'#pub-header',
			footer:'#pub-footer',
            one:'.one',
            two:'.one .two',
            three:'.two .three',
            currentgoodlist:'.current-goodlist',
            mainright:'.main-right',
            sorttype:'.sort-type',
            currentnum:'.currentnum',
            //商品类型
            currenType:'',
            //排序类型
            sortType:'default',
            sortOrder:'desc',
            currenData:{},
            soureData:{},
            pageNo:1,
            qty:12,
            totalpage:0,
            init(){
                this.header = $(this.header);
                this.footer = $(this.footer);
                this.one = $(this.one);
                this.currentgoodlist = $(this.currentgoodlist);
                this.mainright = $(this.mainright);
                this.sorttype = $(this.sorttype);
                this.currentnum = $(this.currentnum);
                this.currenType= com.mydoc.getUrlParms(location.search).currentType;
                let self = this;
                this.headerInit();
                this.footerInit();
                //lgz : question 问题：promise 不是说完成承诺的函数才执行后一个的吗？
                this.navInit(this.one,this.two,'onetab','two').then((two)=>this.navInit(two,this.three,'two','three')).then(three=>this.navInit(three,'','three','four'));
                this.getdata();
                //lgz：question 为什么要加延迟的？
                setTimeout(()=>{
                    this.one.children('li').eq(0).children('a').addClass('active');
                    if(this.currenType=='200'||this.currenType=='100'){
                        $("ul[data-type='"+this.currenType+"']").siblings('i').click();
                    }else{
                        $("ul[data-type='"+this.currenType+"']").parent().parent().siblings('i').click()
                        $("ul[data-type='"+this.currenType+"']").siblings('i').click();
                    }
                },100);
                //绑定事件
                //排序事件
                this.sorttype.on('click','a',function(){ 
                    if(!$(this).hasClass('desc')){
                        self.sort('asc','desc',$(this));
                        self.sortOrder = 'desc';
                    }else if(!$(this).hasClass('asc')){
                        self.sort('desc','asc',$(this));
                        self.sortOrder = 'asc';
                    }
                    $(this).addClass('active');
                    self.shopRender();
                })
                this.mainright.on('click',function(e){
                    console.log(e.target.className);
                    self.tabPage(e.target);
                });
            },
            sort(rec,adc,ele){
                this.sorttype.find('a').removeClass('active asc desc');
                ele.removeClass(rec).addClass(adc);
                switch(true){
                    case ele.hasClass('sale'):
                        this.sortType ='sale';
                        this.saleSort(adc);
                    break;
                    case ele.hasClass('popularity'):
                        this.sortType ='popularity';
                        this.popuSort(adc);
                    break;
                    case ele.hasClass('price'):
                        this.sortType ='popularity';
                        this.priceSort(adc);
                    break;
                    case ele.hasClass('default'):
                        this.sortType ='default';
                        this.defaultSort();
                    break;
                }
            },
            navInit(eles,nexetEle,type,currentClass){
                let self = this;
                let promsie = new Promise((resolve,reject)=>{
                    eles.each(function(a,b){
                        $.get('../api/getdata.php',{type,id:$(b).attr('data-type')},function(data){
                        let content = ``;
                        content =  data.map(x=>{
                            return `<li>
                                            ${type=='three'?'':'<i></i>'}
                                        <a href="javscript:void(0);">${x.name}</a>
                                        <ul class="${currentClass}" data-type="${x.type?x.type:''}">
                                        </ul>
                                    </li>`;
                        }).join('');
                        $(b).html(content);

                        //绑定事件  : 委托给父元素
                        $(b).on('click','i,a',function(e){
                            if(e.target.tagName.toLowerCase()=='i'){
                                $(e.target).toggleClass('open').siblings('ul').slideToggle('slow').hasClass('open');
                            }else if(e.target.tagName.toLowerCase()=='a'){
                                self.one.find('a').removeClass('active');
                                $(e.target).addClass('active');
                                self.currenType=$(e.target).siblings('ul').attr('data-type');
                                console.log(self.currenType);
                                //渲染
                                self.getdata();
                            }
                            //阻止冒泡行为
                            return false
                        })
     
                        // $(b).find('a').click(function(){
                        //     
                        // });
                        resolve($(nexetEle));
                    });
                    });
                });
                return promsie;
            },
            getdata(){
                this.getData().then((x)=>{
                    this.currenData = JSON.parse(JSON.stringify( this.soureData = x));
                    switch(this.sortType){
                        case 'sale':
                            this.saleSort(this.sortOrder);
                        break;
                        case 'popularity':
                            this.popuSort(this.sortOrder);
                        break;
                        case 'price':
                            this.priceSort(this.sortOrder);
                        break;
                        case 'default':
                            this.defaultSort();
                        break;
                    }
                    this.shopRender();
                });
            },
            getData(data){
                let self =this;
                let pageNo = this.pageNo;
                let qty = this.qty;
                let prom = new Promise((success,fail)=>{
                    data = Object.assign({pageNo,qty,type:self.currenType},data);
                    $.post('../api/getShop.php',data,function(x){
                        self.totalpage = Math.ceil(x.total/qty);
                        success(x);
                    });
                });
                return prom;
            },
            shopRender(){
                let content
                if(this.currenData.total>0){
                    content = this.currenData.data.map(y=>{
                        // <p class="stock">库存<span>${y.stock}</span></p>
                        return ` <li>
                        <div class="item">
                            <img src="../img/shoplist/${y.img}" alt="">
                            <div class="warp">
                                <p class="name">${y.name}</p>
                                <p class="price-warp"><em><span>¥</span><span class="price">${y.price}</span></em> ¥<del>${(y.price*y.discount).toFixed(2)}</del></p> 
                                <p class="sale">销量<span>${y.sale}</span></p>
                                <p class="popu">人气<span>${y.popularity}</span></p>
                               
                            </div>
                        </div>
                    </li>`;
                    }).join('');
                }else{
                    content = `<p style="height:420px; text-align:center;line-height:420px;">暂无商品</p>`
                }
                this.currentgoodlist.html(content);
                this.pageRender()
            },
            pageRender(){
                let self = this;
                let content=``;
                if(this.currenData.total>0){
                    for(var i =0,j =Math.ceil(this.currenData.total/this.qty);i<j;i++){
                        if((i+1)==this.pageNo){
                            content += `<span ><a class="num active" href="javasscript:void(0);">${i+1}</a></span>`; 
                        }else{
                             content += `<span ><a class="num" href="javasscript:void(0);">${i+1}</a></span>`; 
                        }
                        // console.log(j,i,this.currenData.total);
                    }
                }
                this.currentnum.html(content);
            },
            tabPage(target){
                if(target.className =="num"){ //页码加载
                    this.pageNo = $(target).html();
                    this.getdata();
                }else if(target.className =="fister"){//首页
                    this.pageNo = 1;
                    this.getdata();

                }else if(target.className =="endpage"){//末页
                    this.pageNo =this.totalpage ;
                    this.getdata();
                }else if(target.className =="prevpage"){//上一页
                     this.pageNo -=1;
                    if(this.pageNo<=0){
                        this.pageNo =1;
                    }
                    this.getdata();
                }else if(target.className =="nextpage"){//下一页
                    this.pageNo +=1;
                    if(this.pageNo>=this.totalpage){
                        this.pageNo = this.totalpage;
                    }
                    this.getdata();
                } 
            },
            defaultSort(){
                this.currenData = JSON.parse(JSON.stringify( this.soureData));
            },
            saleSort(order){
               if( order=='desc'){  
                    this.currenData.data = this.currenData.data.sort((a,b)=>b.sale - a.sale);
               }else{
                    this.currenData.data = this.currenData.data.sort((a,b)=>a.sale - b.sale);
               }
            },
            popuSort(order){
                if( order=='desc'){  
                    this.currenData.data = this.currenData.data.sort((a,b)=>b.popularity - a.popularity);
               }else{
                    this.currenData.data = this.currenData.data.sort((a,b)=>a.popularity - b.popularity);
               }
            },
            priceSort(order){
                if( order=='desc'){  
                    this.currenData.data = this.currenData.data.sort((a,b)=>b.price - a.price);
               }else{
                    this.currenData.data = this.currenData.data.sort((a,b)=>a.price - b.price);
               }
            },
            headerInit(){
                this.header.load('top.html',function(){
                    vvtop.init('../');
                    vvtop.pubrecmenu.css({display:'none'}).mouseenter(()=>
                    vvtop.pubrecmenu.css({display:'block'})).mouseleave(()=>
                    vvtop.pubrecmenu.css({display:'none'}));
                    vvtop.pubrecommend.mouseenter(()=>
                    vvtop.pubrecmenu.css({display:'block'})).mouseleave(()=>
                    vvtop.pubrecmenu.css({display:'none'}));
                    vvtop.pubrecmenu.on('click','a',function(){
                        location.href = './goodlist.html?currentType='+$(this).attr('data-id');
                    })
                });
            },
            footerInit(){
                this.footer.load('bottom.html',function(){
                    vvbott.init('../');
                });
            }
        }
        page.init();

    });
});