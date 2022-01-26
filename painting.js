img = "";
var status = "";

function preload() {
    img = loadImage('paintings.jpg');
}

function setup() {
    canvas = createCanvas(640, 220);
    canvas.center();
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded() {
    console.log("model loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}
function draw() {
    image(img, 0, 0, 640, 220);
    
}
