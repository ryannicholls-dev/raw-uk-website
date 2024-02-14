const scrollTracker = document.querySelector('.scroll-tracker');
const scrollTrackerBackground = document.querySelector('.scroll-tracker-background');
const timelineDates = document.querySelector('.dates-container');

const about = document.querySelector('.about');

const controller = new ScrollMagic.Controller();
const timelineAnim = TweenMax.fromTo(scrollTracker, 1, { transform: "scaleX(0)" }, { transform: "scaleX(1)" } );

const tl = new TimelineMax();

const timelineScene = new ScrollMagic.Scene({
    duration: 6000,
    triggerElement: about,
    triggerHook: 0.10
})
.setTween(timelineAnim)
.addTo(controller);


//Show the overall timeline and timeline background
document.addEventListener('scroll', function(){
    const clientHeight = document.documentElement.clientHeight;
    const aboutSectionY = about.getBoundingClientRect().y;
    const clientThreeQuarter = clientHeight * 0.10;

    if (clientThreeQuarter > aboutSectionY) {
        // console.log(clientHeight);
        scrollTracker.style.animation = 'revealTimeline 0.5s linear';
        scrollTrackerBackground.style.animation = 'revealTimelineBackground 0.2s linear';
        scrollTrackerBackground.style.opacity = 0.3;

        timelineDates.style.animation = 'revealTimeline 0.5s linear';
        timelineDates.style.opacity = 1;
    }
    else {
        // console.log('false');
        scrollTracker.style.animation = 'hideTimeline 0.5s linear';
        scrollTrackerBackground.style.animation = 'hideTimelineBackground 0.5s linear';
        scrollTrackerBackground.style.opacity = 0;

        // timelineDates.style.animation = 'hideTimeline 0.5s linear';
        timelineDates.style.opacity = 0;
    }
});

