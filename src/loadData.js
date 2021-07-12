// File: loadData.js
// Author: Chuncheng
// Purpose: Load Data and Place them

d3.json("../backend/simulation_data.json").then((raw) => {
  let data = [];
  for (let i in raw.title) {
    data.push(
      Array(
        raw.title[i],
        raw.title[i].replaceAll(" ", ""),
        raw.description[i],
        raw.gender[i],
        raw.location[i],
        raw.date[i]
      )
    );
  }

  // Nav Bar
  var ul = d3.select("#toc-1").select("nav").select("ul");
  ul.selectAll("li")
    .data(data)
    .enter()
    .append("li")
    .attr("class", "nav-item")
    .append("a")
    .attr("class", "nav-link")
    .attr("href", (d) => "#" + d[1])
    .text((d) => d[0]);

  // Sections
  var div = d3.select("#sectionContainer");
  var divs = div
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "section")
    .attr("id", (d) => d[1]);

  divs.append("h3").text((d) => d[0]);
  divs
    .append("div")
    .attr("class", "story")
    .text((d) => d[2]);

  gTops = [];
  for (let i in data) {
    var t = document.getElementById(data[i][1]).offsetTop;
    var h = document.getElementById(data[i][1]).offsetHeight;
    gTops.push(t + h / 2);
  }
  console.log(gTops);

  gData = data;
  console.log(gData);
});
