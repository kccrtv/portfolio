var savrImg = document.getElementById('savr');
var boatImg = document.getElementById('boat');
var p5Img = document.getElementById('p5');
var bscImg = document.getElementById('bsc');

savrImg.onmouseout = function() {
  this.src = "/images/card-savr.png";
};
savrImg.onmouseover = function() {
  this.src = "/images/savr.gif";
};

boatImg.onmouseout = function() {
  this.src = "/images/card-boat.png";
};
boatImg.onmouseover = function() {
  this.src = "/images/boat.gif";
};

p5Img.onmouseout = function() {
  this.src = "/images/card-p5.png";
};
p5Img.onmouseover = function() {
  this.src = "/images/p5.gif";
};

bscImg.onmouseout = function() {
  this.src = "/images/card-bsc.png";
};
bscImg.onmouseover = function() {
  this.src = "/images/bsc.gif";
};
