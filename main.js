// NAVBAR SCROll 
const nav = document.querySelector('#nav');
const logoDark = document.querySelector('.logoDark');
const logoLight = document.querySelector('.logoLight');
const navList = document.querySelectorAll('.navList');
let section = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    if(window.scrollY > 150){
        nav.classList.add('nav-scrolled');
        logoDark.classList.add('active');
        logoLight.classList.add('hidden');
        for(let i=0; i<navList.length;i++){
            navList[i].classList.add('scroll');
        }
    }
    if(window.scrollY < 150){
        nav.classList.remove('nav-scrolled');
        logoDark.classList.remove('active');
        logoLight.classList.remove('hidden');
        for(let i=0; i<navList.length;i++){
            navList[i].classList.remove('scroll');
        }
    }
});

// HOMENAV SCROLL CODE 
const homeNav = document.querySelector('.homeNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500){
        homeNav.classList.add('active');
    }
    if (window.scrollY < 500){
        homeNav.classList.remove('active');
    }
})

// COLOUR CHANGING OF NAVLISTS
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navList.forEach(list => {
                list.classList.remove('active');
                document.querySelector('nav .navContainer .navLinks a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

// IMAGE SLIDER
let img = document.querySelectorAll('.galleryImg');
let previousBtnEffect = document.querySelector('.previous');
let nextBtnEffect = document.querySelector('.next');
let counter = 0;
img.forEach((slide, index) => {
    slide.style.left = `${index * 436}%`;
})

let previous = () => {
    counter--;
    if (counter > 2){
    counter = 0;
}
if (counter < 0){
    counter = 1;
}
    slideImage();
    previousBtnEffect.classList.toggle('active');
}
let goNext = () => {
    counter++;
    if (counter > 1){
    counter = 0;
}
if (counter < 0){
    counter = 1;
}
    slideImage();
    nextBtnEffect.classList.toggle('active');
}

const slideImage = () => {
    img.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 436}%)`;

    })
}

// TABLE 
let column1 = document.querySelector('.column1');
let column2 = document.querySelector('.column2');
let column3 = document.querySelector('.column3');
let column4 = document.querySelector('.column4');
let column5 = document.querySelector('.column5');
let scheduleTable1 = document.querySelector('.scheduleTable1');
let scheduleTable2 = document.querySelector('.scheduleTable2');
let scheduleTable3 = document.querySelector('.scheduleTable3');
let scheduleTable4 = document.querySelector('.scheduleTable4');
let scheduleTable5 = document.querySelector('.scheduleTable5');
let redColor1 = document.querySelector('.column1 span'); 
let redColor2 = document.querySelector('.column2 span'); 
let redColor3 = document.querySelector('.column3 span'); 
let redColor4 = document.querySelector('.column4 span'); 
let redColor5 = document.querySelector('.column5 span');

column1.addEventListener('click', () => {
    scheduleTable1.classList.add('active');
    scheduleTable2.classList.remove('active');
    scheduleTable3.classList.remove('active');
    scheduleTable4.classList.remove('active');
    scheduleTable5.classList.remove('active');
    column1.classList.add('active');
    column2.classList.remove('active');
    column3.classList.remove('active');
    column4.classList.remove('active');
    column5.classList.remove('active');
    redColor1.classList.add('active');
    redColor2.classList.remove('active');
    redColor3.classList.remove('active');
    redColor4.classList.remove('active');
    redColor5.classList.remove('active');
})
column2.addEventListener('click', () => {
    scheduleTable1.classList.remove('active');
    scheduleTable2.classList.add('active');
    scheduleTable3.classList.remove('active');
    scheduleTable4.classList.remove('active');
    scheduleTable5.classList.remove('active');
    column1.classList.remove('active');
    column2.classList.add('active');
    column3.classList.remove('active');
    column4.classList.remove('active');
    column5.classList.remove('active');
    redColor1.classList.remove('active');
    redColor2.classList.add('active');
    redColor3.classList.remove('active');
    redColor4.classList.remove('active');
    redColor5.classList.remove('active');

})
column3.addEventListener('click', () => {
    scheduleTable1.classList.remove('active');
    scheduleTable2.classList.remove('active');
    scheduleTable3.classList.add('active');
    scheduleTable4.classList.remove('active');
    scheduleTable5.classList.remove('active');
    column1.classList.remove('active');
    column2.classList.remove('active');
    column3.classList.add('active');
    column4.classList.remove('active');
    column5.classList.remove('active');
    redColor1.classList.remove('active');
    redColor2.classList.remove('active');
    redColor3.classList.add('active');
    redColor4.classList.remove('active');
    redColor5.classList.remove('active');

})
column4.addEventListener('click', () => {
    scheduleTable1.classList.remove('active');
    scheduleTable2.classList.remove('active');
    scheduleTable3.classList.remove('active');
    scheduleTable4.classList.add('active');
    scheduleTable5.classList.remove('active');
    column1.classList.remove('active');
    column2.classList.remove('active');
    column3.classList.remove('active');
    column4.classList.add('active');
    column5.classList.remove('active');
    redColor1.classList.remove('active');
    redColor2.classList.remove('active');
    redColor3.classList.remove('active');
    redColor4.classList.add('active');
    redColor5.classList.remove('active');

})
column5.addEventListener('click', () => {
    scheduleTable1.classList.remove('active');
    scheduleTable2.classList.remove('active');
    scheduleTable3.classList.remove('active');
    scheduleTable4.classList.remove('active');
    scheduleTable5.classList.add('active');
    column1.classList.remove('active');
    column2.classList.remove('active');
    column3.classList.remove('active');
    column4.classList.remove('active');
    column5.classList.add('active');
    redColor1.classList.remove('active');
    redColor2.classList.remove('active');
    redColor3.classList.remove('active');
    redColor4.classList.remove('active');
    redColor5.classList.add('active');
})