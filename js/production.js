/**
 * Created by Administrator on 2017/8/19.
 */
/*获取ID*/
function getId(id) {
    return document.getElementById(id)?document.getElementById(id):null;
}
/*绑定时间*/
function addEvent(obj,event,fn){
         if (obj.addEventListener) {
                 obj.addEventListener(event,fn,false);
            }else{
                 obj.attachEvent("on"+event,fn);
             }
     }

/*导航吸顶变换样式*/
function navscroll(){
  /*获取到导航栏*/
    var tit = document.getElementsByTagName("nav")[0];
  /*获取到导航栏中的图片*/
    var navimg=tit.getElementsByTagName("img")[0];
  /*滚轮滚动距离*/
    var btop = document.body.scrollTop||document.documentElement.scrollTop;
  /*获取到页面导航栏*/
    var pagenav = getId("pro_pagenav");
  /*获取到导航中的超链接*/
    var a = tit.getElementsByTagName("a");

    /*滚动条在0-360之间时导航栏吸顶*/
        if(btop>0&&btop<360){
        tit.setAttribute("style","background-color:white;");

        for(var i = 0;i< a.length;i++){
            a[i].setAttribute("style","color:black")
        }

        navimg.setAttribute("src","../img/first_images/iphone_logo02.png");
        pagenav.setAttribute("style","");
    }
    /*滚动条拉到360之后页面导航栏吸顶覆盖住原导航栏*/
    else if(btop>360){
        pagenav.setAttribute("style","position:fixed;top:0;z-index:999;background-color:white");
    }
    /*回到顶部时变为原导航栏样式*/
    else{
        tit.setAttribute("style","");
        navimg.setAttribute("src","../img/first_images/145x45baise.png");
        for(var i = 0;i< a.length;i++){
            a[i].setAttribute("style","")
        }
    }

}
        /*轮播移动和改变相应样式*/
        function moving(speed,terminal,isleft){
          /*获取到装轮播内容的DIV*/
            var list = getId("pro_carouselist");
          /*获取到DIV的left值*/
            var left_val = parseInt(list.style.left);
            var btn_idx;
          /*获取到轮播跟随的箭头*/
            var button = document.getElementsByTagName("p");
          /*获取到轮播内容对应的LOGO dl*/
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
              /*清空样式*/
                button[k].setAttribute("class","")
            }
            /*对应箭头类名切换*/
            button[btn_idx].setAttribute("class","on");

            for(var c=0;c<product.length;c++){
            /*清空产品LOGO样式*/
                product[c].setAttribute("class","");
            /*清空LOGO中图片的样式*/
                product[c].getElementsByTagName("img")[0].setAttribute("style","");
            }
            /*LOGO样式改变*/
            product[btn_idx].setAttribute("class","logoturn");
            /*LOGO图片样式改变*/
            product[btn_idx].getElementsByTagName("img")[0].setAttribute("style","opacity:0");
        }
//回到顶部
window.onscroll=function(){
//       获取body的高度
    var clientHeight=document.documentElement.clientHeight;
//       滚动条滚动事件
    var height=document.documentElement.scrollTop||document.body.scrollTop;
//       console.log(height);
    var obj=document.getElementById("up");

    if(height>=clientHeight){
        obj.style.display='block';
    }
    else{
        obj.style.display='none'
    }
};
//回到顶部end

/*页面JS*/
window.onload=function(){

    document.onscroll=function(){
        navscroll();
    };

/*轮播内容切换*/
    var next=getId("pro_NextPic");
    var prev=getId("pro_PrevPic");
    /*给箭头绑定事件*/
    addEvent(prev,"click",function () {
        clearInterval(list.timer);
        moving(1260,0,-2520)
    });

    addEvent(next,"click",function () {
        clearInterval(list.timer);
        moving(-1260,-2520,0)
    });

/*轮播对应LOGO切换及改变样式*/
    var product = document.getElementsByTagName("dl");
    var button = document.getElementsByTagName("p");
    var list = getId("pro_carouselist");
    for (var i = 0; i < product.length; i++) {
        (function (n) {
            addEvent(product[i],"mouseover",function () {
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
//

                /*鼠标移出LOGO时的绑定事件*/
                addEvent(product[i],"mouseout",function () {
                    list.timer = setInterval(function () {
                        moving(-1260,-2520,0);
                    }, 3000);
                    for(var c=0;c<product.length;c++){
                        /*清除dt中图片的透明度*/
                        product[c].getElementsByTagName("img")[0].setAttribute("style","");
                    }
                });
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
