class LandingWhy extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-why-title-wrap' },
            tweenArr: [
                new FadeIn({ el: $('.ld-why-title') }),
                new ScaleInset({el: $('.ld-why-img').get(0)})
            ]
        })
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-why-content' },
            tweenArr: [
                ...Array.from($('.ld-why-content-item')).flatMap((item, idx) => {
                    return [
                        new FadeIn({el: item})
                    ]
                }),
            ]
        })
    }
}
let landingWhy = new LandingWhy('.ld-why');
landingWhy.trigger();