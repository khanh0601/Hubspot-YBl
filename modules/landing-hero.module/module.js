class LandingHero extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-hero' },
            tweenArr: [
                new FadeIn({ el: '.ld-hero-title' }),
                new FadeIn({ el: '.ld-hero-sub' }),
                new ScaleInset({ el: $('.ld-hero-img').get(0) }),
            ]
        })
    }
}
let landingHero = new LandingHero('.ld-hero');
landingHero.trigger();