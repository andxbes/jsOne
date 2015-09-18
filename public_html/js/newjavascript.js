


// ==UserScript==
// @name        redDivSearcher
// @namespace   andxbes
// @description Считаем количество красных дивов (плагины Tampermonkey(chromium) , или greasemonkey(firefox)). 
// @include     *
// @version     1
// @grant       none
//@require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js 
// ==/UserScript==



var run = function () {


    var script = document.createElement("script");
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js";
    window.document.body.appendChild(script);

};

run();




window.console.info("Start Searcher Red Block");
var redbs = new RedBlockSearcher();

redbs.addButton();

function RedBlockSearcher() {
    var obj = this;
    this.redBlocks = 0;



    this.addButton = function () {
        window.console.info("addAction");
        $(window.document.body).append(' <input id="myButton"\n\
                     type="button"\n\
                     style="size: 100px;\n\
                     background: black;\n\
                     color: cyan ;\n\
                     font-weight: bold;\n\
                     position: fixed;\n\
                     top:' + (window.innerHeight / 2) + 'px;\n\
                     left:' + (window.innerWidth / 2 - 100) + 'px;\n\
                     z-index=1000;\n\
                     line-height: 3em;\n\
                     border-radius:10px;\n\
                     margin:auto;"\n\
                     value="Найти красные цвета ">');


        $("#myButton").click(function () {
            obj.searchRedDiv();
        });

    };

    this.searchRedDiv = function () {
       
        this.redBlocks = 0;

        var $divs = $('div');

        for (var i = 0; i < $divs.length; i++) {

            window.console.info($($divs[i]).css('background-color'));

            if ($($divs[i]).css('background-color') == "rgb(255, 0, 0)" || $($divs[i]).css('background') == "rgb(255, 0, 0)") {
                obj.redBlocks++;
                window.console.info("нашли красный блок !!!");

            }
            obj.allBlocks++;
        }

        window.console.info("Всего блоков = " + $divs.length);
        window.console.info("Красных  блоков = " + this.redBlocks);
        alert("Всего " + this.redBlocks + " красных блоков");
    };










}