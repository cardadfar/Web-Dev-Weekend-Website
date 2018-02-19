
var width, height;
var vectorPath01 = [];
var vectorPath02 = [];
var datePath01 = [];
var datePath02 = [];
var datePath03 = [];
var vectors = [];
var polyW = [];
var polyD = [];
var polyNegD = [];
var numFrames;
var mouseVectors = [];
var mouseVectorsCount;
var mousePercent = [];
var mouseRev = [];
var mousePath = [];

function setup() {
  for(var i = 0; i < 14; i++)
    vectors[i] = [];
  polyW[0] = [];
  polyW[1] = [];
  strokeCap(SQUARE);
  numFrames = 0;
  mouseVectorsCount = 0;
  for(var i = 0; i < 5; i++)
    mousePath[i] = createVector(mouseX, mouseY);
}

$( window ).resize(function() {
  for(var i = 0; i < vectors.length; i++)
    vectors[i] = [];
  numFrames = 0;
});


function draw()
{
  width = $(document).width();
  height = $(document).height();
  createCanvas(width, height);
  numFrames++;
  vectorPath01 = [];
  vectorPath02 = [];
  vectorPath03 = [];
  vectorPath04 = [];
  stroke(226,76,155);
  strokeWeight(1);
  noFill();

  var logo = $("#main-logo").position();
  var wth = 0.3*width;

  update_mousePath();
  beginShape();
  for(var i = 0; i < mousePath.length; i++)
    vertex(mousePath[i].x, mousePath[i].y);
  endShape();
  rect(mousePath[4].x-2.5, mousePath[4].y-2.5, 5, 5);

  draw_edges();


  vectors[0][0] = createVector(0.25*width, logo.top+0.04*width);
  vectors[1][0] = createVector(0.25*width, logo.top+0.14*width);
  vectors[2][0] = createVector(0.33*width, logo.top+0.02*width);
  vectors[3][0] = createVector(0.34*width, logo.top+0.14*width);
  vectors[4][0] = createVector(0.4*width, logo.top+0.01*width);

  vectors[5][0] = createVector(0.41*width, logo.top+0.14*width);
  vectors[6][0] = createVector(0.48*width, logo.top+0.02*width);
  vectors[7][0] = createVector(0.55*width, logo.top+0.04*width);
  vectors[8][0] = createVector(0.51*width, logo.top+0.12*width);

  vectors[9][0] = createVector(0.61*width, logo.top+0.03*width);
  vectors[10][0] = createVector(0.61*width, logo.top+0.14*width);
  vectors[11][0] = createVector(0.68*width, logo.top+0.02*width);
  vectors[12][0] = createVector(0.7*width, logo.top+0.14*width);
  vectors[13][0] = createVector(0.76*width, logo.top+0.01*width);

  polyW_reset(0, wth, 0.24*width, logo.top);
  polyD_reset(wth, 0.39*width, logo.top);
  polyW_reset(1, wth, 0.6*width, logo.top);
  polyNegD_reset(0.15*width, 0.445*width, logo.top + 0.04*width);
  //poly_draw();
  if(width > 700) 
    var maxFrames = 100
  else
    var maxFrames = 50
  if(numFrames < maxFrames) {
    for(var c = 0; c < vectors.length; c++)
      add_vectors(c, vectors[c].length, width, logo);
  }
  draw_vectors();
  strokeWeight(2);
  var t = map(numFrames, 0,maxFrames, 0, 1);
  if(t > 1)
    t = 1;
  t = easing(t);
  
  
  stroke('#00bff3');
  line(0.24*width, logo.top+0.155*width, 0.24*width+0.155*width*t, logo.top+0.155*width);
  stroke('#e24c9b');
  line(0.24*width+0.155*width*t, logo.top+0.155*width, 0.24*width+0.31*width*t, logo.top+0.155*width);
  stroke('#00bff3');
  line(0.24*width+0.31*width*t, logo.top+0.155*width, 0.24*width+0.465*width*t, logo.top+0.155*width);
  stroke('#912f63');

  if(mouseVectors.length > 0) {
    add_mouseVectors();
    draw_mouseVectors();
  }

  strokeWeight(1);
  //-----How To Attend-----
  var start = $("#line-pre-01").position();
  var lineObj01 = $("#line-obj-01").position();
  var lineObj02 = $("#line-obj-02").position();
  var lineObj03 = $("#line-obj-03").position();

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


  //-----Schedule-----
  start = $("#line-pre-02").position();
  var lineObj04 = $("#line-obj-04").position();
  y = start.top;
  h = lineObj04.top - start.top - 80;
  vectorPath01_reset(x,y,w,h);
  vectorPath01_draw(0);


  //-----Previous Talks-----
  start = $("#line-pre-03").position();
  var lineObj05 = $("#line-obj-05").position();
  var lineObj06 = $("#line-obj-06").position();
  var lineObj07 = $("#line-obj-07").position();
  var lineObj08 = $("#line-obj-08").position();
  var lineObj09 = $("#line-obj-09").position();

  y = start.top;
  h = lineObj05.top - start.top - 70;
  vectorPath01_reset(x,y,w,h);
  vectorPath01_draw(0);

  y += h;
  h = lineObj06.top - lineObj05.top;
  vectorPath01_reset(x,y,w,h);
  vectorPath01_draw(2);

  y += h;
  h = lineObj07.top - lineObj06.top;
  vectorPath01_reset(x,y,w,h);
  vectorPath01_draw(2);

  y += h;
  h = lineObj08.top - lineObj07.top;
  vectorPath01_reset(x,y,w,h);
  vectorPath01_draw(2);

  y += h;
  h = lineObj09.top - lineObj08.top;
  vectorPath01_reset(x,y,w,h);
  vectorPath01_draw(2);



  dateObj01 = $("#date-line-01").position();
  dateObj02 = $("#date-line-02").position();
  dateObj03 = $("#date-line-03").position();
  x = 0.2*width;
  y = dateObj01.top;
  datePath01_reset(x,y);
  datePath01_draw(0);
  x = 0.77*width;
  y = dateObj02.top - 20;
  datePath02_reset(x,y);
  datePath02_draw(0);
  x = x-0.57*width-20;
  y = dateObj03.top-40;
  datePath03_reset(x,y);
  datePath03_draw(0);

  dateObj04 = $("#date-line-04").position();
  dateObj05 = $("#date-line-05").position();
  dateObj06 = $("#date-line-06").position();
  x = 0.2*width;
  y = dateObj04.top;
  datePath01_reset(x,y);
  datePath01_draw(0);
  x = 0.77*width;
  y = dateObj05.top - 20;
  datePath02_reset(x,y);
  datePath02_draw(0);
  x = x-0.57*width-20;
  y = dateObj06.top-40;
  datePath03_reset(x,y);
  datePath03_draw(0);
}

