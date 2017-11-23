var minSize = 5;
var maxSize = 50;
var newOn =100;
var flake = $("<div></div>")
.css({ "position": "absolute", "top": "-100px"})
.html("<img src='image/timg1.jpg'>");
$(function () {
    

    var documentHeight = $(document).height();
    var documentWidth = $(document).width();
    setInterval(function () {
        var startPositionLeft = Math.random() * documentWidth*0.9;
        var sizeFlake = minSize + Math.random() * maxSize;
        var endPositionLeft = Math.random() * documentWidth;
        var durationFall = documentHeight *7 + Math.random() * 5000;
        var startOpacity = 0.7 + 0.3 * Math.random();
        var endOpacity = 0.9 * Math.random();
        flake.clone().appendTo($("body")).css({
            "left": startPositionLeft,
            "opacity": startOpacity,
            "font-size": sizeFlake,
            "color": "#fff"
        }).animate({
            "top": documentHeight - 40,
            "left": endPositionLeft,
            "opacity": endOpacity
        }, durationFall, function () {
            $(this).remove();
        });
    }, newOn);
});