    require(['config'],function(){
        require(['jquery','common','top','bottom','bootstrap'],function($,com,vvtop,vvbott,bootstrap){
			var page = {
                header:'#pub-header',
				footer:'#pub-footer',
                mallvvbanner:'.mallvv-banner',
                indshopleft:'.ind-shop-left',
                //吸顶导航
                navbar:'.navbar',
                init(){
                    this.header = $(this.header);
					this.footer = $(this.footer);
                    this.mallvvbanner = $(this.mallvvbanner);
                    this.indshopleft = $(this.indshopleft);
                    this.navbar = $(this.navbar);
                    let self = this;
                    this.indshopleft.on('mouseenter','.title',function(){
                            $(this).addClass('active').siblings('li').removeClass('active');
                            if(this.dataset.type){
                                self.rmrpxpInit(this.dataset.type);
                           }
                    });
					
					//初始化
					// new com.Carousel({
					// 	ele:'.mallvv-banner',
					// 	imgs:['src/img/index/banner/web-101-101-1.jpg','src/img/index/banner/web-101-101-2.jpg','src/img/index/banner/web-101-101-4.jpg','src/img/index/banner/web-101-101-5.jpg']
					// });
                    this.headerInit();
                    this.footerInit();
                    //热卖热评新品
                    this.rmrpxpInit('rm');
                    //吸顶
                    this.Ceiling();
                    //时间间隔
                    this.carousel(1000);
                },
                //吸顶
                Ceiling:function(){
                    let self = this;
                    let $firstfloor = self.navbar.siblings('#second-floor');
                    let $secondfloor = self.navbar.siblings('#third-floor');
                    let lias =   self.navbar.find('a');
                    let navbar = self.navbar.offset().top;
                    let first = $firstfloor.offset().top;
                    let second = $secondfloor.offset().top;
                    $(window).scroll(function(){
                        if(this.scrollY>navbar){
                            self.navbar.addClass('scroll_fixed');
                            $firstfloor .css({marginTop:self.navbar.height()});
                            if(this.scrollY>first){
                                doselect(lias,1);
                                if(this.scrollY>second){
                                    doselect(lias,2);
                                }
                            }else{
                                doselect(lias,0);
                            } 
                        }else{
                            doselect(lias,0);
                            self.navbar.removeClass('scroll_fixed');
                            $firstfloor.css({marginTop:0});
                        }
                    });
                    function doselect(ele,i){
                        ele.removeClass('select').eq(i).addClass('select');
                    }
                },
                //小轮播时间间隔
                carousel(num){
                    $('.carousel-example').carousel({interval:num});
                },
                rmrpxpInit(type){
                    let self = this;
                    com.myajax.prom('src/api/getdata.php?type=rmrpxp&id='+type,'',function(x){
                        let content = x.map(x=>{
                            return `
                            <li>
                                <img src="src/img/index/main/shop/${x.img}" alt="">
                                <p class="name">${x.name}</p>
                                <p class="price">
                                    <em>商城价：</em>
                                    <span>￥${x.price}</span>
                                </p>
                            </li>
                            `
                        }).join('');
                        self.indshopleft.children('.ind-left-content').html(content);
                    })
                },  
                headerInit(){
                    this.header.load('src/html/top.html',function(){
                        vvtop.init('src/');
                    });
                },
                footerInit(){
                    this.footer.load('src/html/bottom.html',function(){
                        vvbott.init('src');
                    });
                }
			};
			
            page.init();
        })
    });

