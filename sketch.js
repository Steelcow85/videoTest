var vid;
var ctrl=false;
function setup() {
  createCanvas(480,360);
  vid = createVideo("countdown_mp4_480.mp4");
  vid.loop();
  vid.hide();

}
function draw(){
  image(vid,0,0);
}
