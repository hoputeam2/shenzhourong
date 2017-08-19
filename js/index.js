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
    var tittop=tit.offsetTop;
    var navimg=tit.getElementsByTagName("img")[0];
    var btop = document.body.scrollTop||document.documentElement.scrollTop;
    if(btop>tittop){
        tit.setAttribute("style","background-color:white;color:black;border:1px solid black;");
        navimg.setAttribute("src","../img/first_images/iphone_logo02.png");
    }
    else{
        tit.setAttribute("style","");
        navimg.setAttribute("src","../img/first_images/145x45baise.png");
    }
}