function vectorPath01_reset(x, y, w, h) {
  vectorPath01[0] = createVector(x, y);
  vectorPath01[1] = createVector(x-w+20, y);
  vectorPath01[2] = createVector(x-w, y+20);
  vectorPath01[3] = createVector(x-w, y+20+h);
  vectorPath01[4] = createVector(x-0.96*w, y+40+h);
  vectorPath01[5] = createVector(x-0.93*w, y+40+h);
}

function vectorPath02_reset(x, y, w, h) {
  vectorPath02[0] = createVector(x, y+20);
  vectorPath02[1] = createVector(x+0.57*width, y+20);
  vectorPath02[2] = createVector(x+0.57*width+40, y+60);
  vectorPath02[3] = createVector(x+0.57*width+80, y+60);
}

function datePath01_reset(x, y) {
  datePath01[0] = createVector(x, y+20);
  datePath01[1] = createVector(x+0.53*width, y+20);
  datePath01[2] = createVector(x+0.58*width, y+20 + 0.035*width);
  datePath01[3] = createVector(x+0.63*width, y+20 + 0.035*width);
}


function datePath02_reset(x,y) {
  datePath02[0] = createVector(x, y);
  datePath02[1] = createVector(x-0.55*width, y);
  datePath02[2] = createVector(x-0.55*width, y+0.055*width);
  datePath02[3] = createVector(x-0.6*width, y+0.055*width);
}

