console.log("Script loaded successfully");

// Image load event listener
const image = document.querySelector("img");

image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});





// // Video event listener
// const video = document.querySelector("video");

// video.addEventListener("time", function (event) {
//   console.log("Time event:", event);
// });

// video.addEventListener("pause", function (event) {
//   console.log("Video paused!", event);
// });

// video.addEventListener("play", function (event) {
//   console.log("Video playing!", event);
// });

// video.addEventListener("ended", function (event) {
//   console.log("Video ended!", event);
// });


// Audio control buttons event listeners
// play button event listener
const audio = document.getElementById("radio");
const playButton = document.getElementById("play");
playButton.addEventListener("click", function (event) {
  audio.play();
  console.log("Playing", event);
});

// pause button event listener
const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", function (event) {
  audio.pause();
});

// stop button event listener
const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function (event) {
  audio.pause();
  audio.currentTime = 0;
});

// mute button event listener
const muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function (event) {
  audio.muted = true;
});

// unmute button event listener
const unmuteButton = document.getElementById("unmute");
unmuteButton.addEventListener("click", function (event) {
  audio.muted = false;
});

// skip forward button event listener
const skipForwardButton = document.getElementById("skipforward");
skipForwardButton.addEventListener("click", function (event) {
  audio.currentTime += 10; // skip forward 10 seconds
});

// skip backward button event listener
const skipBackwardButton = document.getElementById("skipbackward");
skipBackwardButton.addEventListener("click", function (event) {
  audio.currentTime -= 10; // skip backward 10 seconds
});

// Volume slider for video elements

const video = document.querySelector("video");
const slider = document.querySelector("input");
slider.addEventListener("change", function (event) {
  video.volume = event.target.value;
});

// add an event listener to the slider to update the video element’s volume when it is changed.

let player1;
let player2;

function onYouTubeIframeAPIReady() {
  player1 = new YT.Player("player1", {
    height: "576",
    width: "315",
    videoId: "G9NRzrx7m4U"
  });

  player2 = new YT.Player("player2", {
    height: "315",
    width: "560",
    videoId: "nqye02H_H6I"
  });
}

// Volume slider 1
document.getElementById("volume1").addEventListener("input", function () {
  if (player1) player1.setVolume(parseInt(this.value));
});

// Volume slider 2
document.getElementById("volume2").addEventListener("input", function () {
  if (player2) player2.setVolume(parseInt(this.value));
});

