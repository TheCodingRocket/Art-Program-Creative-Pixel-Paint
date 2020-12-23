let bm;
let wm;
let cm;
let cb;
let fs;
let ys;
let es;
let rb;
let pc;
let ac;
let ti;
let bc;
let dm;
let gb;
let po;
let cl;
let br;
let ty;
let nr;
let am;
let ab;
let ay;
let aq;
let qw;
let tq;
let pu;
let to;
let yt;
let tr;
let ui;
// let qw;
// let dc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 100, 100);
  background(255);
  
  bm = createButton('Dark Mode');
  wm = createButton('Light mode');
  cm = createButton('Erase');
  cb = createButton('Pink');
  fs = createButton('Smoothen');
  ys = createButton('Cubes');
  es = createButton('RedVelvet');
  rb = createButton('Lime');
  pc = createButton('MagicRed');
  ac = createButton('Aqua');
  ti = createButton('Tools = ');
  bc = createButton('Blue');
  dm = createButton('Dark');
  gb = createButton('Backgrounds =');
  po = createButton('Purple');
  cl = createButton('GoldLine');
  br = createButton('RedLine');
  ty = createButton('BlueLine');
  nr = createButton('NormiRed');
  am = createButton('Amaranth');
  ab = createButton('Amber');
  ay = createButton('Amethyst');
  aq = createButton('Apricot');
  qw = createButton('White');
  tw = createButton('DarkLine');
  pu = createButton('AquaLine');
  to = createButton('AzureLine');
  yt = createButton('Azure');
  tr = createButton('Blue');
  ui = createButton('BlueLine');
  // qw = createButton('To draw please press your Mouse');
  // dc = createButton('DoodleMode');
  
  wm.position(73, 0);
  bm.position(156, 0);
  cm.position(238, 0);
  
  // pink
  cb.position(398, 25);
  
  // 217, 0
  fs.position(392, 0);
  ys.position(290, 0);
  
  // red velvet
  es.position(320, 25);
  rb.position(346, 0);
  pc.position(106, 25);
  ac.position(183, 25);
  ti.position(0, 0);
  // qw.position(527, 0);
  // dc.position(585, 0);
  bc.position(231, 25);
  dm.position(275, 25);
 
  // background
  gb.position(0, 25);
  po.position(441, 25);
  cl.position(470, 0);
  br.position(540, 0);
  ty.position(607, 0);
  nr.position(497, 25);
  am.position(574, 25);
  ab.position(649, 25);
  ay.position(705, 25);
  aq.position(778, 25);
  qw.position(837, 25);
  tw.position(676, 0);
  pu.position(745, 0);
  to.position(817, 0);
  yt.position(888, 25);
  tr.position(940, 25);
  ui.position(894, 0);
  
  wm.mousePressed(w);
  bm.mousePressed(b);
  cm.mousePressed(c);
  cb.mousePressed(a);
  fs.mousePressed(f);
  ys.mousePressed(y);
  es.mousePressed(s);
  rb.mousePressed(k);
  pc.mousePressed(p);
  ac.mousePressed(q);
  bc.mousePressed(l);
  dm.mousePressed(fr);
  po.mousePressed(i);
  cl.mousePressed(g);
  br.mousePressed(lo)
  ty.mousePressed(bu);
  nr.mousePressed(re);
  am.mousePressed(ar);
  ab.mousePressed(ae);
  ay.mousePressed(aw);
  aq.mousePressed(we);
  qw.mousePressed(wei);
  tw.mousePressed(te);
  pu.mousePressed(pi);
  to.mousePressed(Az);
  yt.mousePressed(tir);
  tr.mousePressed(ter);
  ui.mousePressed(qww);
  // dc.mousePressed(d)
}

function w() { 
  fill(255);
}

function b() {
  fill(100, 100, 100);
}

function c() {
  clear();
  background(255);
}

function a() {
  background('#fae');
}

function f() {
  noStroke(); 
}

function y() {
  stroke(0);
}

function s() {
  background(255, 100, 100);
  function mousePressed() {}
}

function k() {
  var xColour = map(mouseX, 0, 400, 0, 255);
  var yColour = map(mouseY, 0, 400, 0, 255);
  fill(200, xColour, yColour);
  rect(mouseX, mouseY, 15, 15);
}

function p() {
  background('rgb(100%,0%,10%)');
}

function q() {
  background('aqua');
}

function l() {
  colorMode(HSB);
background(255, 204, 100);
}

function fr() {
  background(0);
}

function i() {
background(100, 0, 100)
}

function g() {
  fill('gold')
}

function lo() {
  fill('red');
}

function bu() {
  fill('Blue');
}

function re() {
  background('red');
}

function ar() {
  background(229, 43, 80);
}

function ae() {
  background(225, 191, 0);
}

function aw() {
  background(153, 102, 204);
}

function we() {
  background(251, 206, 177)
}

function wei() {
  background(255);
}

function te() {
  fill(0);
}

function pi() {
  fill('aqua');
}

function Az() {
  fill(0, 127, 255)
}

function tir() {
  background(0, 127, 255);
}

function ter() {
  background(0, 0, 255);
}

function qww() {
  fill(0, 0, 255);
}

function draw() {
 if (mouseIsPressed) 
  rect(mouseX, mouseY, 13, 13);
  
}
