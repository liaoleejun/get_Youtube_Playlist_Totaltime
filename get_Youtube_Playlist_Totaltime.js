/*
* 计算YouTube的一个播放列表的总播放时间：
* https://www.youtube.com/playlist?list=PL27BCE863B6A864E3
*
* 运行脚本：Chrome浏览器，按F12，在控制台Console下运行
* 根据需要，可以调整start, end这两个值
*/

var time = [];
var start = 0; // 从第14集开始计算
HtmlOfTimestamp = document.getElementsByClassName("timestamp");

var end = HtmlOfTimestamp.length;
// var end = 2;

for (var i = start; i < end; i++) {
	time[i] = HtmlOfTimestamp[i].innerText.split(":");
}

var sec = 0;

for (var i = start; i < end; i++) {
	sec += parseInt(time[i][time[i].length - 1]);
	if ((time[i].length - 2)>=0) {
		sec += parseInt(time[i][time[i].length - 2]) * 60;
	}
	if ((time[i].length - 3)>=0) {
		sec += parseInt(time[i][time[i].length - 3]) * 3600;
	}
}

hour = Math.floor(sec / 3600);
sec %= 3600;

min = Math.floor(sec / 60);
sec %= 60;

console.log(hour + ":" + min + ":" + sec);