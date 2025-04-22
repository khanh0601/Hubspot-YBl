class Footer extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        let currentLink = window.location.href;
        currentLink = currentLink.split('?')[0];
        $('.footer-menu-item').each((idx, item) => {
            let link = $(item).find('.footer-menu-item-txt').attr('href');
            if (link == currentLink) {
                $(item).find('.footer-menu-item-txt').addClass('active');
            }
        })
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.footer-inner' },
            tweenArr: [
                new FadeIn({ el: $('.footer-left') }),
                new FadeIn({ el: $('.footer-logo-inner') }),
                new FadeIn({ el: $('.footer-info-email') }),
                new FadeIn({ el: $('.footer-info-social') }),
            ]
        })
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.footer-left' },
            tweenArr: [
                new FadeIn({ el: $('.footer-main') }),
                ...Array.from($('.footer-menu-item')).map((item) => {
                    return new FadeIn({ el: $(item)});
                })
            ]
        })
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.footer-left' },
            tweenArr: [
                ...Array.from($('.footer-info-address')).map((item) => {
                    return new FadeIn({ el: $(item), delay: '<=.2', duration:.6 });
                }),
                new FadeIn({ el: $('.footer-info-line') }),
                new FadeIn({ el: $('.footer-desc') }),
                new FadeIn({ el: $('.footer-bot ') })
            ]
        })
    }
}
let footer = new Footer('.footer');
footer.trigger();