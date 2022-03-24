$(function () {

    // Show Or Hide Menue
    $(".fa-bars").click(function () {

        if ($("nav ul").hasClass("show")) {

            $(this).css("color", "#fff")
        } else {
            $(this).css("color", "#19c8fa")
        }

        $("nav ul").toggleClass("show")
    })

    // check shuffle-lis
    $(".portfolio .shuffle li").each(function () {

        $(this).click(function () {

            $(this).addClass("active").siblings().removeClass("active")
        })

    })

    $(window).scroll(function () {

        // Show The Arrow-up If Window scrollY Is >= 700
        if (this.scrollY >= 700) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }

        //Do My Progress
        if (this.scrollY >= $(".skills").offset().top - 50) {

            $(".prog span").each(function () {

                $(this).css("width", $(this).data("width"))

                $(".prog > p").fadeIn("slow")
            });


        } else {

            $(".prog span").each(function () {

                $(this).css("width", 0)

                $(".prog > p").fadeOut()
            })
        }

    })

    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })


    // landing silder
    function checkClients() {

        if ($('.landing .text:first').hasClass('selected')) {

            $(".fa-angle-left").fadeOut();

        } else {

            $(".fa-angle-left").fadeIn();
        }

        if ($('.landing .text:last').hasClass('selected')) {

            $(".fa-angle-right").fadeOut();

        } else {

            $(".fa-angle-right").fadeIn();
        }

    }

    checkClients();


    $('.landing i').click(function () {

        if ($(this).hasClass('fa-angle-right')) {

            $('.landing .selected').fadeOut(1, function () {

                $(this).removeClass('selected').next('.landing .text').addClass('selected').fadeIn("slow");

                checkClients();

            });

        } else {

            $('.landing .selected').fadeOut(1, function () {

                $(this).removeClass('selected').prev('.landing .text').addClass('selected').fadeIn("slow");

                checkClients();

            });

        }

    });

    // Smoothly Scroll To Elment
    $("nav ul li a").click(function (e) {

        e.preventDefault();

        $("nav ul").toggleClass("show");

        document.querySelector($(this).data("section")).scrollIntoView({

            behavior: "smooth"

        })

    })

    // Click To See What Our Clients Say About Us
    $(".bullets li:first-of-type").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".testimonials .hold1").fadeIn("slow").addClass("slected").siblings().fadeOut("slow").removeClass("slected")
    })


    $(".bullets li:nth-of-type(2)").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".testimonials .hold2").fadeIn("slow").addClass("slected").siblings().fadeOut("slow").removeClass("slected")
    })

    $(".bullets li:last-of-type").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".testimonials .hold3").fadeIn("slow").addClass("slected").siblings().fadeOut("slow").removeClass("slected")
    })

    // Our Auto Slider Code
    $(function autoSlider() {

        $('.quote .active').each(function () {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);

                    autoSlider();

                });

            } else {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active');

                    $('.quote div').eq(0).addClass('active').fadeIn(1000);

                    autoSlider();

                });

            }

        });

    }());
})

let section = document.querySelector(".stats")
let numbers = document.querySelectorAll(".box .number")
let strted = false

window.onscroll = function () {
    if (this.scrollY >= section.offsetTop) {

        if (!strted) {

            numbers.forEach((num) => startCounter(num))
        }

        strted = true
    }
}

function startCounter(el) {

    let goal = el.dataset.gol

    let counter = setInterval(() => {

        el.textContent++

        if (el.textContent == goal) {

            clearInterval(counter)
        }

    }, 100 / goal)

}
