class LandingFeature extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        if(viewport.w < 992){
            $('.ld-feature-list').addClass('swiper');
                $('.ld-feature-list-inner').addClass('swiper-wrapper');
                $('.ld-feature-item').addClass('swiper-slide');
                let swiper = new Swiper('.ld-feature-list', {
                    slidesPerView: 1,
                    spaceBetween: parseRem(24),
                    breakpoints: {
                        "768": {
                            slidesPerView: "auto",
                            spaceBetween: parseRem(40)
                        }
                    },
                    pagination: {
                        el: '.ld-feature-pagi',
                        bulletClass: 'ld-feature-pagi-item',
                        bulletActiveClass: 'active',
                        clickable: true,
                    }
                });
        }
        // new MasterTimeline({
        //     triggerInit: this.triggerEl,
        //     scrollTrigger: { trigger: '.ld-feature' },
        //     tweenArr: [
        //         new FadeIn({ el: '.ld-feature-label' }),
        //         new FadeIn({ el: '.ld-feature-title' }),
        //         new FadeIn({ el: '.ld-feature-sub' })
        //     ]
        // })
    }
}
let landingFeature = new LandingFeature('.ld-feature');
landingFeature.trigger();