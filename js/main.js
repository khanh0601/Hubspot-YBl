gsap.registerPlugin(ScrollTrigger);

$('html').css('scroll-behavior', 'auto');
$('html').css('height', 'auto');

let lenis = new Lenis({})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
const viewport = {
    w: window.innerWidth,
    h: window.innerHeight
}
function activeItem(elArr, index) {
  elArr.forEach((el, idx) => {
      $(el).removeClass('active').eq(index).addClass('active')
  })
}
class TriggerSetup {
  constructor(triggerEl) {
      this.tlTrigger;
      this.triggerEl = triggerEl;
  }
  setTrigger(setup) {
      this.tlTrigger = gsap.timeline({
          scrollTrigger: {
              trigger: this.triggerEl,
              start: 'top bottom+=50%',
              end: 'bottom top',
              once: true,
              onEnter: () => setup(),
          }
      })
  }
}
setTimeout(() => {
  $('[data-init-df]').removeAttr('data-init-df');
}, 200)