
const isMobileDevice = window.innerWidth <= 768; // Example threshold for mobile devices
const imageHeight = isMobileDevice ? "70%" : "80%";
const imageWidth = isMobileDevice ? "80%" : "70%";

const hero = document.querySelector('.hero');
const image = document.querySelector('.bg-img');
const headline = document.querySelector('.headline');
const scrollText = document.querySelector('.scroll-text');
const navBar = document.querySelector('.navbar-nav');
const ticker = document.querySelector('.news-ticker-container');

const tl = new TimelineMax();

tl.fromTo(image, 1, { height: "0%"}, {height: imageHeight, ease: Power2.easeInOut }).delay(0.5)
  .fromTo(image, 1.2, { width: "100%"}, { width: imageWidth, ease: Power2.easeInOut})
  .fromTo(headline, 0.5, {visibility: "hidden"}, {visibility: "visible"}, "-=1")
  .fromTo(navBar, 1, { opacity: 0 }, { opacity: 1 }, "-=0.5")
  .fromTo(ticker, 3, { opacity: 0 }, { opacity: 1 }, "-=1")
  .fromTo(headline, 1, { opacity: 0 }, { opacity: 1 }, "-=3")
  .fromTo(scrollText, 1.5, { opacity: 0 }, { opacity: 1 },"-=2");

//SCROLLMAGIC
// const controller = new ScrollMagic.Controller();

// const logoAnim = TweenMax.fromTo(image, 1.5, { opacity: 1 }, { opacity: 0 });
// const textAnim = TweenMax.fromTo(headline, 1.5, { opacity: 1 }, { opacity: 0 });
// const tickerAnimHide = TweenMax.fromTo(ticker, 1.5, { visibility: 'visible' }, { visibility: 'hidden' });
// const tickerAnimFade = TweenMax.fromTo(ticker, 1.5, { opacity: 1 }, { opacity: 0 });

// //SCENES
// let logoScene = new ScrollMagic.Scene({
//   duration: 500, 
//   triggerElement: hero,
//   triggerHook: 0
// })
// .setPin(hero)
// .setTween(logoAnim)
// .addTo(controller);

// let textScene = new ScrollMagic.Scene({
//   duration: 500, 
//   triggerElement: hero,
//   triggerHook: 0
// })
// .setTween(textAnim)
// .addTo(controller);

// let tickerFadeScene = new ScrollMagic.Scene({
//   duration: 500, 
//   triggerElement: hero,
//   triggerHook: 0
// })
// .setTween(tickerAnimFade)
// .addTo(controller);

// let tickerScene = new ScrollMagic.Scene({
//   duration: 500, 
//   triggerElement: image,
//   triggerHook: 0
// })
// .setTween(tickerAnimHide)
// .addTo(controller);