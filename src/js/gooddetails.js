require(['config'],function(){
    require(['jquery','common','top','bottom'],function($,com,vvtop,vvbott){
        var page = {
            currentid:0,
            currentData:{},
            bigimage:'.image-wrap',
            goodname:'.good-name',
            goodprice:'.good-price .left',
            init(){
                this.currentid = com.mydoc.getUrlParms(location.search).id;
                this.bigimage = $(this.bigimage);
                this.goodname = $(this.goodname);
                this.goodprice = $(this.goodprice);

                this.getData().then((x)=>{
                    this.currentData=x;
                    this.InitImg();
                    this.Initsummary();
                });
                
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
                    <span>
                        <img src="../img/shopdetails/beb/${data.img}" bimg="../img/shopdetails/beb/big${data.img}" alt="">
                    </span>
                    </div>
                    <div class="img-list">
                            <a class="prev fl">&lt;</a>
                            <a class="next fr">&gt;</a>
                            <div class="items">
                                <ul>`;
                    let imglist = data.imglist.split(',');
                    content +=imglist.map(x=>`<li><img alt="" bimg="../img/shopdetails/beb/big${x}" src="../img/shopdetails/beb/${x}"></li>`);
                    content+= `</ul></div></div>`;
                    this.bigimage.html(content);
                }
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