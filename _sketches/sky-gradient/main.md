---
layout: post
title: Sky Gradient
caption: Uses lerpColor to paint the background.
---

Simple Sketch


<div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/p5.min.js"></script>
</div>

<script>
    //linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%);
let from;
let to;
let c;
function setup() {
  createCanvas(400, 400);
  noLoop();
  from = color("#82addb");
  to = color("#ebb2b1");
}

function draw() {
  background(220);
  for (let y = 0; y < height; y++) {
    c = lerpColor(from, to, y / height);
    stroke(c);
    line(0, y, width, y);
  }
}
</script>
