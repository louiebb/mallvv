require.config({
    //配置别名
    paths:{
        jquery:'jquery-3.2.1',
        bootstrap:'../lib/bootstrap-3.3.7-dist/js/bootstrap',
        zoom:'../lib/jquery-lgzzoom/jquery.lgzzoom'
    },
    shim:{
        top:['jquery'],
        bootstrap:['jquery']
    }
})