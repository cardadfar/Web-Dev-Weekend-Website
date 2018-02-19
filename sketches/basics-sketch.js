
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


  var start = $("#line-pre-01").position();
  var lineObj01 = $("#line-obj-01").position();
  var lineObj02 = $("#line-obj-02").position();
  var lineObj03 = $("#line-obj-03").position();
  var lineObj03_5 = $("#line-obj-03-5").position();

  if(width > 700) {
    var x = .725*width;
    var w = 0.475*width;
  }
  else {
    var x = .825*width;
    var w = 0.625*width;
  }
  var y = start.top;
  var h = lineObj01.top - start.top + 30;
  vectorPath01_reset(x,y,w,h);
  vectorPath01_draw(0);

  y += h;
  h = lineObj02.top - lineObj01.top - 30;
  vectorPath01_reset(x,y,w,h);
  vectorPath01_draw(2);


  y += h;
  h = lineObj03.top - lineObj02.top;
  vectorPath01_reset(x,y,w,h);
  vectorPath01_draw(2);

  y += h;
  h = lineObj03_5.top - lineObj03.top;
  vectorPath01_reset(x,y,w,h);
  vectorPath01_draw(2);

}

function vectorPath01_reset(x, y, w, h) {
  vectorPath01[0] = createVector(x, y);
  vectorPath01[1] = createVector(x-w+20, y);
  vectorPath01[2] = createVector(x-w, y+20);
  vectorPath01[3] = createVector(x-w, y+20+h);
  vectorPath01[4] = createVector(x-0.96*w, y+40+h);
  vectorPath01[5] = createVector(x-0.93*w, y+40+h);
}

function vectorPath01_draw(start) {
  beginShape();
  for(var i = start; i < vectorPath01.length; i++)
    vertex(vectorPath01[i].x, vectorPath01[i].y);
  endShape();
  rect(vectorPath01[5].x, vectorPath01[5].y-5, 10, 10);
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

