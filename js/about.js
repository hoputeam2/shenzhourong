/**
 * Created by lenovo on 2017/8/20.
 */
document.onscroll=function(){
    var tit2=document.getElementsByIdName("about-containerNav")[0];
    //var tittop2=tit2.offsetTop;
    var btop2=document.body.scrollTop||document.documentElement.scrollTop;
    if(btop2>300){
        tit2.setAttribute("style","background-color:white;color:black;border:1px solid black;");
    }
    else{
        tit2.setAttribute("style","");
    }
}