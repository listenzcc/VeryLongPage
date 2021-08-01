// File: listeners.js
// Author: Chuncheng
// Purpose: Redraw the mainSvg

let redrawSvg = function () {
    clearSvg();

    if (gCurrentSection === "section-1") {
        redrawSection1();
    }

    if (gCurrentSection === "section-2") {
        redrawSection2();
    }

    if (gCurrentSection === "section-3") {
        redrawSection3();
    }

    if (gCurrentSection === "section-4") {
        redrawSection4();
    }
};

let simulation = undefined;

// Clear the #mainSvg
let clearSvg = function () {
    // Clear the #mainSvg
    d3.select("#mainSvg").selectAll("g").data([]).exit().remove();

    // Stop the simulation
    if (simulation) {
        simulation.on("tick", undefined);
        simulation.alpha(0);
    }
};

let redrawSection1 = function () {
    console.log("Redraw Svg for Section-1");

    let num = 10;

    let rnd = function () {
        return d3.randomInt(80)() - 40;
    };

    let nodes = [];
    for (let i = 0; i < num; i++) {
        let node = {
            index: i,
            x: rnd(),
            y: rnd(),
            vx: 0,
            vy: 0,
        };
        nodes.push(node);
    }

    let node = d3
        .select("#mainSvg")
        .append("g")
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("class", "nodes")
        .attr("cx", (d) => d.x + 50 + "%")
        .attr("cy", (d) => d.y + 50 + "%")
        .attr("stroke", "none")
        .attr("fill", "black")
        .attr("r", 5);

    let update = function () {
        node.attr("cx", (d) => d.x + 50 + "%").attr(
            "cy",
            (d) => d.y + 50 + "%"
        );
        simulation.alpha(1);
        console.log("Updated Layout");
    };

    let links = [];
    for (let i = 0; i < num; i++) {
        for (let j = i + 1; j < num; j++) {
            links.push({ source: i, target: j });
        }
    }

    simulation = d3
        .forceSimulation(nodes)
        .velocityDecay(0.01)
        .force("center", d3.forceCenter())
        .force("links", d3.forceLink(links).strength(0.1).iterations(1))
        .force("manyBody", d3.forceManyBody().strength(0.1));

    simulation.on("tick", update);

    // simulation.stop();

    // for (let i = 0; i < 10; i++) {
    //   simulation.tick();
    //   update();
    // }

    //   d3.select("#mainSvg")
    //     .append("g")
    //     .selectAll("text")
    //     .data(["Section 1"])
    //     .enter()
    //     .append("text")
    //     .attr("fill", "black")
    //     .attr("x", "50%")
    //     .attr("y", "50%")
    //     .text((d) => d);
};

let redrawSection2 = function () {
    console.log("Redraw Svg for Section-2");
    d3.select("#mainSvg")
        .append("g")
        .selectAll("text")
        .data(["Section 2"])
        .enter()
        .append("text")
        .attr("fill", "black")
        .attr("x", "50%")
        .attr("y", "50%")
        .text((d) => d);
};

let redrawSection3 = function () {
    console.log("Redraw Svg for Section-3");
    d3.select("#mainSvg")
        .append("g")
        .selectAll("text")
        .data(["Section 3"])
        .enter()
        .append("text")
        .attr("fill", "black")
        .attr("x", "50%")
        .attr("y", "50%")
        .text((d) => d);
};

let redrawSection4 = function () {
    console.log("Redraw Svg for Section-4");
    d3.select("#mainSvg")
        .append("g")
        .selectAll("text")
        .data(["Section 4"])
        .enter()
        .append("text")
        .attr("fill", "black")
        .attr("x", "50%")
        .attr("y", "50%")
        .text((d) => d);
};
