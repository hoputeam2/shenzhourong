/**
 * Created by Administrator on 2017/8/19.
 */
/*获取ID*/
function getId(id) {
    return document.getElementById(id)?document.getElementById(id):null;
}
/*导航吸顶变换样式*/
function navscroll(){
    var tit = document.getElementsByTagName("nav")[0];
    var navimg=tit.getElementsByTagName("img")[0];
    var btop = document.body.scrollTop||document.documentElement.scrollTop;
    var pagenav = getId("pro_pagenav");

    /*滚动条在0-360之间时导航栏吸顶*/
    /*滚动条拉到360之后页面导航栏吸顶覆盖住原导航栏*/
    /*回到顶部时变为原导航栏样式*/
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
        /*轮播移动和改变相应样式*/
        function moving(speed,terminal,isleft){
            var list = getId("pro_carouselist");
            var left_val = parseInt(list.style.left);
            var btn_idx;
            var button = document.getElementsByTagName("p");
            var product = document.getElementsByTagName("dl");

            if(left_val===terminal){
                left_val=isleft;
            }else{
                left_val += speed;
            }
            list.style.left=left_val+"px";
            btn_idx=Math.ceil(Math.abs(left_val/(-1261)));

            /*改变LOGO以及p标签中箭头的样式*/
            for(var k=0;k<button.length;k++){
                button[k].setAttribute("class","")
            }
            button[btn_idx].setAttribute("class","on");

            for(var c=0;c<product.length;c++){
                product[c].setAttribute("class","");
                product[c].getElementsByTagName("img")[0].setAttribute("style","");
            }
            product[btn_idx].setAttribute("class","logoturn");
            product[btn_idx].getElementsByTagName("img")[0].setAttribute("style","opacity:0");
        }


/*页面JS*/
window.onload=function(){

    document.onscroll=function(){
        navscroll();
    };

/*轮播内容切换*/
    var next=getId("pro_NextPic");
    var prev=getId("pro_PrevPic");
    /*给箭头绑定事件*/
    prev.addEventListener("click", function () {
        clearInterval(list.timer);
        moving(1260,0,-2520)
    });
    next.addEventListener("click", function () {
        clearInterval(list.timer);
        moving(-1260,-2520,0)
    });

/*轮播对应LOGO切换及改变样式*/
    var product = document.getElementsByTagName("dl");
    var button = document.getElementsByTagName("p");
    var list = getId("pro_carouselist");
    for (var i = 0; i < product.length; i++) {
        (function (n) {
            product[i].addEventListener("mouseover", function () {
                clearInterval(list.timer);
                /*鼠标悬浮LOGO时对应内容切换*/
                list.style.left = n * (-1260) + "px";
                /*轮播内容对应的箭头切换*/
                for (var j = 0; j < button.length; j++) {
                    button[j].setAttribute("class", "");
                }
                button[n].setAttribute("class", "on");
                /*轮播鼠标悬浮LOGO时改变LOGO样式*/
                for(var c=0;c<product.length;c++){
                    product[c].setAttribute("class","")
                }
                /*背景颜色改变*/
                product[n].setAttribute("class","logoturn");
                /*dt中图片透明度变为0*/
                product[n].getElementsByTagName("img")[0].setAttribute("style","opacity:0");
            });
                /*鼠标移出LOGO时的绑定事件*/
                product[i].addEventListener("mouseout", function () {
                    list.timer = setInterval(function () {
                        moving(-1260,-2520,0);
                    }, 3000);
                    for(var c=0;c<product.length;c++){
                        /*清除dt中图片的透明度*/
                        product[c].getElementsByTagName("img")[0].setAttribute("style","");
                    }
                })
         })(i)
    }

    /*定时器*/
    /*自动播放*/
    list.timer = setInterval(function () {
        moving(-1260,-2520,0);
    }, 3000);
    /*鼠标悬浮在list框时清除定时器*/
    list.onmouseover = function () {
        clearInterval(list.timer);
    };
    /*鼠标移走时开始定时器*/
    list.onmouseout = function () {
        clearInterval(list.timer);
        list.timer = setInterval(function () {
            moving(-1260,-2520,0);
        }, 3000);
    };

};













