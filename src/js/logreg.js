require(['config'],function(){
    require(['jquery','common','login','register'],function($,com,log,reg){
        var logreg = {
            box:'#pub-main',
            init(){
                this.box = $(this.box);
                this.boxInit(com.mydoc.getUrlParms(location.search).page);
            },
            boxInit(page){
                if(page =='log'){
                    this.box.load('../html/login.html',function(){
                        log.init();
                    });
                }else if(page=='reg'){
                    this.box.load('../html/register.html',function(){
                        // reg.init();
                    });
                }
            }
        }
        logreg.init();
    });
})