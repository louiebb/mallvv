require(['config'],function(){
    require(['jquery','common','top','bottom','zoom'],function($,com,vvtop,vvbott){
        var page = {
            currentid:0,
            currentData:{},
            bigimage:'.image-wrap',
            goodname:'.good-name',
            goodprice:'.good-price .left',
            zoomimg:'.zoomimg',
            init(){
                this.currentid = com.mydoc.getUrlParms(location.search).id;
                this.bigimage = $(this.bigimage);
                this.goodname = $(this.goodname);
                this.goodprice = $(this.goodprice);

                let self = this;
                //获取数据
                this.getData().then((x)=>{
                    this.currentData=x;
                    this.InitImg();
                    this.Initsummary();
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
                    }else if(e.target.classList.contains('next')){
                        let obj = self.imgactive(e.target);
                        obj.idx +=1;
                        if(obj.idx >= obj.length-1){
                            obj.idx=length-1;
                        }
                        obj.lis.removeClass('active').eq(obj.idx).addClass('active');
                    }else if(e.target.className=='imglist'){
                        let $img = $(e.target);
                        $img.closest('li').addClass('active').siblings('li').removeClass('active');
                        let imgurl =  $img.attr('src');
                        let bigimgurl =  $img.attr('bimg');
                        self.zoomimg.children('img').attr({src:imgurl,'data-big':bigimgurl});
                        // console.log();
                    }

                });
                
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

            }
        }

        page.init();
    });
});