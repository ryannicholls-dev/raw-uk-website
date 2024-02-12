const scrollTracker = document.querySelector('.scroll-tracker');
const scrollTracker2 = document.querySelector('.scroll-tracker-background');
const about = document.querySelector('.about');

const controller = new ScrollMagic.Controller();
const timelineAnim = TweenMax.fromTo(scrollTracker, 1, { transform: "scaleX(0)" }, { transform: "scaleX(1)" } );


const tl = new TimelineMax();

const timelineScene = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: about,
    triggerHook: 0
})
.setTween(timelineAnim)
.addTo(controller);

document.addEventListener('scroll', function(){
    const clientHeight = document.documentElement.clientHeight;
    const aboutSectionY = about.getBoundingClientRect().y;
    const aboutSectionHeight = about.getBoundingClientRect().height;

    if(clientHeight > aboutSectionY + aboutSectionHeight * 1/2) {
        console.log('true');
        scrollTracker.style.animation = 'revealTimeline 0.5s linear';
        scrollTracker2.style.animation = 'revealTimelineBackground 0.2s linear';
        scrollTracker2.style.opacity = 0.3;
    }
    else{
        console.log('false');
        scrollTracker.style.animation = 'hideTimeline 0.5s linear';
        scrollTracker2.style.animation = 'hideTimelineBackground 0.5s linear';
        scrollTracker2.style.opacity = 0;
    }
});