function datePath03_reset(x,y) {
  datePath03[0] = createVector(x, y+20-0.02*width);
  datePath03[1] = createVector(x+7+0.02*width, y+20-0.02*width);
  datePath03[2] = createVector(x+10+0.05*width, y+30);
  datePath03[3] = createVector(x+35+0.52*width, y+30);
  datePath03[4] = createVector(x+35+0.52*width, y+20-0.02*width);
  datePath03[5] = createVector(x+30+0.55*width, y+20-0.02*width);
  datePath03[6] = createVector(x+30+0.57*width, y+20-0.035*width);
}

function vectorPath01_draw(start) {
  beginShape();
  for(var i = start; i < vectorPath01.length; i++)
    vertex(vectorPath01[i].x, vectorPath01[i].y);
  endShape();
  rect(vectorPath01[5].x, vectorPath01[5].y-5, 10, 10);
}

function vectorPath02_draw(start) {
  rect(vectorPath02[0].x-10, vectorPath02[0].y-5, 10, 10);
  beginShape();
  for(var i = start; i < vectorPath02.length; i++)
    vertex(vectorPath02[i].x, vectorPath02[i].y);
  endShape();
  rect(vectorPath02[3].x, vectorPath02[3].y-5, 10, 10);
}

function datePath01_draw(start) {
  strokeWeight(2);
  rect(datePath01[0].x-10, datePath01[0].y-5, 10, 10);
  beginShape();
  for(var i = start; i < datePath01.length; i++)
    vertex(datePath01[i].x, datePath01[i].y);
  endShape();
  rect(datePath01[3].x, datePath01[3].y-5,  10, 10);
}

function datePath02_draw(start) {
  strokeWeight(1);
  rect(datePath02[0].x, datePath02[0].y-5, 10, 10);
  beginShape();
  for(var i = start; i < datePath02.length; i++)
    vertex(datePath02[i].x, datePath02[i].y);
  endShape();
  rect(datePath02[3].x-10, datePath02[3].y-5,  10, 10);
}

function datePath03_draw(start) {
  strokeWeight(2);
  rect(datePath03[0].x-10, datePath03[0].y-5, 10, 10);
  beginShape();
  for(var i = start; i < datePath03.length; i++)
    vertex(datePath03[i].x, datePath03[i].y);
  endShape();
  rect(datePath03[6].x, datePath03[6].y-10, 10, 10);
}

function polyW_reset(c, wth, x, y) {
  var hgt = 0.5*wth;
  polyW[c][0] = createVector(x, y);
  polyW[c][1] = createVector(x, y+hgt);
  polyW[c][2] = createVector(x+0.05*wth, y+hgt);
  polyW[c][3] = createVector(x+0.28*wth, y+0.45*hgt);
  polyW[c][4] = createVector(x+0.28*wth, y+hgt);
  polyW[c][5] = createVector(x+0.35*wth, y+hgt);
  polyW[c][6] = createVector(x+0.65*wth, y);
  polyW[c][7] = createVector(x+0.53*wth, y);
  polyW[c][8] = createVector(x+0.38*wth, y+.5*hgt);
  polyW[c][9] = createVector(x+0.35*wth, y+.5*hgt);
  polyW[c][10] = createVector(x+0.35*wth, y);
  polyW[c][11] = createVector(x+0.275*wth, y);
  polyW[c][12] = createVector(x+0.1*wth, y+0.5*hgt);
  polyW[c][13] = createVector(x+0.1*wth, y);
  polyW[c][14] = createVector(x, y);
}

function polyD_reset(wth, x, y) {
  var hgt = 0.5*wth;
  polyD[0] = createVector(x+0.3*wth, y);
  polyD[1] = createVector(x, y+hgt);
  polyD[2] = createVector(x+0.3*wth, y+hgt);
  polyD[3] = createVector(x+0.4*wth, y+0.95*hgt);
  polyD[4] = createVector(x+0.5*wth, y+0.8*hgt);
  polyD[5] = createVector(x+0.6*wth, y+0.5*hgt);
  polyD[6] = createVector(x+0.63*wth, y+0.25*hgt);
  polyD[7] = createVector(x+0.6*wth, y+0.1*hgt);
  polyD[8] = createVector(x+0.55*wth, y+0.025*hgt);
  polyD[9] = createVector(x+0.5*wth, y);
  polyD[10] = createVector(x+0.3*wth, y);
}

