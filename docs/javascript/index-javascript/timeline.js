const isMobileDevice = window.innerWidth <= 768; // Example threshold for mobile devices

const scrollTracker = document.querySelector('.scroll-tracker');
const scrollTrackerBackground = document.querySelector('.scroll-tracker-background');
const timelineDates = document.querySelector('.dates-container');

const tunnels = document.querySelector('.tunnels');

const controller = new ScrollMagic.Controller();
const timelineAnim = TweenMax.fromTo(scrollTracker, 1, { transform: "scaleX(0)" }, { transform: "scaleX(1)" } );

const timelineDuration = document.documentElement.clientHeight * 5;

console.log(timelineDuration);

const tl = new TimelineMax();


const timelineScene = new ScrollMagic.Scene({
    duration: timelineDuration,
    triggerElement: tunnels,
    triggerHook: 0
})
.setTween(timelineAnim)
.addTo(controller);


//Show the overall timeline and timeline background
document.addEventListener('scroll', function(){
    const clientHeight = document.documentElement.clientHeight;
    const tunnelsSectionY = tunnels.getBoundingClientRect().y;
    const clientThreeQuarter = clientHeight * 0.10;

    if (clientThreeQuarter > tunnelsSectionY) {
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

