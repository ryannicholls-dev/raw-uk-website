// Step 1: Get DOM elements
let tunnelNext = document.getElementById('tunnel next');
let tunnelPrev = document.getElementById('tunnel prev');

let palmNext = document.getElementById('palm next');
let palmPrev = document.getElementById('palm prev');

let bathNext = document.getElementById('bath next');
let bathPrev = document.getElementById('bath prev');

let roofNext = document.getElementById('roof next');
let roofPrev = document.getElementById('roof prev');


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

bathNext.onclick = function() {
    showSlider('bath', 'next');
}

bathPrev.onclick = function() {
    showSlider('bath', 'prev');    
}

roofNext.onclick = function() {
    showSlider('roof', 'next');
}

roofPrev.onclick = function() {
    showSlider('roof', 'prev');    
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

// Show sections on scroll
document.addEventListener('scroll', function(){
    const tunnels = document.querySelector('.carousel.tunnel');
    const clientHeight = document.documentElement.clientHeight;
    const tunnelsSectionY = tunnels.getBoundingClientRect().y;
    const clientThreeQuarter = clientHeight * 0.50;

    if (clientThreeQuarter > tunnelsSectionY) {
        // console.log(clientHeight);
        tunnels.style.opacity = 1;
    }
    else {
        // console.log('false');
        
    }
});