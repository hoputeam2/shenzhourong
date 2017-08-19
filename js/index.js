/**
 * Created by Administrator on 2017/8/18.
 */
function getId(id) {
    return document.getElementById(id)?document.getElementById(id):null;
}

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