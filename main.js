function preload() {

}

function setup() {
    canvas = createCanvas(640, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}

function draw(){
    image(video, 0, 0, 640, 480);
 
    fill("green");
    rect(30,369,555,10)
    rect(29,19,10,359)
    rect(583,25,10,359)
    rect(30, 25, 555,10)
    fill("red")
    circle(30, 375, 20);
    circle(30, 30, 20);
    circle(590, 30, 20);
    circle(590, 375, 20);

    tint(tint_color);

    
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}