function polyNegD_reset(wth, x, y) {
  var hgt = 0.5*wth;
  polyNegD[0] = createVector(x+0.3*wth, y);
  polyNegD[1] = createVector(x, y+hgt);
  polyNegD[2] = createVector(x+0.3*wth, y+hgt);
  polyNegD[3] = createVector(x+0.4*wth, y+0.95*hgt);
  polyNegD[4] = createVector(x+0.5*wth, y+0.8*hgt);
  polyNegD[5] = createVector(x+0.6*wth, y+0.5*hgt);
  polyNegD[6] = createVector(x+0.63*wth, y+0.25*hgt);
  polyNegD[7] = createVector(x+0.6*wth, y+0.1*hgt);
  polyNegD[8] = createVector(x+0.55*wth, y+0.025*hgt);
  polyNegD[9] = createVector(x+0.5*wth, y);
  polyNegD[10] = createVector(x+0.3*wth, y);
}


function poly_draw() {
  for(var c = 0; c < polyW.length; c++) {
    beginShape();
    for(var i = 0; i < polyW[c].length; i++)
      vertex(polyW[c][i].x, polyW[c][i].y);
    endShape();
  }
  beginShape();
  for(var i = 0; i < polyD.length; i++)
    vertex(polyD[i].x, polyD[i].y);
  endShape();
  beginShape();
  for(var i = 0; i < polyNegD.length; i++)
    vertex(polyNegD[i].x, polyNegD[i].y);
  endShape();
}


function add_vectors(c, i, width, logo) {
  var wth = document.body.scrollWidth;
  var scl = 0.08*wth;
  if(c < 5) {
    if(random() > 0.5)
      vectors[c][i] = createVector(random(-scl,scl) + vectors[c][i-1].x, vectors[c][i-1].y);
    else
      vectors[c][i] = createVector(vectors[c][i-1].x, random(-scl,scl) + vectors[c][i-1].y);
    in_bounds_W(c, i, 0);
  }

  else if(c > 8) {
    if(random() > 0.5)
      vectors[c][i] = createVector(random(-scl,scl) + vectors[c][i-1].x, vectors[c][i-1].y);
    else
      vectors[c][i] = createVector(vectors[c][i-1].x, random(-scl,scl) + vectors[c][i-1].y);
    in_bounds_W(c, i, 1);
  }

  else {
    if(random() > 0.5)
        vectors[c][i] = createVector(random(-scl,scl) + vectors[c][i-1].x, vectors[c][i-1].y);
    else
      vectors[c][i] = createVector(vectors[c][i-1].x, random(-scl,scl) + vectors[c][i-1].y);
    in_bounds_D(c, i);
  }
}

function in_bounds_W(c, i, t) {
  var hit = collidePointPoly(vectors[c][i].x, vectors[c][i].y, polyW[t]);
  if(hit == false)
      add_vectors(c, i);
  else {
    hit = collideLinePoly(vectors[c][i].x, vectors[c][i].y, vectors[c][i-1].x, vectors[c][i-1].y, polyW[t]);
    if(hit == true)
      add_vectors(c, i);
  }
}

function in_bounds_D(c, i) {
  var hit = collidePointPoly(vectors[c][i].x,vectors[c][i].y,polyD);
  if(hit == false) 
    add_vectors(c, i);
  else {
    hit = collidePointPoly(vectors[c][i].x,vectors[c][i].y,polyNegD);
    if(hit != false)
      add_vectors(c, i);
    else {
      hit = collideLinePoly(vectors[c][i].x, vectors[c][i].y, vectors[c][i-1].x, vectors[c][i-1].y, polyNegD);
      if(hit == true)
        add_vectors(c, i);
    }
  }
}

function draw_vectors() {
  for(var c = 0; c < vectors.length; c++) {
    stroke('#00bff3');
    if(c >= 5 && c < 9)
      stroke('#e24c9b');
    beginShape();
    for(var i = 0; i < vectors[c].length; i++)
      vertex(vectors[c][i].x, vectors[c][i].y);
    endShape();
  }
}

function easing(t) {
  return (t==1) ? 1 : (-pow(2, -10 * t) + 1);
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