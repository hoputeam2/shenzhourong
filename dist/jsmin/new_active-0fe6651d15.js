window.onload=function(){document.onscroll=function(){var t=document.getElementsByTagName("nav")[0],e=t.offsetTop,o=t.getElementsByTagName("img")[0],n=t.getElementsByTagName("a");if((document.body.scrollTop||document.documentElement.scrollTop)>e){t.setAttribute("style","background-color:white;");for(var l=0;l<n.length;l++)n[l].setAttribute("style","color:black");o.setAttribute("src","../img/first_images/iphone_logo02.png")}else{t.setAttribute("style","");for(var s=0;s<n.length;s++)n[s].setAttribute("style","");o.setAttribute("src","../img/first_images/145x45baise.png")}};var t=document.getElementById("up"),e=document.documentElement.clientHeight;window.onscroll=function(){var o=document.documentElement.scrollTop||document.body.scrollTop;t.style.display=o>=e?"block":"none"};var o=document.body.scrollTop,n=document.getElementById("client_apply");console.log(o),o>1451?(n.style.transition="all 1s",n.style.transform="translate(0,10px)"):o<1451?(n.style.transition="all 1s",n.style.transform="translate(0,-10px)"):(n.style.transition="",n.style.transform="")};