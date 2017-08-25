/**
 * Created by Administrator on 2017/8/18.
 */
window.onload=function() {
    function getId(id) {
        return document.getElementById(id)?document.getElementById(id):null;
    }
    /*大图滚动*/
    function picmoving(speed,terminal,isleft){
        var list = getId("index_img_list");
        var left_val = parseInt(list.style.left);
        var btn_idx;
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
        var TXTlist=getId("index_messageUl");
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

    next.addEventListener("click", function () {
        picmoving(-1905, -3810, 0);
    });
    prev.addEventListener("click", function () {
        picmoving(1905, 0, -3810);
    });

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
    var index_example_prev = document.getElementById("index_example_prev");
    var index_example_next = document.getElementById("index_example_next");
    var index_example_list = document.getElementById("index_example_pic");
    var index_example_button = document.getElementById("index_example_buttons").getElementsByTagName("span");
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
    function moving(speed, terminal, flag) {
        var index_left_value = parseInt(index_example_list.style.left);
        if (index_left_value === terminal) {
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
    function circle(that, n) {
        for (var i = 0; i < index_example_button.length; i++) {
            index_example_button[i].setAttribute("class", "");
        }
        that.setAttribute("class", "on");
        index_example_list.style.left = n * (-1200) + "px";
    }



//定时器
    timer = setInterval(function () {
        moving(-1200, -2400, "0px");
    }, 1700);

    container.onmouseover = function () {
        clearInterval(timer);
        clearInterval(timer1);
    };
    container.onmouseout = function () {
        clearInterval(timer);
        clearInterval(timer1);
        timer1 = setInterval(function () {
            moving(-1200, -2400, "0px");
        }, 1700);
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
    function Switch(ori,ter,spe){
        var section_left_val=parseInt(section_list.style.left);
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
    function button_switch(that,num) {
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
    },1600);

    container_main.onmouseover=function(){
        clearInterval(section_timer);
        clearInterval(section_timer1)
    };
    container_main.onmouseout=function(){
        section_timer1=setInterval(function(){
            Switch(0, -4800, -1200)
        },1600);
    };




        //人物切换

    (function(){
        var times=null;
        var times1=null;
        var index_focus_box=document.getElementById("index_person_dec");
        //var index_dl=document.getElementsByClassName("index_person_list");
        var index_box_list=index_focus_box.getElementsByClassName("index_person_ditail");
        var index_img=index_focus_box.getElementsByTagName("dt");
        var index_dd=index_focus_box.getElementsByTagName("dd");
        var click_obj=document.getElementsByClassName("test");
        var start=0;
        for(var k=0;k<5;k++){
            click_obj[k].idx=k;
        }
        for(var i=0;i<index_box_list.length;i++){
            index_img[i].index=index_box_list[i].index=i;
        }
        //var num=0;
        times=setInterval(function(){
            tric();
        },1000);
        function tric(){
            //var idx=num++%(index_box_list.length);
            var idx=start++%(index_box_list.length);
            for(var i=0;i<index_box_list.length;i++){
                index_box_list[i].style.display="none";
                index_img[i].setAttribute("class","");
                for(var j=0;j<index_dd.length;j++){
                    index_dd[j].style.color="#fff";
                }
             }
            index_box_list[idx].style.cssText="color:orange;position:absolute;top:250px;left:40px;display:block;width: 1200px;text-align: center;";
            index_img[idx].setAttribute("class","active1");
            index_dd[idx].style.color="orange";
        }

        (function(){
            index_focus_box.onmouseover=function(e){
                clearInterval(times);
                clearInterval(times1);
               
            }
        })(i);
        index_focus_box.onmouseout=function(){
            clearInterval(times);
            clearInterval(times1);
            times1=setInterval(function(){
                tric(start);
            },1000)
        };

        //for(var y=0;y<index_dl.length;y++){
        //    (function(n){
        //        index_dl[n].onmouseover=function(){
        //            clearInterval(times);
        //            clearInterval(times1);
        //            for(var j=0;j<index_dd.length;j++){
        //                index_box_list[j].style.color="position:absolute;top:250px;left:40px;display:block;width: 1200px;text-align: center;";
        //                index_img[j].setAttribute("class","");
        //                index_dd[j].style.color="";
        //            }
        //            index_box_list[n].style.cssText="color:orange;position:absolute;top:250px;left:40px;display:block;width: 1200px;text-align: center;";
        //            index_img[n].setAttribute("class","active1");
        //            index_dd[n].style.color="orange";
        //        }
        //    })(y);
        //}

    })();



        //最新动态切换
    (function(){
        var index_news_focus = document.getElementsByClassName("index_latest_dec");
        var index_news_detail = document.getElementsByClassName("index_latest_detail");
        for (var k = 0; k < index_news_focus.length; k++) {
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

