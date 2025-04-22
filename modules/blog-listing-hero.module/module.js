
class BlogListingHero extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        if(viewport.w < 768){
            $('.blog-listing-hero-article-wrap').addClass('swiper');
            $('.blog-listing-hero-article-inner').addClass('swiper-wrapper');
            $('.blog-listing-hero-article').addClass('swiper-slide');
            let swiper = new Swiper(".blog-listing-hero-article-wrap", {
                slidesPerView: 1,
                spaceBetween: parseRem(24),
                pagination: {
                    el: '.blog-listing-pagi',
                    bulletClass: 'blog-listing-pagi-item',
                    bulletActiveClass: 'active',
                    clickable: true,
                }
            })
        
        }
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.blog-listing-hero' },
            tweenArr: [
                new FadeIn({ el: $('.blog-listing-hero-title') }),
                new FadeIn({ el: $('.blog-listing-hero-sub') }),
                new FadeIn({ el: $('.blog-listing-hero-article-title') }),
            ]
        })
       if(viewport.w > 768){
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.blog-listing-hero' },
            tweenArr: [
                new FadeIn({ el: $('.blog-listing-hero-article:first-child .news-card-thumbnail') }),
                new FadeIn({ el: $('.blog-listing-hero-article:first-child .news-card-info') }),
            ]
        })
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.blog-listing-hero' },
            tweenArr: [
                ...Array.from($('.blog-listing-hero-article:not(:first-child)')).map((el, i) => {
                    return new FadeIn({ el: $(el), delay: i * 0.1 })
               })
            ]
        })
       }
    }
}
let blogListingHero = new BlogListingHero('.blog-listing-hero');
blogListingHero.trigger();