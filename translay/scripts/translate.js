function translateFunc() {
  var inputval = document.getElementById("reconText").value;
  var voices = window.speechSynthesis.getVoices();
  var language = voices[$("#voices").val()].lang.split("-")[0];
  //   var language = document.getElementById("selectlanguage").value;
  console.log(language);
  //   console.log(inputval);
  //   console.log(language);
  //debugger;
  $.getJSON(
    "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170415T074852Z.f30908e49daf053e.1533851723fbfa2f832c94c5bf992441d9f76604&lang=" +
      language +
      "&text=" +
      inputval,
    function (json) {
      var allResponse = JSON.stringify(json);
      // console.log(allResponse);
      var JSONObject = JSON.parse(allResponse);
      var translatedText = JSONObject["text"];
      // document.querySelector("#transOutput").val = translatedText;
      document.getElementById("translateText").value = translatedText;
      console.log(translatedText);
      speakUp();
    }
  );
}
