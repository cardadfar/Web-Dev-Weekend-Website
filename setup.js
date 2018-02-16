$("h").hover(function() {
    $(this).css("color", '#ff89c7');
    }, function() {
    $(this).css("color", '#e24c9b');
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var height = $(window).height();
    var bodyS = document.body.scrollTop;
    var elementS = document.documentElement.scrollTop;
    if($(window).width() > 600) {
        if (bodyS > 20 || elementS > 20) {

            document.getElementById("label1").style.left = 'calc(98% - 45px)';
            document.getElementById("label2").style.left = 'calc(98% - 65px)';
            document.getElementById("label3").style.left = 'calc(98% - 65px)';
            document.getElementById("label4").style.left = 'calc(98% - 65px)';
            document.getElementById("label5").style.left = '2%';
            document.getElementById("label6").style.left = '2%';
            document.getElementById("label7").style.left = '2%';

        } else {
            document.getElementById("label1").style.left = '100%';
            document.getElementById("label2").style.left = '100%';
            document.getElementById("label3").style.left = '100%';
            document.getElementById("label4").style.left = '100%';
            document.getElementById("label5").style.left = '-5.5%';
            document.getElementById("label6").style.left = '-5.5%';
            document.getElementById("label7").style.left = '-5.5%';
        }
    }
}

$(".label").hover(function() {
    $(this).css("opacity", '1');
    }, function() {
    $(this).css("opacity", '0.65');
});

$("#label1").click(function() {
    $('html, body').animate({scrollTop:0}, 750);
});

$("#line-obj-01").hover(function() {
    window.open('https://www.w3schools.com/html/html5_canvas.asp');
});