import $ from 'jquery';
require('waypoints/lib/noframework.waypoints.min');

let tableOfContents = document.querySelector('.table-of-contents__menu');

let waypoint1 = new Waypoint({
    element: document.getElementById("wprowadzenie"),
    handler: function () {
        let item = $("a[href='#wprowadzenie']");
        if (!item.hasClass('table-of-contents__active')) {
            item.classList.toggle('table-of-contents__active');
        }
    }
});

let waypoint2 = new Waypoint({
    element: document.getElementById("definicja-liczb-pierwszych"),
    handler: function () {
        let item = $("a[href='#definicja-liczb-pierwszych']");
        if (!item.hasClass('table-of-contents__active')) {
            item.classList.toggle('table-of-contents__active');
        }
    }
});