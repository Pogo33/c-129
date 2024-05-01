m1="";
m2="";
song_name="";

RightWristX=0;
LeftWristX=0;
LeftWristY=0;
RightWristY=0;

function preload(){
m1=loadSound("music.mp3");
m2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,300);
     canvas.center();
    

     video = createCapture(VIDEO);
     video.hide();

     poseNet=poseNet.ml5('video',modelLoaded);

}
function modelLoaded(){
  console.log('Posenet model is initalized');
}

function gotPoses(results){

  if (results.length>0)
  {
      scoreRightWrist=results[0].pose.keypoints[10].score;
      scoreLeftWrist=results[0].pose.keypoints[9].score;
      console.log("scoreRightWrist = " +scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

      RightWristX=results[0].pose.RightWrist.x;
      RightWristY=results[0].pose.RightWrist.y;
      console.log("rightWristX = " + RightWristX + "rightWristY = " + RightWristY);

      LeftWristX=results[0].pose.LeftWrist.x;
      LeftWristY=results[0].pose.LeftWrist.y;
      console.log("leftWristX = " + LeftWristX + "lefttWristY = " + LeftWristY);


  }
}

function draw(){
    
  image(video,0,0,600,530);

  fill("#00ff00");
  stroke("#ff0000");

  song_name = m1.isPlaying();
  console.log(song_name);

  if(scoreleftWrist > 0.2){
      circle(leftWrist_x,leftWrist_y,20);
      m2.stop();
      if(song_name == false){
          m1.play();
      }
      else{
          console.log("Song Name: Peter Pan Song");
          document.getElementById("song_id").innerHTML = "Song Name: Peter Pan Song";
      }
  }
}


