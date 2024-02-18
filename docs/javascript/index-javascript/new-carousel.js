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
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
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

    chapter = document.querySelector('.carousel .list .item:nth-child(1) .chapter');
    title = document.querySelector('.carousel .list .item:nth-child(1) .title');
    description = document.querySelector('.carousel .list .item:nth-child(1) .description');
    buttons = document.querySelector('.carousel .list .item:nth-child(1) .buttons');


    if (clientThreeQuarter > tunnelsSectionY) {
        tunnelsSection.style.opacity = 1;
        thumbnail.style.animation = 'animation: showThumbnails 1s linear forwards';
    }

    if (clientHeight * 0.20 > tunnelsSectionY) {
        thumbnail.style.animation = 'showThumbnails 1s linear forwards';

        chapter.style.animation = 'showContent 0.5s 1s linear 1 forwards';
        chapter.style.animationDelay = '0.2s';

        title.style.animation = 'showContent 0.5s 1s linear 1 forwards';
        title.style.animationDelay = '0.4s';
        
        description.style.animation = 'showContent 0.5s 1s linear 1 forwards';
        description.style.animationDelay = '0.6s';
        
        buttons.style.animation = 'showContent 0.5s 1s linear 1 forwards';
        buttons.style.animationDelay = '0.8s';
    }

});