class LandingHero extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
       $('.ld-hero-form').on('click','.submitted-message p:last-child', function(){
        location.reload();
       })
       new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-hero' },
            tweenArr: [
                new FadeIn({ el: '.ld-hero-title'}),
                new FadeIn({ el: '.ld-hero-sub', delay: "<=.2"}),
                new FadeIn({ el: '.ld-hero-ic', delay: "<=.2"}),
                new FadeIn({ el: '.ld-hero-img'}),
                new FadeIn({ el: '.ld-hero-form'}),
            ]
        }) 
    }
}
let landingHero = new LandingHero('.ld-hero');
landingHero.trigger();