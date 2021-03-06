/* 
* @Author: louiebb
* @Date:   2018-08-21 09:12:10
* @Last Modified by:   louiebb
* @Last Modified time:  2018-08-21 09:12:10
*/

define(['jquery','common'], function($,com) {
    var vvtop = {
        currentpro:'.currentpro',
        province:'.province',
        login:'.pub-login',
        register:'.pub-register',
        order:'.pub-order',
        business:'.pub-buscen',
        server:'.pub-server',
        follow:'.pub-followus',
        pubtopright:'.pub-top-right',
        pubrecmenu:'.pub-rec-menu',
        pubnavfirst:'.pub-nav-first',
        colblcok:'.pub-nav-second .col-blcok',
        pubnavsecond:'.pub-nav-second',
        pubmallvvlog:'.pub-mallvv-log',
        pubrecommend:'.pub-recommend',
        //cookie名
        currentAcc:'currentAcc',
        //节点类名
        pageAcc:'.currentAcc',
         
        init(path){
            //获取节点
            this.path = path;
            this.currentpro = $(this.currentpro);
            this.province = $(this.province);
            this.login = $(this.login);
            this.register = $(this.register);
            this.order = $(this.order);
            this.business = $(this.business);
            this.server = $(this.server);
            this.follow = $(this.follow);
            this.pubtopright = $(this.pubtopright);
            this.pubrecmenu = $(this.pubrecmenu);
            this.pubrecommend = $(this.pubrecommend);
            this.pubnavfirst = $(this.pubnavfirst);
            this.colblcok = $(this.colblcok);
            this.pubnavsecond = $(this.pubnavsecond);
            this.pubmallvvlog = $(this.pubmallvvlog);
            this.pubmallvvlog = $(this.pubmallvvlog);
            this.pageAcc = $(this.pageAcc);
            
            //获取cookie
            this.currentAcc = com.mycookie.get(this.currentAcc);
            if(this.currentAcc){
                this.currentAcc = JSON.parse(this.currentAcc);
                this.pageAcc.text(this.currentAcc.account);                
                this.pageAcc.siblings('.mallvv-do').css({display:'none'});
            }else{
                this.pageAcc.siblings('.mallvv-do').css({display:'inlineBlock'});
            }

            //更改属性值
            this.pubmallvvlog.prop('src',this.path+'/img/top/05174866977471586.png');
            let self = this;
            //绑定事件
            this.pubnavfirst.on('mouseenter','li',function(){
                if(this.className){
                    $(this).mouseleave(()=>{self.pubnavsecond.css('display','none');});
                    self.initSecondNav(this.className);
                    self.pubnavsecond.css('display','block');
                }
            });
            this.pubnavsecond.on('mouseleave',function(){
                self.pubnavsecond.css('display','none');            
            });
            this.pubnavsecond.on('mouseenter',function(){
                self.pubnavsecond.css('display','block');            
            });
            
            //初始化
            this.initProvince(this);
            this.initPubNav(this);
            this.initRecommend();

            
    
    
        },
        initProvince(self){
            com.myajax.prom(self.path+'api/getProvince.php','',function(txt){
                var content = txt.map(x=>`<li>${x.name}</li>`);
                self.province.html(content).on('click','li',function(e){
                    var $lis = $(this).siblings('li');
                    $lis.removeClass('active');
                    this.classList.add('active');
                    self.currentpro.text(this.innerText);
                });
            })
        },
        initPubNav(self){
            com.myajax.prom(self.path+'api/getnav.php','',function(data){
                let content = data.map(x=>`
                            <dd class="${x.more} pub-${x.pubclass}">
                            <div data-id="${x.id}">
                                <a href="#">${x.value}</a>
                            </div>
                            <ul>
                            </ul>
                        </dd>
                        `).join('');
                $(content).appendTo(self.pubtopright);
                self.pubtopright.on('mouseenter','dd',function(){    
                    self.initnavVal($(this).children('div').attr('data-id'),$(this).children('ul'));
                });
            });
        },
        initnavVal(navid,ele){
            let self = this;
            com.myajax.prom(this.path+'api/getnavValue.php?id='+navid,'',function(data){
                let content ;
                if(data.length && data[0].navid !=5){
                    content =data.map(x=>`<li><a href="${x.url}">${x.value}<a/></li>`).join('');
                }else if(data.length){
                    content =`<p>${data[0].value}</p>
                                <p>${data[1].value}</p>
                                <img src="${self.path}/img/top/${data[2].value}"/>`;
                }
                ele.html(content);
            });
        },
        initRecommend(){
                let self = this;
                com.myajax.prom(self.path+'api/getdata.php?type=one','',function(x){
                        let  content =x.map(j=>{
                        return `<div class="pub-menu-list">
                        <div><a data-id="${j.type}" href="${j.url}">${j.name}</a></div>
                        <ul class="clearfix" data-id="${j.type}">
                        </ul></div>`;
                    }).join('');
                        self.pubrecmenu.html(content);
                        let  $uls = self.pubrecmenu.children().children('ul');
                        $uls.each(function(x,y){
                            com.myajax.prom(self.path+'api/getdata.php?type=two&id='+y.dataset.id,'',function(k){
                                let content = k.map(z=>`<li><a data-id="${z.type}" href="${z.url}">${z.name}</a></li>`).join('');
                                $(y).html(content);
                            });
                        });
                });
                console.log(location.pathname);
                //是否隐藏
                // if(location.pathname.indexOf('index.html')>=0){
                //     self.pubrecmenu.css({display:'block'});
                // }else if(location.pathname.lastIndexOf('\/')>=0){
                //     self.pubrecmenu.css({display:'block'});
                // } else{
                //     self.pubrecmenu.css({display:'none'}).mouseenter(()=>
                //         self.pubrecmenu.css({display:'block'})).mouseleave(()=>
                //         self.pubrecmenu.css({display:'none'}));
                //     self.pubrecmenu.siblings('span').mouseenter(()=>
                //         self.pubrecmenu.css({display:'block'})).mouseleave(()=>
                //         self.pubrecmenu.css({display:'none'}));
                // }
        },
        initSecondNav(tab){
            let self = this;
            com.myajax.prom(self.path+'api/getdata.php?type='+tab,'',function(data){
                    let content = ``;
                    data.forEach(x=>{
                    content += `<div class="pub-nav-wrap" style="display: block;">
                    <a class="t" href="${x.t_url}" target="_blank">${x.title}</a>
                    <ul class="server-list">`;
                    x.content.split(',').forEach(y=>{
                        content += `<li class="l hl"><a href="#" target="_blank">${y}</a></li>`
                    });
                    content +=` </ul></div>`;
                    });
                self.colblcok.html(content);
            })
        }
    }
    return  vvtop;
    
});



