/**
 * Created by Administrator on 2017/8/18.
 */
window.onload=function() {
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
                if(e.target.nodeName=='IMG') {
                    start = e.target.idx;
                    for (var j = 0; j < index_img.length; j++) {
                        index_img[j].setAttribute("class","");
                    }
                    e.target.parentNode.setAttribute("class","active1");
                    document.getElementsByClassName("dd"+start)[0].style.color="orange";
                }
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
    var btop = document.body.scrollTop||document.documentElement.scrollTop;
    if(btop>tittop){
        tit.setAttribute("style","background-color:white;color:black;");
        navimg.setAttribute("src","../img/first_images/iphone_logo02.png");
    }
    else{
        tit.setAttribute("style","");
        navimg.setAttribute("src","../img/first_images/145x45baise.png");
    }

}
