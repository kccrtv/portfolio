var savrImg = document.getElementById('savr');
var boatImg = document.getElementById('boat');
var p5Img = document.getElementById('p5');
var bscImg = document.getElementById('bsc');

savrImg.onmouseout = function() {
  this.src = "card-savr.png";
};
savrImg.onmouseover = function() {
  this.src = "savr.gif";
};

boatImg.onmouseout = function() {
  this.src = "card-boat.png";
};
boatImg.onmouseover = function() {
  this.src = "boat.gif";
};

p5Img.onmouseout = function() {
  this.src = "card-p5.png";
};
p5Img.onmouseover = function() {
  this.src = "p5.gif";
};

bscImg.onmouseout = function() {
  this.src = "card-bsc.png";
};
bscImg.onmouseover = function() {
  this.src = "bsc.gif";
};
