class LandingCta extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-cta-title-wrap' },
            tweenArr: [
                new FadeIn({ el: $('.ld-cta-title') }),
                new FadeIn({ el: $('.ld-cta-desc') }),
                ...Array.from($('.ld-cta-btn .btn')).flatMap((item, idx) => {
                    return [
                        new FadeIn({el: item})
                    ]
                }),
            ]
        })
    }
}
let landingCta = new LandingCta('.ld-cta');
landingCta.trigger();