var voice = {
    // (A) INIT VOICE COMMAND
    wrap : null, // HTML DEMO <DIV> WRAPPER
    btn : null, // HTML DEMO BUTTON
    recog : null, // SPEECH RECOGNITION OBJECT
    init : () => {
      // (A1) GET HTML ELEMENTS
      voice.wrap = document.getElementById("vwrap");
      voice.btn = document.getElementById("vbtn");
   
      // (A2) GET MIC ACCESS PERMISSION
      navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        // (A3) SPEECH RECOGNITION OBJECT & SETTINGS
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        voice.recog = new SpeechRecognition();
        voice.recog.lang = "en-US";
        voice.recog.continuous = false;
        voice.recog.interimResults = false;
   
        // (A4) ON SPEECH RECOGNITION - RUN CORRESPONDING COMMAND
        voice.recog.onresult = (evt) => {
          let said = evt.results[0][0].transcript.toLowerCase();
          if (cmd[said]) { cmd[said](); }
          else { said += " (command not found)"; }
          voice.wrap.innerHTML = said;
          voice.stop();
        };
        const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
req = $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${}&callback=?`);
        // (A5) ON SPEECH RECOGNITION ERROR
        voice.recog.onerror = (err) => { console.error(evt); };
   
        // (A6) READY!
        voice.btn.disabled = false;
        voice.stop();
      })
      .catch((err) => {
        console.error(err);
        voice.wrap.innerHTML = "Please enable access and attach a microphone.";
      });
    },
   
    // (B) START SPEECH RECOGNITION
    start : () => {
      voice.recog.start();
      voice.btn.onclick = voice.stop;
      voice.btn.value = "Speak Now Or Click Again To Cancel";
    },
   
    // (C) STOP/CANCEL SPEECH RECOGNITION
    stop : () => {
      voice.recog.stop();
      voice.btn.onclick = voice.start;
      voice.btn.value = "Press To Speak";
    }
  };
  window.addEventListener("DOMContentLoaded", voice.init);
  

  // (D) COMMANDS LIST
var cmd = {
    "power on" : () => {
      voice.wrap.style.backgroundColor = "yellow";
      voice.wrap.style.color = "black";
    },
   
    "power off" : () => {
      voice.wrap.style.backgroundColor = "black";
      voice.wrap.style.color = "white";
    },
   
    "say hello" : () => {
      alert("Hello World!");
    },
    
    "Open Youtube" : () =>{
        window.open("www.youtube.com");
    },

    "humidity":()=>{
        alert("Today's Humidity is "+Humidity);
    },

    "tEMPERATURE TODAY " : () =>{
        console.log("tODAY'S TEMPERAATURE IS 45C");
    },

  };