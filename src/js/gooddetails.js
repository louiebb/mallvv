require(['config'],function(){
    require(['jquery','common','top','bottom','zoom'],function($,com,vvtop,vvbott){
        var page = {
            header:'#pub-header',
			footer:'#pub-footer',
            currentid:0,
            currentData:{},
            bigimage:'.image-wrap',
            goodname:'.good-name',
            goodprice:'.good-price .left',
            zoomimg:'.zoomimg',
            maincontent:'.main-content',
            init(){
                this.header = $(this.header);
                this.footer = $(this.footer);
                this.currentid = com.mydoc.getUrlParms(location.search).id;
                this.bigimage = $(this.bigimage);
                this.goodname = $(this.goodname);
                this.goodprice = $(this.goodprice);
                this.maincontent = $(this.maincontent);

                let self = this;
                //获取数据
                this.getData().then((x)=>{
                    this.currentData=x;
                    this.InitImg();
                    this.Initsummary();
                    let content = `<img src="../img/shopdetails/beb/${this.currentData.describe}" alt="">`;
                    this.maincontent.html(content);
                });
                this.bigimage.on('click',function(e){
                    console.log(e.target.className)
                    if(e.target.classList.contains('prev')){
                        let obj = self.imgactive(e.target);
                        console.log(obj);
                        obj.idx-=1;
                        if(obj.idx <= 0){
                            obj.idx = 0;
                        }
                        obj.lis.removeClass('active').eq(obj.idx).addClass('active');
                        //移动
                        let ul = obj.lis.closest('ul');
                        let liW = $(obj.lis[0]).width();
                        ul.css({left:ul.position().left-liW});
                    }else if(e.target.classList.contains('next')){
                        let obj = self.imgactive(e.target);
                        obj.idx +=1;
                        if(obj.idx >= obj.length-1){
                            obj.idx=length-1;
                        }
                        obj.lis.removeClass('active').eq(obj.idx).addClass('active');
                         //移动
                         let ul = obj.lis.closest('ul');
                         let liW = $(obj.lis[0]).width();
                         ul.css({left:ul.position().left+liW});
                    }else if(e.target.className=='imglist'){
                        let $img = $(e.target);
                        $img.closest('li').addClass('active').siblings('li').removeClass('active');
                        let imgurl =  $img.attr('src');
                        let bigimgurl =  $img.attr('bimg');
                        self.zoomimg.children('img').attr({src:imgurl,'data-big':bigimgurl});
                    }

                });

                this.headerInit();
                this.footerInit();
                
            },
            imgactive(target){
                let $ele = $(target).siblings('.items');
                let lis = $ele.find('li');
                let length = $ele.find('li').length;
                let idx =  $ele.find('li.active').index();
                return {idx,lis,length};
            },
            getData(){
                let prom =  new Promise((succ,fail)=>{
                    $.get({
                        url:'../api/getShopDetails.php?id='+this.currentid,
                        success:(x)=>{
                            succ(x[0]);
                            console.log(x[0]);
                        }
                    });
                });
                return prom;
            },
            InitImg(){
                let data = this.currentData;
                if(data){
                    let content = `
                    <div class="big-image">
                    <div class="zoomimg">
                        <img src="../img/shopdetails/beb/${data.img}" data-big="../img/shopdetails/beb/big${data.img}" alt="">
                    </div>
                    </div>
                    <div class="img-list">
                            <a class="prev fl">&lt;</a>
                            <a class="next fr">&gt;</a>
                            <div class="items">
                                <ul>`;
                    let imglist = data.imglist.split(',');
                    content +=imglist.map((x,y)=>{
                        if(y==0){
                            return `<li class="active"><img class="imglist" alt="" bimg="../img/shopdetails/beb/big${x}" src="../img/shopdetails/beb/${x}"></li>`;
                        }else{
                            return `<li><img class="imglist" alt="" bimg="../img/shopdetails/beb/big${x}" src="../img/shopdetails/beb/${x}"></li>`;
                        }
                    }).join('');
                    content+= `</ul></div></div>`;
                    this.bigimage.html(content);
                    this.zoomimg = $(this.zoomimg);
                }
                this.InitZoom();
            },
            InitZoom(){
                $('.zoomimg').lgzzoom({width:400,height:500});
            },
            Initsummary(){
                let x =  this.currentData;
                let onecon = `
                <h3>${x.name}</h3>
                <p>${x.remark}</p>
                `;
                this.goodname.html(onecon);
                let twocon = `
                <p><span class="smea">市&nbsp;场&nbsp;价：</span><span class="fw">¥<del data-price="${x.price}">${x.price}</del></span></p>
                <p><span class="smea">商&nbsp;城&nbsp;价：</span><span class="fw price">¥<span data-price="${x.price}">${(x.price*x.discount).toFixed(2)}</span></span></p>
                `;
                this.goodprice.html(twocon);

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
                    });
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