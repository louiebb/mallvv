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
                // this.login();

                //lgz question: string 如何借用Array的include
                // console.log(Array.prototype.includes.call(e.target.className,'btnlogin'))
            
                if(e.target.className.indexOf('btnlogin')>=0){
                this.isok = this.checkCode();
                if(this.isok){
                    this.check();
                }else{
                    this.vvtip[!this.isok?'removeClass':'addClass']('sr-only').html(!this.isok?'验证密码错误!':'');
                }
                }else if(e.target.className.indexOf('vvcode')>=0){
                    this.vvcode.html(this.code = com.code.enCode());
                }
            });
        },
        login(){
            // this.check();
            console.log(2);
            this.currentAcc = {account:$.trim(this.account.val()),pwd:$.trim(this.pwd.val())}
            com.mycookie.set('currentAcc',JSON.stringify(this.currentAcc),{expires:3});
            location.href = '../../index.html';
        },
        checkCode(){
            return this.code.toLowerCase() ===this.incode.val().toLowerCase();
        },
        check(){
            let self = this;
            let data = 'act='+$.trim(this.account.val())+'&pwd='+$.trim(this.pwd.val());
            com.myajax.syncProm('../api/check.php',data,(res)=>{
                let isok = res =='success'?true:false;
                console.log(1);
                this.vvtip[!isok?'removeClass':'addClass']('sr-only').html(!isok?'账号或者密码错误!':'');
                if(isok){
                    self.login();
                }
            });
        }
    }
    return page;
});