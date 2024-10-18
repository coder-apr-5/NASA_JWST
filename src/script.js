//SOUND TOGGLE
const backgroundSound = new Audio("./audios/Ground Theme.mp3");
let soundOn = false;
document
  .querySelector(".sound")
  .addEventListener("click", function(event) {
    if (soundOn === true) {
      this.style.opacity = 1;
      backgroundSound.pause();
      this.style.backgroundImage = "url('./icons/icon-mute-96.png')";
      soundOn = false;
    } else {
      this.style.opacity = 0.2;
      backgroundSound.play();
      backgroundSound.volume = 0.5;
      backgroundSound.loop = tru;
      this.style.backgroundImage = "url('./icons/icon-sound-96.png')";
    soundOn = true;
    }
});