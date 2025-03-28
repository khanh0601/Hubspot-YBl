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
                            spaceBetween: parseRem(24)
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
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-feature' },
            tweenArr: [
                new FadeIn({ el: '.ld-feature-label'}),
                new FadeIn({ el: '.ld-feature-title'}),
                new FadeIn({ el: '.ld-feature-sub'}),
            ]
        }) 
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-feature-list' },
            tweenArr: [
                ...Array.from($('.ld-feature-item')).flatMap((item, idx) =>{
                    return [
                        new ScaleInset({ el : $(item).find('.ld-feature-item-img').get(0)}),
                        new FadeIn({el : $(item).find('.ld-feature-item-title'), delay: "<= .3"}),
                        new FadeIn({el : $(item).find('.ld-feature-item-sub')}),
                    ]
                })
            ]
        }) 
    }
}
let landingFeature = new LandingFeature('.ld-feature');
landingFeature.trigger();