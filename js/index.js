/**
 * Created by Administrator on 2017/8/18.
 */
window.onload=function() {
    //轮播部分
    var timer = null;
    var timer1 = null;
    var container = document.getElementById("index_example_change");
    var index_example_prev = document.getElementById("index_example_prev");
    var index_example_next = document.getElementById("index_example_next");
    var index_example_list = document.getElementById("index_example_pic");
    var index_example_button = document.getElementById("index_example_buttons").getElementsByTagName("span");
    //绑定事件
    index_example_prev.addEventListener("click", function () {
        moving(1200, 0, "-2400px");
    });
    index_example_next.addEventListener("click", function () {
        moving(-1200, -2400, "0px");
    });
    for (var i = 0; i < index_example_button.length; i++) {
        (function (n) {
            index_example_button[n].onclick = function (n) {
                circle(this, n);
            }
        })(i);
    }
    //编写函数
    function moving(speed, terminal, flag) {
        var index_left_value = parseInt(index_example_list.style.left);
        if (index_left_value === terminal) {
            index_example_list.style.left = flag;
            index_left_value = parseInt(index_example_list.style.left);
        } else {
            index_left_value += speed;
            index_example_list.style.left = index_left_value + "px";
        }
        for (var i = 0; i < index_example_button.length; i++) {
            index_example_button[i].setAttribute("class", "");
        }
        index_example_button[index_left_value / -1200].setAttribute("class", "on");
    }

    //控制下方的圆圈切换
    function circle(that, n) {
        for (var i = 0; i < index_example_button.length; i++) {
            index_example_button[i].setAttribute("class", "");
        }
        that.setAttribute("class", "on");
        index_example_list.style.left = n * (-1200) + "px";
    }

//定时器
    timer = setInterval(function () {
        moving(-1200, -2400, "0px");
    }, 1700);

    container.onmouseover = function () {
        clearInterval(timer);
        clearInterval(timer1);

    };
    container.onmouseout = function () {
        clearInterval(timer);
        clearInterval(timer1);
        timer1 = setInterval(function () {
            moving(-1200, -2400, "0px");
        }, 1700);
    }
//        风控无人机部分切换
        var index_function_focus = document.getElementsByClassName("index_icon");
        var index_function_detail = document.getElementsByClassName("index_bd");
        for (var k = 0; k < index_function_focus.length; k++) {
            index_function_focus[k].index = k;
            index_function_focus[k].onmouseover = function () {
                for (var j = 0; j < index_function_detail.length; j++) {
                    index_function_detail[j].style.display = "none";
                    index_function_focus[j].style = "black";
                }
                this.style.color = "#1c9cd1";
                index_function_detail[this.index].style.display = "block";
            }
        }


        //人物切换
        var index_focus_obj = document.getElementsByClassName("index_person_dec");
        var index_details_obj = document.getElementsByClassName("index_person_detail");
        for (var m = 0; m < index_focus_obj.length; m++) {
            index_focus_obj[m].index = m;
            index_focus_obj[m].onmouseover = function () {
                for (var j = 0; j < index_details_obj.length; j++) {
                    index_details_obj[j].style.display = "none";
                    index_focus_obj[j].style = "black";
                }
                this.style.color = "#2597ba";
                index_details_obj[this.index].style.display = "block";
            }
        }

        //最新动态切换
        var index_news_focus = document.getElementsByClassName("index_latest_dec");
        var index_news_detail = document.getElementsByClassName("index_latest_detail");
        for (var k = 0; k < index_news_focus.length; k++) {
            index_news_focus[k].index = k;
            index_news_focus[k].onmouseover = function () {
                for (var j = 0; j < index_news_detail.length; j++) {
                    index_news_detail[j].style.display = "none";
                    index_news_focus[j].style = "black";
                }
                this.style.color = "#1c9cd1";
                index_news_detail[this.index].style.display = "block";
            }
        }
}

