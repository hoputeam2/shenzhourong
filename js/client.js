/**
 * Created by Administrator on 2017/8/21.
//*/
window.onload=function(){
    document.onscroll=function(){
        var tit = document.getElementsByTagName("nav")[0];
        var tittop=tit.offsetTop;
        var navimg=tit.getElementsByTagName("img")[0];
        var a = tit.getElementsByTagName("a");
        var btop = document.body.scrollTop||document.documentElement.scrollTop;
        if(btop>tittop){
            tit.setAttribute("style","background-color:white;color:black;border:1px solid white;");
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
            navimg.setAttribute("src","../img/first_images/baise.png");
        }


//    回到顶部
        var obj=document.getElementById("up");
//       获取body的高度
        var height=document.documentElement.clientHeight;
//        滚动条滚动事件
        window.onscroll=function(){

            var top=document.documentElement.scrollTop||document.body.scrollTop;//scrollTop为滚动条滑动的距离
            if (top>=height) {
                obj.style.display='block'
            }
            else{
                obj.style.display='none'
            }
        };

//        底部图片
//      获取滚动条
        var scrollTop=document.body.scrollTop;
//       获取id
        var img=document.getElementById('client_apply');

        console.log(scrollTop);
//        事件绑定

//        img.addEventListener("",function(){
////                scrollone();
//        })

        if(scrollTop>1451){
            img.style.transition="all 1s";
            img.style.transform="translate(0,10px)";

        }
        else if(scrollTop<1451){
            img.style.transition="all 1s";
            img.style.transform="translate(0,-10px)";

        }
        else{
            img.style.transition="";
            img.style.transform="";
        }

    }
};