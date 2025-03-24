activeItem(['.ld-sol-content-item', '.ld-sol-img-item'], 0)
if(viewport.w > 991){
    let topSticky = (parseInt(viewport.h) - parseInt($('.ld-sol-content-inner').height())) / 2;
    $('.ld-sol-content-inner').css('top', topSticky + 'px');
    let lengthItem = $('.ld-sol-content-item').length;

    let tlSticky = gsap.timeline({
        scrollTrigger: {
            trigger: '.ld-sol-content-wrap',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            onUpdate: (self) => {
                let progress = self.progress;
                let sectionSize = 1 / lengthItem; 
                let indexActiveItem = Math.min(Math.floor(progress / sectionSize), lengthItem - 1);
                activeItem(['.ld-sol-content-item', '.ld-sol-img-item'], indexActiveItem);

                $('.ld-sol-content-item').each(function(index) {
                    let start = index * sectionSize;
                    let itemProgress = (progress - start) / sectionSize;
                    itemProgress = Math.min(1, Math.max(0, itemProgress))*100 - 100;
                    $(this).css('--progress', itemProgress + '%');
                });
            }
        }
    });
}
class LandingSol extends TriggerSetup {
    constructor(triggerEl) {
        super(triggerEl);
    }
    trigger() {
        super.setTrigger(this.setup.bind(this));
    }
    setup() {
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-sol-title-wrap' },
            tweenArr: [
                new FadeIn({ el: $('.ld-sol-title') }),
            ]
        })
        new MasterTimeline({
            triggerInit: this.triggerEl,
            scrollTrigger: { trigger: '.ld-sol-content-wrap' },
            tweenArr: [
                ...Array.from($('.ld-sol-content-item')).flatMap((item, idx) => {
                    return [
                        new FadeIn({el: $(item).find('.ld-sol-content-item-inner')})
                    ]
                }),
                new ScaleInset({el: $('.ld-sol-img').get(0)})
            ]
        })
    }
}
let landingSol = new LandingSol('.ld-sol');
landingSol.trigger();