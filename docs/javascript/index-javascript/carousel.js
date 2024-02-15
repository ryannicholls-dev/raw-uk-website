//step 1: get DOM
let tunnelNext = document.getElementById('tunnel next');
let tunnelPrev = document.getElementById('tunnel prev');

let palmNext = document.getElementById('palm next');
let palmPrev = document.getElementById('palm prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom;
let timeDom = document.querySelector('.carousel .time');

//thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;
let timeAutoNext = 7000;

tunnelNext.onclick = function(){
    carouselDom = document.querySelector('.carousel.tunnel');
    SliderDom = carouselDom.querySelector('.carousel.tunnel .list');
    thumbnailItemsDom = document.querySelectorAll('.carousel.tunnel .thumbnail .item');
    showSlider('next');    
}

tunnelPrev.onclick = function(){
    carouselDom = document.querySelector('.carousel.tunnel');
    SliderDom = carouselDom.querySelector('.carousel.tunnel .list');
    thumbnailItemsDom = document.querySelector('.carousel.tunnel .thumbnail .item');
    thumbnailBorderDom = document.querySelector('.carousel.tunnel .thumbnail');
    showSlider('prev');    
}

palmNext.onclick = function(){
    carouselDom = document.querySelector('.carousel.palm');
    SliderDom = carouselDom.querySelector('.carousel.palm .list');
    thumbnailItemsDom = document.querySelectorAll('.carousel.palm .thumbnail .item');
    showSlider('next');    
}



let runTimeOut;

// Uncomment for auto scroll
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)

function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // Uncomment for auto scroll
    // clearTimeout(runNextAuto);
    // runNextAuto = setTimeout(() => {
    //     next.click();
    // }, timeAutoNext)
}