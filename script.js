const volumeSlider = document.querySelector("#volume");

const whiteKeys = document.querySelectorAll(".white-keys");
const blackKeys = document.querySelectorAll(".black-keys");

const whiteKeysArray = Array.from(whiteKeys);
const blackKeysArray = Array.from(blackKeys);

whiteKeysArray.forEach((e) => {
  const audio = new Audio(`tunes/${e.id}.wav`);
  e.addEventListener("click", () => {
    audio.volume = volumeSlider.value / 100;
    audio.play();
  });
});

blackKeysArray.forEach((e) => {
  const audio = new Audio(`tunes/${e.id}.wav`);
  e.addEventListener("click", () => {
    audio.volume = volumeSlider.value / 100;
    audio.play();
  });
});

document.addEventListener("keydown", (element) => {
  whiteKeysArray.forEach((e) => {
    if (e.id == element.key) {
      e.click();
      e.classList.add('active-white')
      setTimeout(()=>{
        e.classList.remove('active-white')
      }, 150)
    }
  });
  blackKeysArray.forEach((e) => {
    if (e.id == element.key) {
      e.click();
      e.classList.add('active-black')
      setTimeout(()=>{
        e.classList.remove('active-black')
      }, 150)
    }
  });
});
