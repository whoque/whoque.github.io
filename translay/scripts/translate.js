function translateFunc() {
  var inputval = document.getElementById("reconText").value;
  var voices = speechSynthesis.getVoices();
  var languageCode = voices[$("#voices").val()].lang;
  if (languageCode) var language = languageCode.split("-")[0];
  language = language.split("_")[0];
  let url =
    "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170415T074852Z.f30908e49daf053e.1533851723fbfa2f832c94c5bf992441d9f76604&lang=" +
    language +
    "&text=" +
    inputval;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var translatedText = data["text"];
      document.getElementById("translateText").value = translatedText;
      speakUp();
    });
}
