statuss = "";
objName = "";

function setup(){
    canvas = createCanvas(550, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(550, 480);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
    objName = document.getElementById("inputObj").value;
}

function modelLoaded(){
    console.log("model loaded");
    statuss=true;
}

function draw(){
    image(video, 0, 0, 550, 480);
}