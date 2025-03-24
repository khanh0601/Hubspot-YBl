$('.header-toggle').on('click', function() {
    $('.header').toggleClass('active');
})
$(document).on('click', function(e) {
    if (!$(e.target).closest('.header').length) {
        $('.header').removeClass('active');
    }
})