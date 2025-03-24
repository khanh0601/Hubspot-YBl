class LandingIntro extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        $('.ld-intro-item').each((idx, el) => {
            new MasterTimeline({
                triggerInit: this.triggerEl,
                scrollTrigger: { trigger: el },
                tweenArr: [
                    new ScaleInset({ el: $(el).find('.ld-intro-item-img').get(0) }),
                    new FadeIn({ el: $(el).find('.ld-intro-item-title') }),
                    new FadeIn({ el: $(el).find('.ld-intro-item-desc') }),
                ]
            })
        })
    }
}
let landingIntro = new LandingIntro('.ld-intro');
landingIntro.trigger();