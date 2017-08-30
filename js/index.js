/**
 * Created by Administrator on 2017/8/18.
 */
window.onload=function() {
    function getId(id) {
        return document.getElementById(id)?document.getElementById(id):null;
    }

    //头部js
    document.onscroll=function(){
        var tit = document.getElementsByTagName("nav")[0];
        var tittop=tit.offsetTop;
        var navimg=tit.getElementsByTagName("img")[0];
        var a = tit.getElementsByTagName("a");
        var btop = document.body.scrollTop||document.documentElement.scrollTop;
        //       获取body的高度
        var clientHeight = document.documentElement.clientHeight;
        //       滚动条滚动事件
        var height = document.documentElement.scrollTop || document.body.scrollTop;
        //       console.log(height);
        var obj = document.getElementById("up");
        /*滚动超过一个屏幕显示回到顶部的div*/
        if (height >= clientHeight) {
            obj.style.display = 'block';
        }
        else {
            obj.style.display = 'none'
        }

        /*导航栏*/
        if(btop>tittop){
            tit.setAttribute("style","background-color:white;color:black;");
            for(var i = 0;i< a.length;i++){
                a[i].setAttribute("style","color:black")
            }
            navimg.setAttribute("src","../img/first_images/iphone_logo02.png");
        }
        else{
            tit.setAttribute("style","");
            for(var i = 0;i< a.length;i++){
                a[i].setAttribute("style","")
            }
            navimg.setAttribute("src","../img/first_images/145x45baise.png");
        }

    };

    /*大图滚动*/
    function picmoving(speed,terminal,isleft){
        /*获取到轮播图片的DIV*/
        var list = getId("index_img_list");
        /*获取到DIV的left值*/
        var left_val = parseInt(list.style.left);
        var btn_idx;
        /*获取到图片对应按钮*/
        var button = getId("index_imgBtn").getElementsByTagName("span");

        if(left_val===terminal){
            left_val=isleft;
        }else{
            left_val += speed;
        }
        list.style.left=left_val+"px";
        btn_idx=Math.ceil(Math.abs(left_val/(-1906)));
        for(var k=0;k<button.length;k++){
            button[k].setAttribute("class","")
        }
        button[btn_idx].setAttribute("class","on");

    }
    /*最新消息滚动*/
    function TXTmoving(speed,terminal){
        /*获取到装滚动文字的ul*/
        var TXTlist=getId("index_messageUl");
        /*获取到ul的top的值*/
        var top_val = parseInt(TXTlist.style.top);
        if(top_val===terminal){
            top_val=0;
        }else{
            top_val += speed;
        }
        TXTlist.style.top=top_val+"px";

    }
    /*大图滚动*/
    var content = getId("index_carouse");
    var list = getId("index_img_list");
    var prev = getId("navPrevPic");
    var next = getId("navNextPic");
    var button = getId("index_imgBtn").getElementsByTagName("span");
    content.timer = null;

    /*给箭头按钮绑定事件*/
    next.addEventListener("click", function () {
        picmoving(-1905, -3810, 0);
    });
    prev.addEventListener("click", function () {
        picmoving(1905, 0, -3810);
    });
    /*按钮悬浮切换对应内容及改变样式*/
    for (var i = 0; i < button.length; i++) {
        (function (n) {
            button[i].addEventListener("mouseover", function () {
                list.style.left = n * (-1905) + "px";
                for (var j = 0; j < button.length; j++) {
                    button[j].setAttribute("class", "")
                }
                button[n].setAttribute("class", "on")
            })
        })(i)
    }
    /*定时器部分*/
    content.timer = setInterval(function () {
        picmoving(-1905, -3810, 0);
    }, 3000);
    content.onmouseover = function () {
        clearInterval(content.timer);
    };
    content.onmouseout = function () {
        clearInterval(content.timer);
        content.timer = setInterval(function () {
            picmoving(-1905, -3810, 0);
        }, 3000);
    };

    /*最新消息的文字滚动*/
    var TXTlist = getId("index_messageUl");
    TXTlist.timer=null;
    TXTlist.timer = setInterval(function () {
        TXTmoving(-35, -70);
    }, 4000);
    TXTlist.onmouseover = function () {
        clearInterval(TXTlist.timer);
    };
    TXTlist.onmouseout = function () {
        clearInterval(TXTlist.timer);
        TXTlist.timer = setInterval(function () {
            TXTmoving(-35,-70);
        }, 4000);
    };


    //轮播部分
    var timer = null;
    var timer1 = null;
    var container = document.getElementById("index_example_change");
    var index_example_prev = document.getElementById("index_example_prev");   //左箭头
    var index_example_next = document.getElementById("index_example_next");    //右箭头
    var index_example_list = document.getElementById("index_example_pic");      //装图片的容器
    var index_example_button = document.getElementById("index_example_buttons").getElementsByTagName("span");   //小圆圈按钮集合
    //绑定事件
    index_example_prev.addEventListener("click", function () {
        moving(1200, 0, "-2400px");
    });
    index_example_next.addEventListener("click", function () {
        moving(-1200, -2400, "0px");
    });
    for (var i = 0; i < index_example_button.length; i++) {
        (function (n) {
            index_example_button[n].onclick = function () {
                circle(this, n);
            }
        })(i);
    }
    //编写函数
    function moving(speed, terminal, flag) {            //运动的速度，达到的极限值，判断左右方向
        var index_left_value = parseInt(index_example_list.style.left);
        if (index_left_value === terminal) {                 //判断是否达到极限值
            index_example_list.style.left = flag;
            index_left_value = parseInt(index_example_list.style.left);
        } else {
            index_left_value += speed;
            index_example_list.style.left = index_left_value + "px";
        }
        for (var i = 0; i < index_example_button.length; i++) {
            index_example_button[i].setAttribute("class", " ");
        }
        index_example_button[index_left_value / -1200].setAttribute("class", "on");
    }

    //控制下方的圆圈切换
    function circle(that, n) {                    //遍历圆圈数组，先清除样式，再添加样式
        for (var i = 0; i < index_example_button.length; i++) {
            index_example_button[i].setAttribute("class", "");
        }
        that.setAttribute("class", "on");
        index_example_list.style.left = n * (-1200) + "px";
    }



//定时器
    timer = setInterval(function () {
        moving(-1200, -2400, "0px");
    }, 2500);

    container.onmouseover = function () {              //鼠标悬停时清除定时器
        clearInterval(timer);
        clearInterval(timer1);
    };
    container.onmouseout = function () {                 //鼠标移走重新启动定时器
        clearInterval(timer);
        clearInterval(timer1);
        timer1 = setInterval(function () {
            moving(-1200, -2400, "0px");
        }, 3500);
    };



//        风控无人机部分切换
    var section_timer=null;
    var section_timer1=null;
    var container_main=document.getElementById("container_main");
    var section_list =document.getElementById("section_list");
    var section=document.getElementsByClassName("section_title");
//绑定事件
    for(var j=0;j<section.length;j++){
        (function(n){
            section[n].onmouseover=function(){
                button_switch(this,n);
            }
        })(j);
    }
//事件处理函数
    function Switch(ori,ter,spe){                //运动的速度，达到的极限值，判断左右方向
        var section_left_val=parseInt(section_list.style.left );
        if(section_left_val===ter){
            section_left_val=ori;
        }else {
            section_left_val+=spe;
        }
        section_list.style.left=section_left_val+"px";
        for(var i=0;i<section.length;i++){
            section[i].setAttribute("id","");
        }
        section[section_left_val/-1200].setAttribute("id","on");
    }
//按钮切换
    function button_switch(that,num) {           //遍历头像数组，先清除样式，再添加样式
        for(var i=0;i<section.length;i++){
            section[i].setAttribute("id","");
        }
        that.setAttribute("id","on");
        //控制图片移动到当前位置
        section_list.style.left=num*(-1200)+"px";
    }
//添加定时器
    section_timer=setInterval(function(){
        Switch(0,-4800,-1200)
    },3500);

    container_main.onmouseover=function(){            //鼠标悬停时清除定时器
        clearInterval(section_timer);
        clearInterval(section_timer1)
    };
    container_main.onmouseout=function(){            //鼠标移走重新启动定时器
        section_timer1=setInterval(function(){
            Switch(0, -4800, -1200)
        },3500);
    };


   //人物切换
   var person_content=document.getElementById("index_person_content");
   var person_span=person_content.getElementsByTagName("span");   //装图片和姓名的span
   var person_img=person_content.getElementsByTagName("img");     //人物头像
   var person_text=person_content.getElementsByClassName("index_person_ditail")[0];   //介绍文字部分
   var arr=[
       "在不断变化的市场环境中，神州融不断革新风控技术，并整合消费金融生态上下游的力量，连接各类信贷场景与银行资金，是值得信赖的合作伙伴。",
       "神州融秉承“打造银行级消费金融解决方案”的理念，对自身的专业技术，系统架构、流程规范、安全合规性都坚持了严苛的标准和要求，相信大数据风控会助力消费金融行业更安全快速的发展。",
       "从“大数据风控专家”到提供“消费金融解决方案领导者”，神州融一直走在科技金融行业前列，为客户的业务发展保驾护航，在激烈的市场竞争中获得稳健的发展。",
       "神州融对消费金融行业的深刻理解和强大的技术实力，能够针对客户的独特需求设计定制化、开创性的解决方案。先进的业务理念和扎实的技术手段，可以降低非金融从业机构进入消费金融领域的门槛。",
       "在我们所接触的大数据风控供应商中，神州融的服务最全面也最专业的，从征信数据、IT系统、评分建模到资金对接，使客户无论处在业务发展的哪个阶段，都能获得专业的服务与支持。"
   ];
    var time1=null;
    var time2=null;
    var start=1;          //定义变量保存索引
    var current_idx;            //定义一个变量保存当前位置索引
    time1=setInterval(function(){            //设置定时器
        slide();
    },3000);
        function slide(){                            //构造函数
            var idx=start++%[person_span.length];       //start每次自加1并对span长度 5 取模，可循环得到0,1,2,3,4，可看成当前索引
            for(var i=0;i<person_span.length;i++){        //循环人头部分，先清除样式
                person_img[i].setAttribute("class","");
                person_span[i].setAttribute("class","");
            }
            person_img[idx].setAttribute("class","index_person_img");        //每次循环，重新添加样式
            person_span[idx].setAttribute("class","index_person_list");
            person_text.innerHTML=arr[idx];                  //显示idx索引 对应数组中的索引的文字部分
        }
       for(var i=0;i<person_span.length;i++){               //先循环人头部分
           (function(n){                                     //利用闭包函数的独立执行性
               person_span[n].addEventListener("mouseover",function(){     //给span绑定鼠标悬停事件
                   clearInterval(time1);                    //清除定时器
                   clearInterval(time2);
                    for(var j=0;j<arr.length;j++){
                       if(n===j){                    //判断，当前索引=数组索引，显示对应的数组索引中的文字
                           person_text.innerHTML=arr[n];
                       }
                   }
                   for(var k=0;k<person_span.length;k++){
                       person_img[k].setAttribute("class","");      //对应的先清除样式，再循环的添加样式
                       person_span[k].setAttribute("class","");
                   }
                   person_img[n].setAttribute("class","index_person_img");
                   person_span[n].setAttribute("class","index_person_list");
                   person_text.innerHTML=arr[n];
                   current_idx=n;                         //将当前位置索引赋值给变量current_idx
               },false);

               person_span[n].addEventListener("mouseout",function(){                //绑定鼠标移出事件
                   time2=setInterval(function(){
                       var idx=current_idx++%[person_span.length];           //当前索引自加对5取模，保证鼠标移走后能继续从当前索引位置下继续走
                       for(var i=0;i<person_span.length;i++){
                           person_img[i].setAttribute("class","");       //同时先清空样式，再循环添加样式
                           person_span[i].setAttribute("class","");
                       }
                       person_img[idx].setAttribute("class","index_person_img");
                       person_span[idx].setAttribute("class","index_person_list");
                       person_text.innerHTML=arr[idx];
                   },3000)
               },false)
           })(i)
       }
        //最新动态切换
    (function(){
        var index_news_focus = document.getElementsByClassName("index_latest_dec");
        var index_news_detail = document.getElementsByClassName("index_latest_detail");
        for (var k = 0; k < index_news_focus.length; k++) {       //利用循环遍历两个div数组，获得索引，先清除样式，再循环添加样式
            index_news_focus[k].index = k;
            index_news_focus[k].onmouseover = function () {
                for (var j = 0; j < index_news_detail.length; j++) {
                    index_news_detail[j].style.display = "none";
                    index_news_focus[j].style = "black";
                }
                this.style.color = "#1c9cd1";
                index_news_detail[this.index].style.display = "block";
            }
        }
    })();

};


