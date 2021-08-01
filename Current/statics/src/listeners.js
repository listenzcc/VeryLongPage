// File: listeners.js
// Author: Chuncheng
// Purpose: Setup Listeners for the HTML Page,
//          Operate when Scrolling to Certain Y-values.

let gCurrentSection = -1;

// -----------------------------------------------
// Get the offsetTop values of the 'sectionDiv'
let getTops = function () {
    let tops = [];
    for (let j = 0; j < ds.length; j++) {
        tops.push(ds[j].offsetTop - ds[j].parentElement.offsetTop);
    }
    return tops;
};

// -----------------------------------------------
// Listen Scrolling
let scrollFunc = function (e) {
    // let tops = getTops();
    // console.log(tops);

    e = e || window.event;
    if (e.wheelDelta) {
        // Support Chrome
        delta = e.wheelDelta;
    } else if (e.detail) {
        // Support Firefox
        delta = e.detail;
    }
    let y = window.scrollY;
    // console.log(delta, y);

    let anchors = document.getElementsByClassName("anchor");
    let newSection = [];
    for (let i = 0; i < anchors.length; i++) {
        if ($(anchors[i]).visible(true)) {
            newSection.push(anchors[i].id);
        }
    }

    if (newSection.length > 0) {
        if (gCurrentSection !== newSection[0]) {
            gCurrentSection = newSection[0];
            console.log("Enter Section:", gCurrentSection);
            redrawSvg();
        }
    }
};

// // Binding scrollFunc
// // Support Chrome
// window.onmousewheel = document.onmousewheel = scrollFunc;
// window.onscroll = document.onscroll = scrollFunc;
// // Support Firefox
// if (document.addEventListener) {
//     document.addEventListener("DOMMouseScroll", scrollFunc, false);
// }
