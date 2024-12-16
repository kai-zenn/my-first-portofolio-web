
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});

const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, offset = 50) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= window.innerHeight - offset);
};

const displayScrollElement = (element) => {
    element.classList.add('active');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);

const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar => {
    const target = bar.getAttribute('data-progress');
    bar.style.width = target + '%';
});

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.innerHTML = body.dataset.theme === 'dark' ? 
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('scroll-animate');
});

handleScrollAnimation();



