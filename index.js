const counterDisplay = document.querySelector("h3");
let counter = 0;
// =============Ajout de l"audio==============
const monAudio = () => {
  const audio = new Audio();
  audio.src = "./audio.mp3"
  audio.play();
}
const bubblemaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const PlusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * PlusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
    monAudio();
  });
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
// setInterval(() => {
//   bubblemaker();
// }, 300);
setInterval(bubblemaker, 1000);
