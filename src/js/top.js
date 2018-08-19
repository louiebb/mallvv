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
    init(){
        this.currentpro = $(this.currentpro);
        this.province = $(this.province);
        this.login = $(this.login);
        this.register = $(this.register);
        this.order = $(this.order);
        this.business = $(this.business);
        this.server = $(this.server);
        this.follow = $(this.follow);
        this.pubtopright = $(this.pubtopright);
        this.initProvince(this);
        this.initPubNav(this);

    },
    initProvince(self){
        $.ajax({
            url:'../api/getProvince.php',
            success:function(txt){
                if(txt){
                    var content = JSON.parse(txt).map(x=>`<li>${x.name}</li>`);
                    self.province.html(content).on('click','li',function(e){
                        var $lis = $(this).siblings('li');
                        $lis.removeClass('active');
                        this.classList.add('active');
                        self.currentpro.text(this.innerText);
                    });
                }
            }
        });
    },
    initPubNav(self){
        let navPromise = new Promise((resolve,reject)=>{
            $.ajax({
                url:'../api/getnav.php',
                success:function(data){
                    resolve(data);
                }
            });
        });

        navPromise.then(data=>{
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
        });

        self.pubtopright.on('mouseenter','dd',function(){    
            self.initnavVal($(this).children('div').attr('data-id'),$(this).children('ul'));
        });
    },
    initnavVal(navid,ul){
        let navValPro = new Promise((re,rc)=>{
            $.ajax({
                url:'../api/getnavValue.php?id='+navid,
                success:function(data){
                    re(JSON.parse(data));
                }
            });
        });
        navValPro.then(data=>{
            let content ;
            if(data.length && data[0].navid !=5){
                content =data.map(x=>`<li><a href="${x.url}">${x.value}<a/></li>`).join('');
            }else if(data.length){
                content =`<p>${data[0].value}</p>
                            <p>${data[1].value}</p>
                            <img src="../img/top/${data[2].value}"/>`;
            }
            ul.html(content);
        });
    }
}


jQuery($=>{
    vvtop.init();
});