define(['jquery','common'],function($,com){
    var page = {
        account:'.account',
        pwd:'.password',
        incode:'.incode',
        vvcode:'.vvcode',
        code:'',
        btnlogin:'.btnlogin',
        vvtip:'.vvtip',
        conrcon:'.login-conrcon',
        isok:false,
        currentAcc:'currentAcc',
        init(){
            this.account = $(this.account);
            this.pwd = $(this.pwd);
            this.incode = $(this.incode);
            this.vvcode = $(this.vvcode);
            this.btnlogin = $(this.btnlogin);
            this.vvtip = $(this.vvtip);
            this.conrcon = $(this.conrcon);



            this.vvcode.html(this.code = com.code.enCode());
            this.currentAcc = com.mycookie.get(this.currentAcc);
            if(this.currentAcc){
                this.currentAcc = JSON.parse(this.currentAcc);
            }

            this.account.val('louiebb');
            this.pwd.val('1');

            this.incode.val(this.code);

            this.conrcon.on('click',(e)=>{
                
                // if(e.target.className.indexOf('btnlogin')>=0){
                if(e.target.classList.contains('btnlogin')){
                    this.isok = this.checkCode();
                    if(this.isok){
                        this.check();
                        // this.login();
                    }else{
                        this.vvtip[!this.isok?'removeClass':'addClass']('sr-only').html(!this.isok?'验证密码错误!':'');
                    }
                // }else if(e.target.className.indexOf('vvcode')>=0){
                }else if(e.target.classList.contains('vvcode')){
                    this.vvcode.html(this.code = com.code.enCode());
                }
            });
        },
        login(){
            if(this.isok){
                //  lgz  to do
                this.currentAcc = {account:$.trim(this.account.val()),pwd:$.trim(this.pwd.val())}
                com.mycookie.set('currentAcc',JSON.stringify(this.currentAcc),{expires:3});
                location.href = '../../index.html';
            }
            
        },
        checkCode(){
            return this.code.toLowerCase() ===this.incode.val().toLowerCase();
        },
        check(){
            let self = this;
            // let data = 'act='+$.trim(this.account.val())+'&pwd='+$.trim(this.pwd.val());
            let data = {
                act:$.trim(this.account.val()),
                pwd:$.trim(this.pwd.val())
            };

            com.myajax.syncProm('../api/check.php',data,false,(res)=>{
                self.isok = res =='success'?true:false;
                this.vvtip[!self.isok?'removeClass':'addClass']('sr-only').html(!self.isok?'账号或者密码错误!':'');
                self.login();
            });
        }
    }
    return page;
});