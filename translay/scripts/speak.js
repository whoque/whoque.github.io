function loadSpeechSynthesis() {
  if ("speechSynthesis" in window) {
    speechSynthesis.onvoiceschanged = function () {
      var $voicelist = $("#voices");
      var $listenlist = $("#listen");
      if ($voicelist.find("option").length == 0) {
        speechSynthesis.getVoices().forEach(function (voice, index) {
          var $option = $("<option>")
            .val(index)
            // .html(voice.name + (voice.default ? " (default)" : ""));
            .html(voice.lang);
          $voicelist.append($option);
          var cloneList = $option.clone();
          $listenlist.append(cloneList);
        });
      }
    };
  } else {
    $("#modal1").openModal();
  }
}

function speakUp() {
  var text = $("#translateText").val();
  var msg = new SpeechSynthesisUtterance();
  var voices = speechSynthesis.getVoices();
  //   console.log(voices[$("#voices").val()]);
  msg.voice = voices[$("#voices").val()];
  msg.rate = 0.9; //$("#rate").val() / 10;
  msg.pitch = 1; //$("#pitch").val();
  msg.text = text;

  console.log();
  var par = document.createElement("p");
  var text = document.createTextNode(
    voices.toString() + " <<<>>> " + $("#voices").val()
  );
  par.appendChild(text);
  document.body.appendChild(par);

  msg.onend = function (e) {
    console.log("Finished in " + event.elapsedTime + " seconds.");
  };

  speechSynthesis.speak(msg);
}
