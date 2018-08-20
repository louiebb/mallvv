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
    init(){
        //获取节点
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
        this.pubnavfirst = $(this.pubnavfirst);
        this.colblcok = $(this.colblcok);
        this.pubnavsecond = $(this.pubnavsecond);
        
        let self = this;
        //绑定事件
        this.pubnavfirst.on('mouseenter','li',function(){
            if(this.className){
                self.initSecondNav(this.className);
                self.pubnavsecond.css('display','block');
            }
        });
        this.pubnavsecond.on('mouseleave',function(){
            self.pubnavsecond.css('display','none');            
        })


        //初始化
        this.initProvince(this);
        this.initPubNav(this);
        this.initRecommend();


    },
    initProvince(self){
        self.ajaxProm('../api/getProvince.php','',function(txt){
            var content = JSON.parse(txt).map(x=>`<li>${x.name}</li>`);
            self.province.html(content).on('click','li',function(e){
                var $lis = $(this).siblings('li');
                $lis.removeClass('active');
                this.classList.add('active');
                self.currentpro.text(this.innerText);
            });
        })
    },
    initPubNav(self){
        self.ajaxProm('../api/getnav.php','',function(data){
            let content = JSON.parse(data).map(x=>`
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
        this.ajaxProm('../api/getnavValue.php?id='+navid,'',function(data){
            data = JSON.parse(data);
            let content ;
            if(data.length && data[0].navid !=5){
                content =data.map(x=>`<li><a href="${x.url}">${x.value}<a/></li>`).join('');
            }else if(data.length){
                content =`<p>${data[0].value}</p>
                            <p>${data[1].value}</p>
                            <img src="../img/top/${data[2].value}"/>`;
            }
            ele.html(content);
        });
    },
    initRecommend(){
            let self = this;
            this.ajaxProm('../api/getdata.php?type=rec','',function(x){
                    let  content =JSON.parse(x).map(j=>{
                    return `<div class="pub-menu-list">
                    <div><a href="${j.url}">${j.title}</a></div>
                    <ul class="clearfix" data-id="${j.id}">
                    </ul></div>`;
                }).join('');
                    self.pubrecmenu.html(content);
                    let  $uls = self.pubrecmenu.children().children('ul');
                    $uls.each(function(x,y){
                        self.ajaxProm('../api/getdata.php?type=recval&id='+y.dataset.id,'',function(k){
                            let content = JSON.parse(k).map(z=>`<li><a href="${z.url}">${z.val}</a></li>`).join('');
                            $(y).html(content);
                        });
                    });
            });
        
    },
    initSecondNav(tab){
        let self = this;
        this.ajaxProm('../api/getdata.php?type='+tab,'',function(data){
             data = JSON.parse(data);
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
    },
    ajaxProm(url,data,callback){
        let Prom = new Promise((resolve,reject)=>{
            $.ajax({
                url:url,
                success:function(data){
                    resolve(data);
                }
            });
        });
        Prom.then(data=>{
            callback(data);
        });
    }
    
}


jQuery($=>{
    vvtop.init();
});