
var lastScrollTop = 0;

$(document).ready(resetLogo());

function resetLogo() {
    var width = $(window).width();
    var wth = $('#label3').width();
    if(width > 700) {
        $('#label6').css('left', width/2 - 0.085*width);
        $('.logo').css('width', '16.5vw');
    }
    else {
        $('#label6').css('left', width/2 - 0.1*width);
        $('.logo').css('width', '22vw');
    }
    $('#label6').css('top', '25%');
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var height = $(window).height();
    var width = $(window).width();
    var element = $(window).scrollTop();
    if($(window).width() > 700) {
        $(".black-bar").css('opacity', '0');
        if (element > 20) {

            document.getElementById("label1").style.left = 'calc(98% - 45px)';
            document.getElementById("label2").style.left = 'calc(98% - 65px)';
            document.getElementById("label3").style.left = 'calc(98% - 65px)';
            document.getElementById("label4").style.left = 'calc(98% - 65px)';
            document.getElementById("label5").style.left = '2%';
            document.getElementById("label6").style.left = '2%';
            document.getElementById("label7").style.left = '2%';
            $('.logo').css('height', '0%');
            $('.logo').css('width', '100%');
            $('#label6').css('top', '45%');

        } else {

            document.getElementById("label1").style.left = '100%';
            document.getElementById("label2").style.left = '100%';
            document.getElementById("label3").style.left = '100%';
            document.getElementById("label4").style.left = '100%';
            document.getElementById("label5").style.left = '-65px';
            document.getElementById("label7").style.left = '-65px';
            resetLogo();

        }
        $('#label1').css('top', '85%');
        $('#label2').css('top', '65%');
        $('#label3').css('top', '45%');
        $('#label4').css('top', '25%');
        $('#label5').css('top', '65%');
        $('#label7').css('top', '25%');
    }
    else {
        $(".black-bar").css('opacity', '0.5');

        if (element < 20) 
            resetLogo();
        else {
            $('.logo').css('width', '100%');
            $('#label6').css('left', '22%');
            if (lastScrollTop < element) {
                var p = $(".black-bar").position();
                $(".black-bar").css('position', 'absolute');
                $(".black-bar").css('top', p.top);
                $('#label2').css('top', '-85px');
                $('#label3').css('top', '-85px');
                $('#label4').css('top', '-85px');
                $('#label5').css('top', '-85px');
                $('#label6').css('top', '-85px');
                $('#label7').css('top', '-85px');
                lastScrollTop = element;
            }
            else {
                $(".black-bar").css('position', 'fixed');
                var dif = lastScrollTop-element;
                var hgt = 0;
                if(dif > hgt) {
                    dif = hgt;
                    lastScrollTop = element;
                }
                $(".black-bar").css('top', dif);
                $('#label2').css('top', dif+15);
                $('#label3').css('top', dif+15);
                $('#label4').css('top', dif+15);
                $('#label5').css('top', dif+15);
                $('#label6').css('top', dif+15);
                $('#label7').css('top', dif+15);

            }
        }
        $('#label1').css('left', '110%');
        $('#label2').css('left', '84%');
        $('#label3').css('left', '69%');
        $('#label4').css('left', '54%');
        $('#label5').css('left', '38%');
        $('#label7').css('left', '7%');
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

$("#label2").click(function() {
    window.location.href = "p5js.html";
});

$("#label3").click(function() {
    window.location.href = "react.html";
});

$("#label4").click(function() {
    window.location.href = "design.html";
});

$("#label5").click(function() {
    window.location.href = "javascript.html";
});

$("#label6").click(function() {
    window.location.href = "html.html";
});

$("#label7").click(function() {
    window.location.href = "basics.html";
});