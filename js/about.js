/**
 * Created by lenovo on 2017/8/20.
 */
window.onscroll=function(){
    var tit = document.getElementsByTagName("nav")[0];
    var navimg=tit.getElementsByTagName("img")[0];
    var tit2=document.getElementById("about-containerNav");
    var btop = document.body.scrollTop||document.documentElement.scrollTop;

    if(btop>0&&btop<360){

        tit.setAttribute("style","background-color:white;color:black;");
        navimg.setAttribute("src","../img/first_images/iphone_logo02.png");
        tit2.setAttribute("style","");

    }
    else if(btop>360){
        tit2.setAttribute("style","background-color:white;color:black;position:fixed;top:0");
    }
    else{
        tit.setAttribute("style","");
        tit2.setAttribute("style","");
        navimg.setAttribute("src","../img/first_images/145x45baise.png");
    }
    if(btop>1080){

    }

};

/*回到顶部*/
//window.onscroll=function() {
////       获取body的高度
//    var clientHeight = document.documentElement.clientHeight;
////       滚动条滚动事件
//    var height = document.documentElement.scrollTop || document.body.scrollTop;
////       console.log(height);
//    var obj = document.getElementById("up");
//
//    if (height >= clientHeight) {
//        obj.style.display = 'block';
//    }
//    else {
//        obj.style.display = 'none'
//    }
//};