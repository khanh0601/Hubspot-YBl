$('.header-toggle').on('click', function() {
    $('.header').toggleClass('active');
})
$(document).on('click', function(e) {
    if (!$(e.target).closest('.header').length) {
        $('.header').removeClass('active');
    }
})
function isInHeaderCheck(el) {
    const rect = $(el).get(0).getBoundingClientRect();
    const headerRect = $('.header').get(0).getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.top - headerRect.height / 2 <=0
    );
}
const HEADER = {
    toggleHide: (inst) => {
        if($('.header').hasClass('active')) return;
        if (inst.scroll > $('.header').height() * (viewport.w > 767 ? 4 : 1.5)) {
            if (inst.direction >= 1) {
                $('.header').addClass('on-hide');
                $('.term-content-menu').addClass('on-top');
            } else {
                $('.header').removeClass('on-hide');
                $('.term-content-menu').removeClass('on-top');
            }
        } else {
            $('.header').removeClass('on-hide');
            $('.term-content-menu').removeClass('on-top');
        }
    },
    toggleOnScroll: (inst) => {
        if (inst.scroll > $('.header').height() * (viewport.w > 767 ? 1 : .5)) {
            $('.header').addClass('on-scroll');
            $('.header').addClass('on-expand');
        } else {
            $('.header').removeClass('on-scroll');
            $('.header').removeClass('on-expand');
        }
    },
    toggleDarkMode: () => {
        let elArr = Array.from($('[data-section="dark"]'));
        if (elArr.some(function(el) {return isInHeaderCheck(el)})) {
            $('.header').addClass('on-dark');
        } else {
            $('.header').removeClass('on-dark');
        }
    },
}
HEADER.toggleOnScroll(lenis);
lenis.on('scroll', function (inst) {
    HEADER.toggleOnScroll(inst);
    HEADER.toggleHide(inst);
})