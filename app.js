/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* scroll-activated sticky nav */
const body = document.body;
let lastScroll = 0;

const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    if (window.innerWidth > 767) {  // Apply scroll effect only for larger screens
        if (currentScroll <= 0) {
            body.classList.remove('scroll-up')
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove('scroll-up')
            body.classList.add("scroll-down")
        }
        if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
            body.classList.add('scroll-up')
            body.classList.remove("scroll-down")
        }
    } else {
        // For smaller screens, remove scroll-up and scroll-down classes
        body.classList.remove('scroll-up', 'scroll-down');
    }

    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleScroll)
window.addEventListener('resize', handleScroll)  // Handle resizing

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home-data, .about-img, .skills-subtitle, .skills-text', {});
sr.reveal('.home-img, .about-subtitle, .about-text, .skills-img', { delay: 400 });
sr.reveal('.home-social-icon', { interval: 200 });
sr.reveal('.skills-data, .work-img, .contact-input', { interval: 200 });
