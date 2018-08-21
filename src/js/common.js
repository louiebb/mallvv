/* 
* @Author: louiebb
* @Date:   2018-07-29 16:59:32
* @Last Modified by:   louiebb
* @Last Modified time: 2018-07-30 10:08:15
*/

define(['jquery'],function($){
    var com = {
        mystyle:{
            getCss:function(ele,attr){
                if (window.getComputedStyle) { //Standard browser
                    return getComputedStyle(ele)[attr];
                } else if (ele.currentStyle) { //ie8-
                    return ele.currentStyle[attr];
                } else { //other
                    return ele.style[attr];
                }
            },
            animate:function(ele,opt,callback){
                //记录属性数量
                var timerLen = 0;
                var self = this;
                for(var attr in opt){
                    //每循环一个属性+1
                    timerLen++;
                    (function(attr){
                        //获取目标值 
                        var target = opt[attr];
                        var timerName = attr + 'timer';
        
                        //避免抖动
                        clearInterval(ele[timerName]);
        
                        ele[timerName] = setInterval(function(){
                            //获取当前值
                            // var current = getComputedStyle(ele)[attr];
                            var current = self.getCss(ele,attr);
        
                            //提取单位
                            var unit = current.match(/^([\-\d\.]+)([a-z]*)$/);
        
                            if(!unit){
                                //如果得到null，意味动画无法进行，直接退出
                                clearInterval(ele[timerName]);
                                return;
                            }
                            
                            // 提取值和单位
                            current = unit[1]*1;
                            unit = unit[2];
        
                            //计算缓冲速度
                            var speed = (target-current)/10;//0.6->1,-0.6->-1
        
                            speed = speed<0 ? Math.floor(speed) : Math.ceil(speed);
        
                            //针对opacity处理speed
                            if(attr === 'opacity'){
                                speed = speed<0 ? -0.05 : 0.05;
                            }
                            current += speed;
                            
                            //判断结束条件
                            if(current === target){
                                clearInterval(ele[timerName]);
                                //重置目标值
                                current  = target;
                                //每结束一个定时器，数量-1
                                timerLen--;
                                //动画结束后要做的事
                                if(typeof callback ==='function' && timerLen===0){
                                    callback();
                                }
                            }
                            //设置样式
                            ele.style[attr] = current + unit;
                        },30);
                    })(attr);
                }
            }
        },
        //轮播图构造函数
        Carousel: function(options){
            // 属性
            // 默认值
            let defaults = {
                ele:'',//必填参数
                imgs:[],//必传参数
                width:1349,
                height:400,
                index:0,
                page:true,//是否显示分页
                button:true,//是否显示左右按钮
                type:'horizontal',//动画类型：vertical(垂直)，horizontal(水平),fade(淡入淡出)
                seamless:true,//是否无缝滚动,
                duration:12000,//轮播间隔时间
            }
            
            // 扩展默认参数
            this.opt = Object.assign({},defaults,options);
            this.len = this.opt.imgs.length;

            this.__proto__.init = function(){
                var opt = this.opt;
                /*
                    * 获取/生成元素
                    * 绑定事件
                 */
                
                var ele = document.querySelector(opt.ele);

                // 指定专有类型
                ele.classList.add('mallvv-carousel');

                // 设置样式（宽高）
                ele.style.width = opt.width + 'px';
                ele.style.height = opt.height + 'px';

                // 生成图片(ul,li,img)
                let ul = document.createElement('ul');

                // 给ul添加类型：设置轮播类型
                ul.className = opt.type;//horizontal,vertical,fade

                // 水平轮播需要给ul添加宽度
                if(opt.type === 'horizontal'){
                    ul.style.width = opt.width*this.len + 'px';
                }else if(opt.type === 'fade'){
                    ul.style.width = opt.width + 'px';
                    ul.style.height = opt.height + 'px';
                }

                ul.innerHTML = opt.imgs.map(url=>{
                    return '<li><img src="'+url+'"/></li>';
                }).join('');

                // 写入页面
                ele.appendChild(ul);

                // 分页
                if(opt.page){
                    this.page = document.createElement('div');
                    this.page.className = 'page';
                    for(var i=0;i<this.len;i++){
                        var span = document.createElement('span');
                        span.innerText = i+1;

                        // 高亮
                        if(i===opt.index){
                            span.className = 'active';
                        }
                        this.page.appendChild(span);
                    }

                    ele.appendChild(this.page);


                }

                // 左右按钮
                if(opt.button){
                    let btnPrev = document.createElement('span');
                    btnPrev.className = 'btn-prev';
                    btnPrev.innerHTML = '&lt;';

                    let btnNext = document.createElement('span');
                    btnNext.className = 'btn-next';
                    btnNext.innerHTML = '&gt;';

                    ele.appendChild(btnPrev);
                    ele.appendChild(btnNext);
                }

                // 传递参数
                this.ul = ul;
                this.ele = ele;



                // 初始化
                // 页面进入自动轮播
                this.timer = setInterval(this.autoPlay.bind(this),opt.duration);
                this.play();
                // 鼠标移入移出
                ele.onmouseover = ()=>{
                    this.stop();
                }
                ele.onmouseout = ()=>{
                    this.timer = setInterval(this.autoPlay.bind(this),opt.duration);
                }

                // 点击分页切换
                ele.onclick = e=>{
                    if(e.target.parentNode.className === 'page'){
                        opt.index = e.target.innerText-1;

                        this.play();
                    }else if(e.target.className === 'btn-prev'){
                        opt.index--;
                        this.play();
                    }else if(e.target.className === 'btn-next'){
                        opt.index++;
                        this.play();
                    }
                }
                
                
            }
            this.__proto__.autoPlay = function(){
                this.opt.index++;
                this.play();
            }
            this.__proto__.play = function(){
                let opt = this.opt;
                // 到达最后一张后重置到第一张
                if(opt.index>=this.len){
                    opt.index = 0;
                }else if(opt.index<0){
                    opt.index = this.len-1;
                }

                // var type = {vartical:'top',horizontal:'left',fade:'opacity'}

                var obj = {}

                // 水平
                if(opt.type === 'horizontal'){
                    obj.left = -opt.index*opt.width;
                    com.mystyle.animate(this.ul,obj);
                }else if(opt.type === 'vertical'){
                    obj.top = -opt.index*opt.height;
                    com.mystyle.animate(this.ul,obj);
                }else if(opt.type === 'fade'){
                    for(var i=0;i<this.len;i++){
                     com.mystyle.animate(this.ul.children[i],{opacity:0});
                    }
                    com.mystyle.animate(this.ul.children[opt.index],{opacity:1});

                }
                // 页码高亮
                if(this.page){
                    for(var i=0;i<this.len;i++){
                        this.page.children[i].className = '';
                    }
                    this.page.children[opt.index].className = 'active';
                }
            }
            this.__proto__.stop = function(){
                clearInterval(this.timer);
            }
            // 初始化并传递参数
            this.init();
        },
        myajax:{
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
    };

    return com;
});
