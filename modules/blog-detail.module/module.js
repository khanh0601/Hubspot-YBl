


class BlogDetail extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        $('.blog-detail-share-item[type="copy"]').on('click', (e) => {
            e.preventDefault();
            let link = window.location.href;
            this.copyTextToClipboard(link);
        });
        $('.blog-detail-share-item').each((idx, item) => {
            let type = $(item).attr('type');
            switch (type) {
                case "whatsapp":
                    $(item).attr('href', this.shareOnWhatsApp(window.location.href));
                    break;
                case "twitter":
                    $(item).attr('href', this.shareOnTwitter(window.location.href));
                    break;
                default:
                    break;
            }
        })
        
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.blog-detail' },
            tweenArr: [
                new FadeIn({ el: $('.blog-detail-nav') }),
                new FadeIn({ el: $('.blog-detail-title') }),
                new FadeIn({ el: $('.blog-detail-thumb') }),
                new FadeIn({ el: $('.blog-detail-content') }),
                new FadeIn({ el: $('.blog-detail-share-wrap') }),
            ]
        })
    }
    copyTextToClipboard(textToCopy) {
        var tempInput = $('<input>');
        $('body').append(tempInput);
        tempInput.val(textToCopy).select();
        document.execCommand('copy');
        tempInput.remove();
        $('.blog-detail-share-item-tooltip .txt').text('Copied!')
        setTimeout(function () {
            $('.blog-detail-share-item-tooltip .txt').text('Copy Link')
        }, 2000)
    }
     shareOnTwitter(link) {
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`;
        return twitterUrl;  
    }
     shareOnWhatsApp(link) {
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
        return whatsappUrl;
    }
}
let blogDetail = new BlogDetail('.blog-detail');
blogDetail.trigger();