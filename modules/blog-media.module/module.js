


class BlogListingMain extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        let visibleItems = 6;
        const itemsToShow = 3;
        $('.blog-media-article').length < visibleItems && $('.blog-media-loadmore').hide()
        $('.blog-media-article').slice(visibleItems).slideUp();
        $('.blog-media-loadmore-inner').click(function() {
            visibleItems += itemsToShow;
            $('.blog-media-article').slice(0, visibleItems).slideDown();
            if ($('.blog-media-article').length <= visibleItems) {
                $('.blog-media-loadmore').addClass('hide');
            }
        });
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.blog-media' },
            tweenArr: [
                new FadeIn({ el: $('.blog-media-article-title') }),
                ...Array.from($('.blog-media-article')).map((item, idx) => {
                        return idx < visibleItems && new FadeIn({ el: $(item), delay: '<=.2', duration:.6 });
                }),
                new FadeIn({ el: $('.blog-media-loadmore-inner') })
            ]
        })
        
    }
}
let blogListingMain = new BlogListingMain('.blog-media');
blogListingMain.trigger();