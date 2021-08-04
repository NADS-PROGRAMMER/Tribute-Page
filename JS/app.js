

var timeline = gsap.timeline();
var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

// Animations for the loading of the page.

document.documentElement.style.overflowY = 'hidden';
timeline.to('.text', {y: "0%", duration: 2, stagger: 0.25, ease: "elastic"})
timeline.to('.text', {color: "#b33f40", duration: 2, stagger: 0.25, ease: "power1"});
timeline.to('.cover', {y: "-100%", duration: 1});

timeline.to('.titles',  {y: "0%", opacity: "1", duration: 2, ease: "power1", stagger: 0.25});
timeline.from('.about-items', {opacity: 0, duration: .5, ease: "power1", stagger: 0.2}).then(() => document.documentElement.style.overflowY = 'scroll');

tl.to('.footer-char', {color: '#fff', stagger: .25})
tl.to('.footer-char', {color: '#b33f40', stagger: .25}, "-=1.5")


const isInViewport = (element) => {

    const elem = element.getBoundingClientRect();
    return (
        elem.top >= 0 &&
        elem.left >= 0 &&
        elem.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        elem.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const isVisible = (element) => {

    const elem = element.getBoundingClientRect();

    return (elem.top > 0 || elem.bottom > 0);
}

document.addEventListener('scroll', () => {

    
    animationForMainSection();
    aboutDivAnimation();
    messageAnimation();
    achievementsAnimation();
})

function animateElement(id, element) {

    if (isVisible(element)) {
        gsap.to(id, {opacity: 1, duration: 1, ease: "power1"});
        gsap.to(id, {y: "0%", duration: 1, ease: "power"});
    } 
    else {

        gsap.to(id, {opacity: 0, ease: "power1"});
        gsap.to(id, {y: "5%", ease: "power1"});
    } 

    
} 

function animationForMainSection() {

    let titleDiv = document.querySelector('.title-section');
    let hr = document.querySelector('#title-hr');

    if (isVisible(titleDiv)) {
        gsap.to('.titles',  {y: "0%", duration: .5, ease: "power1", stagger: 0.2});
    }
    else{
         gsap.to('.titles',  {y: "300%"});
    }
}


// Animation of the ABOUT division.
function aboutDivAnimation() {

    let aboutTitle = document.querySelector('#about-title');
    let aboutHorizontal = document.querySelector('#about-hr');
    let aboutParagraph = document.querySelector('#about-paragraph');
    let image1 = document.querySelector('#image1');
    let image2 = document.querySelector('#image2');
    let image3 = document.querySelector('#image3');
    let image4 = document.querySelector('#image4');

    animateElement('#about-title', aboutTitle);
    animateElement('#about-hr', aboutHorizontal);
    animateElement('#about-paragraph', aboutParagraph);
    animateElement('#image1', image1);
    animateElement('#image2', image2);
    animateElement('#image3', image3);
    animateElement('#image4', image4);
}

function messageAnimation() {

    let messageImage = document.querySelector('#message-image');
    let messageTitle = document.querySelector('#message-title');
    let messageHr = document.querySelector('#message-hr');
    let messageParagraph = document.querySelector('#message-paragraph');

    animateElement('#message-image', messageImage);
    animateElement('#message-title', messageTitle);
    animateElement('#message-hr', messageHr);
    animateElement('#message-paragraph', messageParagraph);
}

function achievementsAnimation() {

    let achievementsTitle = document.querySelector('#achievements-title');
    let achievementsHr = document.querySelector('#achievements-hr');
    let categoryTitle = document.querySelector('#category-title');
    let winningTitle = document.querySelector('#winning-title');
    let categoryTitle2 = document.querySelector('#category-title2');
    let guinnesTitle = document.querySelector('#guinness-title');

    animateElement('#achievements-title', achievementsTitle);
    animateElement('#achievements-hr', achievementsHr);
    animateElement('#category-title', categoryTitle);
    animateElement('#winning-title', winningTitle);
    animateElement('#category-title2', categoryTitle2);
    animateElement('#guinness-title', guinnesTitle);
}