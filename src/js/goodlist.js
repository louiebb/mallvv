require(['config'],function(){
    require(['jquery','common','top','bottom'],function($,com,vvtop,vvbott){
        var page = {
            header:'#pub-header',
			footer:'#pub-footer',
            one:'.one',
            two:'.one .two',
            three:'.two .three',
            currentgoodlist:'.current-goodlist',
            init(){
                this.header = $(this.header);
                this.footer = $(this.footer);
                this.one = $(this.one);
                this.currentgoodlist = $(this.currentgoodlist);

                this.headerInit();
                this.footerInit();
                this.navInit(this.one,this.two,'onetab','two').then((two)=>this.navInit(two,this.three,'two','three')).then(three=>this.navInit(three,'','three','four'));
                this.shopRender();
                setTimeout(()=>{
                    this.one.children('li').eq(0).children('a').addClass('active');
                },100);
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
            shopRender(type,filed,order){
                let self = this;
                $.post('../api/getShop.php',{type,order,filed,pageNo:'1',qty:'10'},function(x){
                   let content = x.data.map(y=>{
                        return ` <li>
                        <div class="item">
                            <img src="../img/shoplist/${y.img}" alt="">
                            <div class="warp">
                                <p class="name">${y.name}</p>
                                <p class="price-warp"><em><span>¥</span><span class="price">${y.price}</span></em> ¥<del>${y.price*y.discount}</del></p> 
                                <p class="stock">库存<span>${y.stock}</span></p>
                            </div>
                        </div>
                    </li>`;
                    }).join('');
                    self.currentgoodlist.html(content);
                });
            },
            headerInit(){
                this.header.load('top.html',function(){
                    vvtop.init('../');
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