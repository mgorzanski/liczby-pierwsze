import './../_sass/index.scss';

function toggleHamburgerMenu (element) {
    element.classList.toggle("hamburger-open");
    $('.header-nav').toggle();
}