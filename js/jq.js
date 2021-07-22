$(document).ready(function () {

    $("header div.hr").each(function () {
        $(this).width($("header h2").width());
    });
    $(window).resize(function () {
        $("header div.hr").width($("header h2").width());
    });
    console.log($("header h2").width());


    /* coding header */
    $(".jo-toggle i").click(function () {
        $(this).parent(".jo-toggle").siblings('nav').toggleClass("act");
        if ($(this).parent(".jo-toggle").siblings('nav').hasClass("act")) {
            $(this).parent(".jo-toggle").siblings('nav').animate({
                left: "0px"
            }, 1000);
        } else {
            $(this).parent(".jo-toggle").siblings('nav').animate({
                left: "-1000px"
            }, 1000);
        }
    });

    /* active class */

    $("nav ul li a").click(function (e) {
        let x5 = $(this).attr("href");
        e.preventDefault();
        $(this).addClass("active");
        $(this).parent("li").siblings("li").find("a").removeClass("active");
        $("body, html").animate({
            scrollTop: $(x5).offset().top
        }, 1000);
    });
    /*scroll to top */

    $("div.scrolltotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 800) {
            $("div.scrolltotop").fadeIn();
        } else {
            $("div.scrolltotop").fadeOut();
        }
    });

    /* sync links */
    /* coding loading screen */

    $(".cons.xxx").each(function () {
        //   $("body").css("overflow", "hidden");
        $(this).find("div").fadeOut(5000, function () {
            $(this).parent(".cons").fadeOut(2000);
            $("body").css("overflow", "visible");
        });
    });

    /* coding loading screen */
});