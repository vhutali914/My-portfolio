const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// SCROLL ANIMATION

const revealElements = document.querySelectorAll(
'.hero-text, .hero-image, .about-image, .about-text, .skill-card, .project-card, .timeline-item, .contact-box, form'
);

window.addEventListener('scroll', revealOnScroll);

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            element.classList.add('active');
        }

    });

}

revealOnScroll();