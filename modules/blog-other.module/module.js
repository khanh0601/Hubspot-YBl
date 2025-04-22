


class BlogOther extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        if(viewport.w < 992){
            $('.blog-other-article-list').addClass('swiper');
            $('.blog-other-article-inner').addClass('swiper-wrapper');
            $('.blog-other-article').addClass('swiper-slide');
            let swiper = new Swiper(".blog-other-article-list", {
                slidesPerView: 1,
                spaceBetween: parseRem(24),
                breakpoints: {
                    "768": {
                        slidesPerView: 2,
                        spaceBetween: parseRem(24)
                    },
                },
                pagination: {
                    el: '.blog-other-pagi',
                    bulletClass: 'blog-other-pagi-item',
                    bulletActiveClass: 'active',
                    clickable: true,
                }
            })
        
        }
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.blog-other-article-list' },
            tweenArr: [
                new FadeIn({ el: $('.blog-other-article-title') }),
                ...Array.from($('.blog-other-article')).map((item) => {
                    return new FadeIn({ el: $(item), delay: '<=.1', duration: .6 });
                }),
            ]
        })
        
    }
}
let blogOther = new BlogOther('.blog-other');
blogOther.trigger();