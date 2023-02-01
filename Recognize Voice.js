const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = localStorage.getItem("lang")

var synth = window.speechSynthesis;
// const speech = new SpeechSynthesisUtterance();

recognition.onstart = function () {
  console.log("voice recognition activated");
  document.querySelector("#stop_jarvis_btn").style.display = "flex"
};

// arr of window
let windowsB = []

recognition.onresult = function (event) {
  let current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
  transcript = transcript.toLowerCase();
  let userData = localStorage.getItem("jarvis_setup");
  console.log(transcript);
  // createMsg("usermsg", transcript);
  // commands
  // hi - hello

  if(localStorage.getItem("lang") === "en-US"){
    if (transcript.includes("hi jarvis")) {
      readOut("hello sir");
    }

    // change lang command

    if(transcript.includes("switch to hindi")){
      readOut("switching to hindi")
      speech_lang = "hi-IN"
      localStorage.setItem("lang", "hi-IN")
      stopingR = true
      recognition.stop()
      location.reload()
      readOutHindi("मैं तैयार हूँ, सर")
    }
