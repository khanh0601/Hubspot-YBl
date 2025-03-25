class LandingReason extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        if(viewport.w < 992){
            $('.ld-reason-list').addClass('swiper');
                $('.ld-reason-list-inner').addClass('swiper-wrapper');
                $('.ld-reason-item').addClass('swiper-slide');
                let swiper = new Swiper('.ld-reason-list', {
                    slidesPerView: 1,
                    spaceBetween: parseRem(20),
                    breakpoints: {
                        "768": {
                            slidesPerView: "auto",
                            spaceBetween: parseRem(24)
                        }
                    },
                    pagination: {
                        el: '.ld-reason-pagi',
                        bulletClass: 'ld-reason-pagi-item',
                        bulletActiveClass: 'active',
                        clickable: true,
                    }
                });
        }
    }
}
let landingReason = new LandingReason('.ld-reason');
landingReason.trigger();