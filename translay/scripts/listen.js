let recognition = {};
$(document).ready(function () {
  initSpeechRecogniser();
  loadSpeechSynthesis();
});

function initSpeechRecogniser() {
  window.SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;
  let finalTranscript = "";
  recognition = new window.SpeechRecognition();
  recognition.interimResults = true;
  recognition.maxAlternatives = 10;
  recognition.continuous = false;
  recognition.onresult = (event) => {
    let interimTranscript = "";
    for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
      let transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }
    document.getElementById("translateText").value = finalTranscript;
  };
  recognition.onend = () => {
    translateFunc();
  };
}

function listenNow() {
  initSpeechRecogniser();
  document.getElementById("translateText").value = "";
  recognition.start();
}

function updateLanguage() {
  let lang = $("#listen").value;
  recognition.lang = lang;
}
