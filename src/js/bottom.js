
define([], function(){
    var mybott={
        pubfoottel:'.pub-footer-left',
        pubfooterright:'.pub-footer-right',
        init(path){
            this.path = path;
            this.pubfoottel = $(this.pubfoottel);
            this.pubfooterright = $(this.pubfooterright);
            this.pubfoottel.find('img').prop({src:this.path+'/img/top/foot-tel.png'});
            this.pubfooterright.find('.app img').prop({src:this.path+'/img/top/weixin-app.png'});
            this.pubfooterright.find('.weixin img').prop({src:this.path+'/img/top/mallvvCode.gif'});
        }
    }
    return mybott;
});
