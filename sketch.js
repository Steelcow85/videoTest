var vid;
var ctrl=false;
function setup() {
  createCanvas(960,540);
  vid=createVideo("comp_1.mp4");
  vid.loop();
  vid.hide();
}



function draw() {

    image(vid,0,0);

}
