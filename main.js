status = ""
video = ""
function preload(){
video = createVideo("video.mp4")
video.hide()
}

function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
}

function draw(){
    
    image(video, 0, 0, 600, 500)
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
}

function modelLoaded(){
    console.log("Kitty meowed!")
    status = true
    video.loop()
    video.speed(1)
    video.volume(0)
}