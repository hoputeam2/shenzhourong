/**
 * Created by Administrator on 2017/8/19.
 */

function getId(id) {
    return document.getElementById(id)?document.getElementById(id):null;
}

function navscroll(){
    var tit = document.getElementsByTagName("nav")[0];
    var navimg=tit.getElementsByTagName("img")[0];
    var btop = document.body.scrollTop||document.documentElement.scrollTop;
    var pagenav = document.getElementById("pro_pagenav");
    var footpic = document.getElementById("foot_pic");

    if(btop>0&&btop<360){
        tit.setAttribute("style","background-color:white;color:black;");
        navimg.setAttribute("src","../img/first_images/iphone_logo02.png");
        pagenav.setAttribute("style","");
    }
    else if(btop>360){
        pagenav.setAttribute("style","position:fixed;top:0;z-index:999;background-color:white");
    }

    else{
        tit.setAttribute("style","");
        navimg.setAttribute("src","../img/first_images/145x45baise.png");
    }

}
        function moving(speed,terminal,isleft){
            var list = getId("pro_carouselist");
            var left_val = parseInt(list.style.left);
            var btn_idx;
            var button = document.getElementsByTagName("p");
            var dl = document.getElementsByTagName("dl");

            if(left_val===terminal){
                left_val=isleft;
            }else{
                left_val += speed;
            }
            list.style.left=left_val+"px";
            btn_idx=Math.ceil(Math.abs(left_val/(-1261)));


            for(var k=0;k<button.length;k++){
                button[k].setAttribute("class","")
            }
            button[btn_idx].setAttribute("class","on");
            for(var c=0;c<dl.length;c++){
                dl[c].setAttribute("class","")
            }
            dl[btn_idx].setAttribute("class","logoturn");
        }

window.onload=function(){

    document.onscroll=function(){
        navscroll();
    };

    var next=getId("pro_NextPic");
    var prev=getId("pro_PrevPic");
    prev.addEventListener("click", function () {
        clearInterval(list.timer);
        moving(1260,0,-2520)
    });

    next.addEventListener("click", function () {
        clearInterval(list.timer);
        moving(-1260,-2520,0)
    });


    var product = document.getElementsByTagName("dl");
    var button = document.getElementsByTagName("p");
    var list = getId("pro_carouselist");
    for (var i = 0; i < product.length; i++) {
        (function (n) {
            product[i].addEventListener("mouseover", function () {
                clearInterval(list.timer);
                list.style.left = n * (-1260) + "px";
                for (var j = 0; j < button.length; j++) {
                    button[j].setAttribute("class", "");
                }
                button[n].setAttribute("class", "on");

                for(var c=0;c<product.length;c++){
                    product[c].setAttribute("class","")
                }
                product[n].setAttribute("class","logoturn");
            });
            product[i].addEventListener("mouseout", function () {
                list.timer = setInterval(function () {
                    moving(-1260,-2520,0);
                }, 3000);
            })
        })(i)
    }


    list.timer = setInterval(function () {
        moving(-1260,-2520,0);
    }, 3000);
    list.onmouseover = function () {
        clearInterval(list.timer);
    };
    list.onmouseout = function () {
        clearInterval(list.timer);
        list.timer = setInterval(function () {
            moving(-1260,-2520,0);
        }, 3000);
    };

};













