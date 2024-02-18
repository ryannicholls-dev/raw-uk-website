// Step 1: Get DOM elements
let tunnelNext = document.getElementById('tunnel next');
let tunnelPrev = document.getElementById('tunnel prev');

let palmNext = document.getElementById('palm next');
let palmPrev = document.getElementById('palm prev');

let chapter = document.querySelector('.carousel .list .item:nth-child(1) .chapter');
let title = document.querySelector('.carousel .list .item:nth-child(1) .title');
let description = document.querySelector('.carousel .list .item:nth-child(1) .description');
let buttons = document.querySelector('.carousel .list .item:nth-child(1) .buttons');

let timeRunning = 1000;
let timeAutoNext = 7000;


// Event listeners for tunnel and palm carousel navigation buttons
tunnelNext.onclick = function() {
    showSlider('tunnel', 'next');    
}

tunnelPrev.onclick = function() {
    showSlider('tunnel', 'prev');    
}

palmNext.onclick = function() {
    showSlider('palm', 'next');
}

palmPrev.onclick = function() {
    showSlider('palm', 'prev');    
}

function setContent(){
    chapter = document.querySelector('.carousel .list .item:nth-child(1) .chapter');
    title = document.querySelector('.carousel .list .item:nth-child(1) .title');
    description = document.querySelector('.carousel .list .item:nth-child(1) .description');
    buttons = document.querySelector('.carousel .list .item:nth-child(1) .buttons');

    chapter.style.transform = 'translateY(0)';
    title.style.transform = 'translateY(0)';
    description.style.transform = 'translateY(0)';
    buttons.style.transform = 'translateY(0)';

    chapter.style.filter = 'blur(20px)';
    title.style.filter = 'blur(20px)';
    description.style.filter = 'blur(20px)';
    buttons.style.filter = 'blur(20px)';
    
    chapter.style.opacity = '0';
    title.style.opacity = '0';
    description.style.opacity = '0';
    buttons.style.opacity = '0';
}

function animateContent(){
    chapter.style.animation = 'showContent 0.5s 1s linear 1 forwards';
    chapter.style.animationDelay = '0.2s';

    title.style.animation = 'showContent 0.5s 1s linear 1 forwards';
    title.style.animationDelay = '0.4s';
    
    description.style.animation = 'showContent 0.5s 1s linear 1 forwards';
    description.style.animationDelay = '0.6s';
    
    buttons.style.animation = 'showContent 0.5s 1s linear 1 forwards';
    buttons.style.animationDelay = '0.8s';
}

setContent();

// Function to move slider to next or previous item
function showSlider(carouselType, type) {
    let carouselSelector = `.carousel.${carouselType}`;
    let SliderDom = document.querySelector(`${carouselSelector} .list`);
    let thumbnailSelector = `${carouselSelector} .thumbnail .item`;
    let thumbnailItemsDom = document.querySelectorAll(thumbnailSelector);
    let SliderItemsDom = SliderDom.querySelectorAll(`${carouselSelector} .list .item`);
    let thumbnailBorderDom = document.querySelector(`${carouselSelector} .thumbnail`);
    let carouselDom = document.querySelector(`${carouselSelector}`);


    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
        setContent();
        animateContent();
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
        setContent();
        animateContent();
    }
    
    // Clear previous animation class after animation duration
    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}


document.addEventListener('scroll', function(){
    const clientHeight = document.documentElement.clientHeight;
    const tunnelsSectionY = tunnels.getBoundingClientRect().y;
    const clientThreeQuarter = clientHeight * 0.50;

    const tunnelsSection = document.querySelector('.tunnel');
    const thumbnail = document.querySelector('.thumbnail');

    if (clientThreeQuarter > tunnelsSectionY) {
        tunnelsSection.style.opacity = 1;
        thumbnail.style.animation = 'showThumbnails 1s linear forwards';
    }

    if (clientHeight * 0.20 > tunnelsSectionY) {
        setContent();
        animateContent();
        thumbnail.style.animation = 'showThumbnails 1s linear forwards';
    }

    // setTimeout(() => {
    //     thumbnail.style.animation = '';
    // }, 3000);

});
