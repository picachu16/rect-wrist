noseX=0;
noseY=0;
diference=0;
diference1=0;
rightWristX=0;
leftWristX=0;
rightWristY=0;
leftWristY=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,110);
    video=createCapture(VIDEO);
    video.size(550,500);
    posenet=ml5.poseNet(video,modelLoded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background("#ffffff");
    fill("aqua");
    stroke("aqua");
    rect(noseX,noseY,diference,diference1);
}
function modelLoded(){
    console.log('poseNet initialised');
}
function gotPoses(results){
if(results.length>0){   
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    leftWristY=results[0].pose.leftWrist.y;
    diference=floor(leftWristX-rightWristX);
    diference1=floor(leftWristY-rightWristY);
}
}