//返回顶部
// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goTop").style.display = "block";
    } else {
        document.getElementById("goTop").style.display = "none";
        
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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


