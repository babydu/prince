//返回顶部
// 当网页向下滑动 20px 出现"返回顶部" 按钮
//功能调整，下滑后再显示返回顶部按钮失效。
//window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goTop").style.display = "block";
    } else {
        document.getElementById("goTop").style.display = "none";
        
    }
}
function topFunction(id) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
	displayButtonMenu(id);
}//返回顶部

//显示章节目录
function contentDisplay(id){
	document.getElementById(id).style.display = "block";
}
//获取当前页面URL
window.onload=function theUrl(){
	var theurl = window.location.href;
	document.getElementById("thePageUrl").href = theurl;
	console.log("换url");
}
//显示隐藏
function displayButtonMenu(id){
                var sub_menu = document.getElementById(id);
                var dis_v = sub_menu.style.display;
                
                if(dis_v == "block")
                    sub_menu.style.display = "none";
                else
                    sub_menu.style.display = "block";
                    
            }

