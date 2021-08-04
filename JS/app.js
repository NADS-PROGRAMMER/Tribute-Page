// const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

var timeline = gsap.timeline();

document.body.style.overflow = 'hidden';
timeline.to('.text', {y: "0%", duration: 2, stagger: 0.25, ease: "elastic"})
timeline.to('.text', {x: "200%", duration: 2, stagger: 0.25, ease: "power1"});
timeline.to('.cover', {y: "-100%", duration: 1});
timeline.to('.titles',  {y: "0%", duration: 1, ease: "power1", stagger: 0.25});
timeline.from('.about-items', {opacity: 0, duration: .5, ease: "power1", stagger: 0.5});

const isInViewport = (element) => {

    const elem = element.getBoundingClientRect();
    return (
        elem.top >= 0 &&
        elem.left >= 0 &&
        elem.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        elem.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', () => {

    
    animationForMainSection();
    
})


function animationForMainSection() {

    let titleDiv = document.querySelector('.image-section');
    let title = document.querySelector('#main-title');
    let subTitle = document.querySelector('#sub-title');

    if (isInViewport(subTitle) && titleDiv.getBoundingClientRect().y == 0) {
        gsap.to('.titles',  {y: "0%", opacity: 1, duration: .5, ease: "power1", stagger: 0.2});
    }
    else if (subTitle.getBoundingClientRect().y < -200){
         gsap.to('.titles',  {y: "300%", opacity: 0, duration: .4});
    }
}