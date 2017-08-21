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
     var index_bd_box=document.getElementsByClassName("index_bd");
     var index_button_img=document.getElementsByClassName("index_icon");

            for(var x=0;x<index_button_img.length;x++){
                (function(n){
                    index_button_img.onmouseover=function(){
                        imgChange(this,n);
                    }
            })(x);
        }

    function imgChange(that,n){
          
    }
        //
        //var index_function_focus = document.getElementsByClassName("index_icon");
        //var index_function_detail = document.getElementsByClassName("index_bd");
        //for (var k = 0; k < index_function_focus.length; k++) {
        //    index_function_focus[k].index = k;
        //    (function (n){
        //        index_function_focus[n].onmouseover = function () {
        //            for (var j = 0; j < index_function_detail.length; j++) {
        //
        //                index_function_detail[j].style.display = "none";
        //                index_function_focus[j].style.display = "block";
        //                console.log(index_function_focus[j].style.display);
        //
        //            }
        //
        //            this.style.color = "#1c9cd1";
        //            console.log("当前鼠标指向索引："+n);
        //            index_function_detail[this.index].style.display = "block";
        //        }
        //    })(k)
        //}
        //
        // var index_bd=document.getElementsByClassName("index_bd");





        //人物切换

    (function(){
        var times=null;
        var times1=null;
        var index_focus_box=document.getElementById("index_person_dec");
        var index_dl=document.getElementsByClassName("index_person_list");
        var index_box_list=index_focus_box.getElementsByClassName("index_person_ditail");
        var index_img=index_focus_box.getElementsByTagName("dt");
        var index_dd=index_focus_box.getElementsByTagName("dd");
        for(var i=0;i<index_box_list.length;i++){
            index_img[i].index=index_box_list[i].index=i;
        }
        var num=0;
        times=setInterval(function(){
            tric();
        },1600);
        function tric(){
            var idx=num++%(index_box_list.length);
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
        for(var k=0;k<index_dl.length;k++){
            index_dl[k].index=k;
            index_dl[k].onmouseover=function(){
                index_img[k].setAttribute("class","active1");
                index_dd[k].style.color="orange";
                index_box_list[k].style.color="orange";
            };
        }

        index_focus_box.onmouseover=function(){
            clearInterval(times);
            clearInterval(times1);
        };

        index_focus_box.onmouseout=function(){
            clearInterval(times);
            clearInterval(times1);
            times1=setInterval(function(){
                tric();
            },1600)
        };

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
