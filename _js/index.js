import $ from 'jquery';
import './../_sass/index.scss';
import './tooltips';
//import './algorithms';

let hamburgerToggle = document.querySelector('.header__hamburger-toggle');
let headerNav = document.querySelector('.header__nav');

hamburgerToggle.addEventListener('click', function () {
    hamburgerToggle.classList.toggle("header__hamburger-open");
    headerNav.classList.toggle("header__nav--open");
});