function preload(){
}
function setup(){
    canvas= createCanvas(400,400);
    canvas.center();
    
    video=createCapture(VIDEO);
    video.size(580,600);
    video.hide();
}
function draw(){
    image(video,0,0);
}