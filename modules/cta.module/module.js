class Footer extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.cta' },
            tweenArr: [
                new FadeIn({ el: $('.cta-inner') }),
                new FadeIn({ el: $('.cta-title') }),
                new FadeIn({ el: $('.cta-btn') })
            ]
        })
    }
}
let footer = new Footer('.cta');
footer.trigger();