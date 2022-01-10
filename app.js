var inputText = document.querySelector("textarea");
var btnTranslator = document.querySelector("#translate-btn");
var outputText = document.querySelector(".output-area");

serverUrl = "https://api.funtranslations.com/translate/minion.json";

function readText(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error is occured type error :" + error);
}

btnTranslator.addEventListener("click", function clickEventHandler() {

    var textInput = inputText.value;

    fetch(readText(textInput))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler)
})