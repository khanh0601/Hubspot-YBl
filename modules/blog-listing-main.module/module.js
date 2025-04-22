


class BlogListingMain extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        let visibleItems = 3;
        const itemsToShow = 3;
        $('.blog-listing-main-article').slice(visibleItems).slideUp();

        $('.blog-listing-main-loadmore-inner').click(function() {
            visibleItems += itemsToShow;
            $('.blog-listing-main-article').slice(0, visibleItems).slideDown();
            if ($('.blog-listing-main-article').length <= visibleItems) {
                $('.blog-listing-main-loadmore').addClass('hide');
            }
        });
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.blog-listing-main' },
            tweenArr: [
                new FadeIn({ el: $('.blog-listing-main-article-title') }),
                ...Array.from($('.blog-listing-main-article')).map((item, idx) => {
                        return idx < visibleItems && new FadeIn({ el: $(item), delay: '<=.2', duration:.6 });
                }),
                new FadeIn({ el: $('.blog-listing-main-loadmore-inner') })
            ]
        })
        
    }
}
let blogListingMain = new BlogListingMain('.blog-listing-main');
blogListingMain.trigger();