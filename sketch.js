function setup() {
    // Put things you want to run once in here. 
    createCanvas(400, 269);
  }
  
  function draw() {
    // Put things you want to over and over here. 
    background(149, 6, 6);
    strokeWeight(4)
    line(0, 49, 400, 42)
    line(0, 72, 400, 63)
    line(0, 79, 400, 73)

    fill(186, 142, 35)
    beginShape();
    vertex(0, 78);
    vertex(400, 73);
    vertex(400, 270);
    vertex(0, 270)
    endShape(CLOSE)

    noFill()
    curve(607, 167, 163, 79, 0, 166, 345, -1)
    curve(80, 150, 55, 111, 0, 105, 20, 160)
    curve(60, 90, 68, 78, 0, 131, 80, 150)
    curve(155, 500, 155, 177, 0, 248, 0, 348)
    curve(400, 200, 155, 177, 0, 233, 0, 350)
    curve(400, 300, 400, 132, 277, 77, 200, 150)
    curve(500, 300, 400, 132, 147, 167, 200, 300)
    curve(30, 10, 276, 78, 147, 165, 147, 165)
    strokeWeight(15)
    curve(700, 200, 400, 200, 255, 270, 500, 200)
    curve(700, 200, 400, 200, 208, 270, 500, 270)
    curve(100, 600, 72, 270, 400, 180, 800, 400)
    curve(400, 400, 299, 171, 12, 270, 2, 600)

    strokeWeight(4)
    fill(0)
    beginShape();
    vertex(153, 179);
    vertex(90, 188);
    vertex(76, 190);
    vertex(104, 171);
    vertex(137, 165);
    endShape(CLOSE)

    fill(0)
    beginShape()
    vertex(282, 236);
    vertex(247, 270);
    vertex(204, 270);
    endShape(CLOSE)

    fill(0)
    beginShape();
    vertex(400, 132);
    vertex(384, 115);
    vertex(349, 91);
    vertex(277, 77);
    vertex(147, 165);
    vertex(147, 167);
    vertex(308, 125);
    endShape(CLOSE)


    strokeWeight(4)
    fill(0)
    beginShape();
    vertex(55, 111);
    vertex(91, 93)
    vertex(137, 80);
    vertex(0, 78);
    vertex(0, 103);
    vertex(20, 100)
    endShape(CLOSE)

    fill(0)
    beginShape();
    vertex(400, 216);
    vertex(383, 223);
    vertex(358, 236);
    vertex(339, 251);
    vertex(320, 270);
    vertex(360, 270);
    vertex(375, 243);
    vertex(400, 216);
    endShape(CLOSE)
    
  }