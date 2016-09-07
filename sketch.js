var vid;
var ctrl=false;
function setup() {
  createCanvas(0,0);
  vid=createVideo("countdown_mpeg4.mp4");
  vid.loop();

}
function draw(){
  fill(255,0,0);
  ellipse(50,50,50);
}
