let btn = document.querySelector("#textButton");

let textInput = document.querySelector("#textInput");

let textOutput = document.querySelector("#textOutput");

let URL = "https://api.funtranslations.com/translate/dothraki.json";

function getURL(text){
    return URL + "?" + "text=" + text;
}

function errHandler(error){
    console.log("Error :",error);
    console.log("Some server problem");
};

function clickHandler(){
    console.log("Clicked");
    let text = textInput.value;
    
    fetch(getURL(text))
    .then(response => response.json())
    .then(json => textOutput.innerText = json.contents.translated)
    .catch((error)=>console.log("Server error"))
}


btn.addEventListener("click", clickHandler);