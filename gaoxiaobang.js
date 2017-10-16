// ==UserScript==
// @name         高校助手
// @namespace    http://www.pyblog.xyz:233/
// @version      1.0
// @description  try to take over the world!
// @author       zachMelody
// @match        https://shfc.class.gaoxiaobang.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //等待页面加载完毕后，监测标题，判断是否跳过
    window.setTimeout(function(){
        var b =  document.getElementsByClassName("chapter-title");
        var c = b[0].innerHTML;
        if(c.indexOf("讲")>-1){
            console.log("Success!");
        }else{
            var a = document.getElementsByClassName("chapter-next");
            a[0].click();
        }
        window.setInterval(function(){
            //查找是否有问题弹出
            //**单选部分**
            var radio =  document.getElementsByClassName("gxb-icon-radio");
            //选择并提交问题
            if( radio.length >= 1){
                radio[0].click();
                var bt1 = document.getElementsByClassName("gxb-btn_ submit");
                bt1[0].click();
            //**单选部分结束**
                //延迟5S继续视频
                window.setTimeout(function(){
                    var bt2 =  document.getElementsByClassName("gxb-btn_ player");
                    bt2[0].click();
                },5000);
            }
            //监测视频是否暂停
            var status =  document.getElementsByClassName("vjs-paused");
            if(status.length < 1){
                console.log("go on");
            }else{
                status[1].click();
            }
        },2000);
    },6000);


})();