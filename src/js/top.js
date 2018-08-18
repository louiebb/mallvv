var vvtop = {
    currentpro:'.currentpro',
    province:'.province',
    login:'.pub-login',
    register:'.pub-register',
    order:'.pub-order',
    business:'.pub-buscen',
    server:'.pub-server',
    follow:'.pub-followus',
    init(){
        this.currentpro = $(this.currentpro);
        this.province = $(this.province);
        this.login = $(this.login);
        this.register = $(this.register);
        this.order = $(this.order);
        this.business = $(this.business);
        this.server = $(this.server);
        this.follow = $(this.follow);
        this.initProvince(this);

    },
    initProvince(self){
        $.ajax({
            url:'../api/getProvince.php',
            success:function(text){
                var content = JSON.parse(text).map(x=>`<li>${x.name}</li>`);
                self.province.html(content).on('click','li',function(e){
                    var $lis = $(this).siblings('li');
                    $lis.removeClass('active');
                    this.classList.add('active');
                    self.currentpro.text(this.innerText);
                });
            }
        });
    }
}


jQuery($=>{
    vvtop.init();
});