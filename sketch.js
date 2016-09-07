var vid;
var ctrl=false;
function setup() {
  createCanvas(352,240);
  vid=createVideo("countdown_android_mpeg4.mp4");
  vid.loop();

}
function draw(){
  fill(255,0,0);
  ellipse(50,50,50);
}
