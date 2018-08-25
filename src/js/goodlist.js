require(['config'],function(){
    require(['jquery','common','top','bottom'],function($,com,vvtop,vvbott){
        var page = {
            header:'#pub-header',
			footer:'#pub-footer',
			one:'.one',
            init(){
                this.header = $(this.header);
                this.footer = $(this.footer);
                this.one = $(this.one);
                this.headerInit();
                this.navInit();
            },
            navInit(){
                let self = this;
                $.get('../api/getdata.php',{type:'two'},function(text){
                    console.log(text);
                })
            },
            headerInit(){
                this.header.load('top.html',function(){
                    vvtop.init('../');
                });
            },
            footerInit(){
                this.footer.load('bottom.html',function(){
                    vvbott.init('../');
                });
            }
        }
        page.init();

    });
});