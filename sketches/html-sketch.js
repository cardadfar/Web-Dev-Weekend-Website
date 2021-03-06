
var width, height;
var vectorPath01 = [];
var mouseVectors = [];
var mouseVectorsCount;
var mousePercent = [];
var mouseRev = [];
var mousePath = [];

function setup() {
  strokeCap(SQUARE);
  mouseVectorsCount = 0;
  for(var i = 0; i < 5; i++)
    mousePath[i] = createVector(mouseX, mouseY);
}


function draw()
{
  width = $(document).width();
  height = $(document).height();
  createCanvas(width, height);
  stroke(226,76,155);
  strokeWeight(1);
  noFill();
  
  update_mousePath();
  beginShape();
  for(var i = 0; i < mousePath.length; i++)
    vertex(mousePath[i].x, mousePath[i].y);
  endShape();
  rect(mousePath[4].x-2.5, mousePath[4].y-2.5, 5, 5);

  draw_edges();
  
  stroke('#912f63');

  if(mouseVectors.length > 0) {
    add_mouseVectors();
    draw_mouseVectors();
  }
}

function mousePressed() {
  var indx = mouseVectorsCount%35;
  mouseVectors[indx] = [];
  for(var i = 0; i < 4; i++) {
    mouseVectors[indx][i] = [];
    mouseVectors[indx][i][0] = createVector(mouseX, mouseY);
  }
  mousePercent[indx] = 0;
  mouseRev[indx] = false;
  mouseVectorsCount++;
}

function add_mouseVectors() {
  strokeWeight(1);
  for(var i = 0; i < mouseVectors.length; i++) {
    for(var j = 0; j < mouseVectors[i].length; j++) {
      var indx = mouseVectors[i][j].length;
      if(mouseVectors[i][j].length < 10) {
        if(random() > 0.5)
          mouseVectors[i][j][indx] = createVector(mouseVectors[i][j][indx-1].x + random(-40,40), mouseVectors[i][j][indx-1].y);
        else
          mouseVectors[i][j][indx] = createVector(mouseVectors[i][j][indx-1].x, mouseVectors[i][j][indx-1].y + random(-40,40));
      }
    }
    if(mousePercent[i] > 50)
      mouseRev[i] = true;
    if(mouseRev[i])
      mousePercent[i]--;
    else
      mousePercent[i]++;
  }
}

function draw_mouseVectors() {
  for(var i = 0; i < mouseVectors.length; i++) {
    for(var j = 0; j < mouseVectors[i].length; j++) {
      beginShape();
      for(var k = 0; k < mousePercent[i]; k++) {
        if(k < mouseVectors[i][j].length)
          vertex(mouseVectors[i][j][k].x, mouseVectors[i][j][k].y)
      }
      endShape();
    }
  }
}

function update_mousePath() {
  for(var i = 0; i < mousePath.length-1; i++)
    mousePath[i] = mousePath[i+1];
  difX = abs(mousePath[4].x - mouseX);
  difY = abs(mousePath[4].y - mouseY);
  if(difY > difX)
    mousePath[4] = createVector(mousePath[3].x, mouseY);
  else
    mousePath[4] = createVector(mouseX, mousePath[3].y);
}

function draw_edges() {
  var border_start = $('#border-start').position();
  var border_end = $('#border-end').position();
  height = border_end.top - border_start.top;
  if(width < 700) {
    var scl = 200;
    var spd = 3000;
    var count = 8;
    //height = 0.91*height;
  }
  else {
    var scl = 500;
    var spd = 1000;
    var count = 5;
    //height = 0.94*height;
  }
  var total = width+height+width+height;
  for(var i = 0; i < 8; i++) {
    var loc = ((total/spd)*frameCount+(total*i/count))%total;

    if(loc < width) {
      loc = map(loc, 0, width, 0, 0.797*width);
      rect(0.1*width+loc, border_start.top-4, 8, 8);
      if(loc < scl) {
        line(0.1*width+loc, border_start.top, 0.1*width, border_start.top);
        line(0.1*width, border_start.top, 0.1*width, border_start.top+(scl-loc));
      }
      else
        line(0.1*width+loc, border_start.top, 0.1*width+loc-scl, border_start.top);
    }

    else if(loc < width+height) {
      loc = map(loc, width, width+height, 0, height);
      rect(0.897*width, border_start.top+loc, 8, 8);
      if(loc < scl) {
        line(0.897*width+4, border_start.top+loc, 0.897*width+4, border_start.top);
        line(0.897*width+4, border_start.top, 0.897*width+4-(scl-loc), border_start.top);
      }
      else
        line(0.897*width+4, border_start.top+loc, 0.897*width+4, border_start.top+loc-scl);
    }

    else if(loc < 2*width+height) {
      loc = map(loc, width+height, 2*width+height, 0.797*width, 0);
      rect(0.1*width+loc, border_end.top-4, 8, 8);
      if(loc > 0.797*width-scl) {
        line(0.1*width+loc+8, border_end.top, 0.897*width+4, border_end.top);
        line(0.897*width+4, border_end.top, 0.897*width+4, border_end.top-(scl-(0.797*width-loc)));
      }
      else
        line(0.1*width+loc+8, border_end.top, 0.1*width+loc+8+scl, border_end.top);
    }

    else {
      loc = map(loc, 2*width+height, 2*width+2*height, height, 0);
      rect(0.1*width-4, border_start.top+loc-8, 8, 8);
      if(loc > height-scl) {
        line(0.1*width, border_start.top+loc, 0.1*width, border_end.top);
        line(0.1*width, border_end.top, 0.1*width+(scl-(height-loc)), border_end.top);
      }
      else
        line(0.1*width, border_start.top+loc, 0.1*width, border_start.top+loc+8+scl);
    }
  }
}