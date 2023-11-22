const aboutMeSection = document.querySelector('#about');
const tl = gsap.timeline();
tl.set(aboutMeSection, { autoAlpha: 0 });
tl.to(aboutMeSection, { autoAlpha: 1, duration: 1, ease: "power2.out" });
tl.play();

$(document).ready(function() {
    var content = $(".content");
    var image = $(".image");

    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();

        if (content.position().top < windowBottom) {
            content.addClass("animate");
        }
        if (image.position().top < windowBottom) {
            image.addClass("animate");
        }
    });
});

$(document).ready(function() {
    var resumeItems = $(".resume-item");

    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();

        resumeItems.each(function() {
            if ($(this).position().top < windowBottom) {
                $(this).addClass("animate");
            }
        });
    });
});

const resumeItems = document.querySelectorAll('.resume-item');
resumeItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});
