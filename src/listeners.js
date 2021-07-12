// File: listeners.js
// Author: Chuncheng
// Purpose: Add Listeners for the HTML Page

// -----------------------------------------------
// Listen Scrolling

var scrollFunc = function (e) {
  e = e || window.event;
  if (e.wheelDelta) {
    // Support Chrome
    delta = e.wheelDelta;
  } else if (e.detail) {
    // Support Firefox
    delta = e.detail;
  }
  let y = window.scrollY;
  //   console.log(delta, y);

  let i = 0;
  for (; i < gTops.length; i++) {
    if (y < gTops[i]) {
      break;
    }
  }
  if (i != gSectionIdx) {
    gSectionIdx = i;
    console.log("Enter Section Idx of", i);

    d3.select("#mainCanvas").selectAll("h3").data([]).exit().remove();

    d3.select("#mainCanvas")
      .selectAll("h3")
      .data([gData[i][0]])
      .enter()
      .append("h3")
      .attr("class", "text1")
      .text((d) => d);
  }
};

// Binding scrollFunc
// Support Chrome
window.onmousewheel = document.onmousewheel = scrollFunc;
// Support Firefox
if (document.addEventListener) {
  document.addEventListener("DOMMouseScroll", scrollFunc, false);
}
