function translateFunc() {
  var inputval = document.getElementById("reconText").value;
  var voices = window.speechSynthesis.getVoices();
  var language = voices[$("#voices").val()].lang.split("-")[0];
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
      var par = document.createElement("p");
      var text = document.createTextNode(
        JSON.stringify(data) + " <<<>>>> " + language
      );
      par.appendChild(text);
      document.body.appendChild(par);

      var translatedText = data["text"];
      document.getElementById("translateText").value = translatedText;
      speakUp();
    });
}
