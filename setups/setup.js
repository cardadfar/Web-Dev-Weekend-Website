
var lastScrollTop = 0;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var height = $(window).height();
    var width = $(window).width();
    var element = $(window).scrollTop();

    document.getElementById("label7").style.left = '50%';
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

        } else {

            document.getElementById("label1").style.left = '100%';
            document.getElementById("label2").style.left = '100%';
            document.getElementById("label3").style.left = '100%';
            document.getElementById("label4").style.left = '100%';
            document.getElementById("label5").style.left = '-65px';
            document.getElementById("label6").style.left = '-65px';
            document.getElementById("label7").style.left = '-65px';

        }
        $('#label1').css('top', '85%');
        $('#label2').css('top', '65%');
        $('#label3').css('top', '45%');
        $('#label4').css('top', '25%');
        $('#label5').css('top', '65%');
        $('#label6').css('top', '45%');
        $('#label7').css('top', '25%');
    }
    else {
        $(".black-bar").css('opacity', '0.5');
        if (lastScrollTop < element) {
            var p = $(".black-bar").position();
            $(".black-bar").css('position', 'absolute');
            $(".black-bar").css('top', p.top);
            $('#label2').css('top', '-7%');
            $('#label3').css('top', '-7%');
            $('#label4').css('top', '-7%');
            $('#label5').css('top', '-7%');
            $('#label6').css('top', '-7%');
            $('#label7').css('top', '-7%');
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
        $('#label1').css('left', '110%');
        $('#label2').css('left', '84%');
        $('#label3').css('left', '69%');
        $('#label4').css('left', '54%');
        $('#label5').css('left', '38%');
        $('#label6').css('left', '22.5%');
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