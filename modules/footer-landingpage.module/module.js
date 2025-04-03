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
            scrollTrigger: { trigger: '.footer-logo-wrap' },
            tweenArr: [
                new FadeIn({ el: $('.footer-logo') }),
                new FadeIn({ el: $('.footer-info') }),
                new FadeIn({ el: $('.footer-desc') }),
                new FadeIn({ el: $('.footer-bot') }),
            ]
        })
    }
}
let footer = new Footer('.footer');
footer.trigger();