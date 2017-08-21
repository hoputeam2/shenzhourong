/**
 * Created by Administrator on 2017/8/18.
 */
function getId(id) {
    return document.getElementById(id)?document.getElementById(id):null;
}
/*大图滚动*/
function moving(speed,terminal,isleft){
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

/*导航栏滚动滚动条改变样式*/
function navscroll(){
    var tit = document.getElementsByTagName("nav")[0];
    var navimg=tit.getElementsByTagName("img")[0];
    var btop = document.body.scrollTop||document.documentElement.scrollTop;
    var a = tit.getElementsByTagName("a");
    if(btop>0){
        tit.setAttribute("style","background-color:white;");
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
}

/*页面JS*/
window.onload=function() {

    /*大图滚动*/
    var content = getId("index_carouse");
    var list = getId("index_img_list");
    var prev = getId("navPrevPic");
    var next = getId("navNextPic");
    var button = getId("index_imgBtn").getElementsByTagName("span");
    content.timer = null;

    next.addEventListener("click", function () {
        moving(-1905, -3810, 0);
    });
    prev.addEventListener("click", function () {
        moving(1905, 0, -3810);
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
        moving(-1905, -3810, 0);
    }, 3000);
    content.onmouseover = function () {
        clearInterval(content.timer);
    };
    content.onmouseout = function () {
        clearInterval(content.timer);
        content.timer = setInterval(function () {
            moving(-1905, -3810, 0);
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


    document.onscroll=function(){
        navscroll();
    }

};
