console.log("Script loaded successfully");

// Image load event listener
const image = document.querySelector("img");

image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

// Audio play event listener
const audio = document.querySelector("audio");

audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});

// Video pause event listener
const video = document.querySelector("video");

video.addEventListener("time", function (event) {
  console.log("Time event:", event);
});

video.addEventListener("pause", function (event) {
  console.log("Video paused!", event);
});

video.addEventListener("play", function (event) {
  console.log("Video playing!", event);
});

video.addEventListener("ended", function (event) {
  console.log("Video ended!", event);
});

const audio1 = document.querySelector("audio");
const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  audio1.play();
});

// pause button event listener
const pauseButton = document.querySelectorAll("button")[1];
pauseButton.addEventListener("click", function (event) {
  audio1.pause();
});

// stop button event listener
const stopButton = document.querySelectorAll("button")[2];
stopButton.addEventListener("click", function (event) {
  audio1.pause();
  audio1.currentTime = 0;
});

// add an event listener to the slider to update the audio element’s volume when it is changed.




// const audio2 = document.querySelector("iframe");
// const slider = document.querySelector("input");
// slider.addEventListener("change", function (event) {
//   audio2.volume = event.target.value;
// });