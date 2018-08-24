define(['jquery','common'],function($,$c){
    var page = {
        regnav:'.reg-nav',
        regacc:'.reg-acc',
        regvcode:'.reg-vcode',
        vvcode:'.reg-vvcode',
        code:'',
        phonecode:'',
        regpcode:'.reg-pcode',
        btncode:'.btncode',
        agree:'.agree',
        isagree:true,
        accok:false,
        vcodeok:false,
        pcodeok:false,
        btnnext:'.btnnext',
        init(){
            this.regnav=$(this.regnav);
            this.regacc=$(this.regacc);
            this.regvcode=$(this.regvcode);
            this.vvcode=$(this.vvcode);
            this.regpcode=$(this.regpcode);
            this.btncode=$(this.btncode);
            this.agree=$(this.agree);
            this.btnnext=$(this.btnnext);

            this.regacc.val('18898601334');
            this.vvcode.html(this.code=$c.code.enCode());
            this.regvcode.val(this.code);

            let self = this;
            //绑定事件
            //验证码点击
            this.vvcode.click(function(){
                self.vvcode.html(this.code=$c.code.enCode());
            });

            // lgz question :什么情况下提交表单？,点击按钮的时候验证？还是每个表单移出单个变量控制全局
            //光标移出
            this.regacc.blur(function(){
                let str = !(self.accok =(!$c.myreg.phone(this.value)))?'请输入11位正确的手机号':'';
                
                if(self.accok){
                    $c.myajax.syncProm('../api/checkAccount.php',{act:this.value},false,(res)=>{
                        if(res.trim()=="fail"){
                            str ="用户名已注册";
                            $(this).siblings('em').removeClass('warptip').addClass('errortip');
                            self.accok = false;
                        }else{
                            str ="用户名可用";
                            $(this).siblings('em').removeClass('errortip').addClass('warptip');
                        }
                        $(this).siblings('em').html(str);
                    });
                }else{
                    $(this).siblings('.errortip').html(str);
                }
            });
            this.regvcode.blur(function(){
                $(this).siblings('.errortip').html(!(self.vcodeok =!(this.value!=self.code))?'验证码错误':'');
            });
            this.regpcode.blur(function(){
                $(this).siblings('.errortip').html(!(self.pcodeok=!(this.value!=self.phonecode))?'手机验证码错误':'');   
            });
            //获取手机验证码
            this.btncode.click(function(){
                if(!self.regacc.val()){
                    alert('请输入手机号码');
                    return;
                }
                self.regpcode.siblings('em').html('');
                console.log(self.phonecode=$c.code.numCode());
            });

            this.agree.click(function(){
                self.isagree=$(this).siblings('label').toggleClass('active').hasClass('active');
            });
            this.btnnext.click(()=>{
                self.agree.siblings('.errortip').html(self.isagree?'':'请阅读并同意该协议').css({top: '26px',left: '39px'})
                console.log(self.vcodeok,self.accok,self.pcodeok)
                if(self.vcodeok&&self.accok&&self.pcodeok&&self.isagree){
                    // console.log('下一步');
                    $c.myajax.syncProm('../api/register.php',{regaccount:this.regacc.val(),regpwd: this.regpcode.val()},false,function(res){
                        if(res.trim()=="success"){
                            console.log('注册成功');
                        }else{
                            console.log('注册失败');
                        }
                    });
                }else{
                    console.log('提交数据不正确');
                }
                
            });
            //初始化

        },
        nextFn(){}
    }
    return page;
});