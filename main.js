function preload(){

}
function setup(){
    canvas = creatCanvas(300,300);
    canvas.center();
    video = creatCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.console.log('PoseNet Is Initialized');
}

function draw(){
    image(video,0,0,300,300);
}

function take_snapeshot(){
    save('myFilterImage.png');
}