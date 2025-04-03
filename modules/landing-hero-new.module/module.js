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
       $('.popup-video-close').on('click', () =>{
        $('.popup-video').removeClass('active');
        this.pausedvideo();
       })
       $('.ld-hero-btn').on('click', () =>{
        $('.popup-video').addClass('active');
        this.playVideo();
       })
       $(document).on('click', (e) =>{
           if($('.popup-video').hasClass('active') && !$('.popup-video').has(e.target).length){
            if($(e.target).closest('.popup-video-inner').length == 0 && $(e.target).closest('.ld-hero-btn').length == 0){
                $('.popup-video').removeClass('active');
                this.pausedvideo();
               }
           }
       })
       new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-hero' },
            tweenArr: [
                new FadeIn({ el: '.ld-hero-title'}),
                new FadeIn({ el: '.ld-hero-sub', delay: "<=.2"}),
                new FadeIn({ el: '.ld-hero-btn', delay: "<=.2"}),
                new FadeIn({ el: '.ld-hero-ic', delay: "<=.2"}),
                new FadeIn({ el: '.ld-hero-img'}),
                new FadeIn({ el: '.ld-hero-form'}),
            ]
        }) 
    }
    playVideo() {
        $('.popup-video-main video')[0].play();
    }
    pausedvideo() {
        $('.popup-video-main video')[0].pause();
    }
    
}
let landingHero = new LandingHero('.ld-hero');
landingHero.trigger();