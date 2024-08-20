const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const selection = document.getElementById("selection");
const result = document.getElementById("result");
let text = "";

let recognition = new webkitSpeechRecognition();
recognition.continuos = true;
recognition.interimResults = false;

languages.forEach(language => {
  const option = document.createElement("option");
  option.value = language.code;
  option.text = language.name;
  selection.add(option);
})

selection.addEventListener("change", () => {
  recognition.lang = selection.value;
})

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  stopBtn.style.display = "flex";
  recognition.lang = selection.value;
  recognition.start();
  recognition.onresult = function (event) {
    text = event.results[event.results.length - 1][0].transcript;
    result.textContent = text;
  }
})

stopBtn.addEventListener("click", ()=>{
  recognition.abort();
  stopBtn.style.display = "none";
  startBtn.style.display = "flex";
})

