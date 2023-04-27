function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);

}

function draw(){
image(video,0,0,300,300);
}
 function takesnapshot(){
 save("MySelfie.png");
 }

 function modelloaded(){
    console.log("model.loaded");
 }

 function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);

    }
 }