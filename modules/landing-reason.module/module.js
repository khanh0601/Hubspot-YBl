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
                            slidesPerView: 2,
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
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-reason' },
            tweenArr: [
                new FadeIn({ el: '.ld-reason-label'}),
                new FadeIn({ el: '.ld-reason-title'}),
            ]
        }) 
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-reason-list' },
            tweenArr: [
                ...Array.from($('.ld-reason-item')).flatMap((item, idx) =>{
                    return [
                        new FadeIn({el : $(item).find('.ld-reason-item-title')}),
                        new FadeIn({el : $(item).find('.ld-reason-item-sub')}),
                        new ScaleInset({ el : $(item).find('.ld-reason-item-img-inner').get(0)})
                    ]
                })
            ]
        }) 
    }
}
let landingReason = new LandingReason('.ld-reason');
landingReason.trigger();