var timeline = gsap.timeline();
var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

// Animations for the loading of the page.

document.documentElement.style.overflowY = 'hidden';
timeline.to('.text', {y: "0%", duration: 2, stagger: 0.25, ease: "elastic"})
timeline.to('.text', {color: "#b33f40", duration: 2, stagger: 0.25, ease: "power1"});
timeline.to('.cover', {y: "-100%", duration: .5});

timeline.to('.titles',  {y: "0%", opacity: "1", duration: 2, ease: "power1", stagger: 0.25});
timeline.from('.about-items', {opacity: 0, duration: .5, ease: "power1", stagger: 0.2}).then(() => document.documentElement.style.overflowY = 'scroll');

tl.to('.footer-char', {color: '#fff', stagger: .25})
tl.to('.footer-char', {color: '#b33f40', stagger: .25}, "-=1.5")

/**
 * Checks if the element is visible 
 * in the page regardless if it is
 * overflowing on device viewport height.
 */
const isVisible = (element) => {

    // Get the object that consist of top and bottom property of element.
    const elem = element.getBoundingClientRect();

    return (elem.top >= 0 || elem.bottom >= 0);
}

document.addEventListener('scroll', () => {

    animationForMainSection();
    aboutDivAnimation();
    messageDivAnimation();
    achievementsDivAnimation();
})

/**
 * This is the method that responsible for animating
 * all the elements in the page.
 */
function animateElement(id, element) {

    /** I use destructuring because we only need two properties 
     *  of the getBoundingClientRect() method.
     */
    const {top, bottom} = element.getBoundingClientRect();

    if ((top <= window.innerHeight)) {
        gsap.to(id, {y: "0%", duration: 1, ease: "power"});
        gsap.to(id, {opacity: 1, duration: 1, ease: "power1"});
    } 
    else {

        gsap.to(id, {opacity: 0, ease: "power1"});
        gsap.to(id, {y: "30%", ease: "power1"});
    } 

    if ((bottom >= 0)) {
        gsap.to(id, {y: "0%", duration: 1, ease: "power"});
        gsap.to(id, {opacity: 1, duration: 1, ease: "power1"});
    } 
    else {

        gsap.to(id, {opacity: 0, ease: "power1"});
        gsap.to(id, {y: "30%", ease: "power1"});
    }
} 

function animationForMainSection() {

    let titleDiv = document.querySelector('.title-section');

    if (isVisible(titleDiv)) 
        gsap.to('.titles',  {y: "0%", duration: .5, ease: "power1", stagger: 0.2});
    else
         gsap.to('.titles',  {y: "300%"});
}

/**
 * This is the method for animating 
 * all the elements in 'About' section
 * of the webpage.
 */
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

/**
 * This is the method for animating 
 * all of the elements in the 'Message' section 
 * of the webpage.
 */
function messageDivAnimation() {

    let messageImage = document.querySelector('#message-image');
    let messageTitle = document.querySelector('#message-title');
    let messageHr = document.querySelector('#message-hr');
    let messageParagraph = document.querySelector('#message-paragraph');

    animateElement('#message-image', messageImage);
    animateElement('#message-title', messageTitle);
    animateElement('#message-hr', messageHr);
    animateElement('#message-paragraph', messageParagraph);
}

/**
 * This is the function for animating 
 * all of the elements in the 'Achievements' section
 * of the webpage.
 */
function achievementsDivAnimation() {

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