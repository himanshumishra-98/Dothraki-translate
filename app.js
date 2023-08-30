let btn = document.querySelector("button");
let URL = "https://api.funtranslations.com/translate/dothraki.json";
let textArea = document.querySelector("#textInput");
let opDiv = document.querySelector("#textOutput");

function getURL(){
    return URL + "?" + "text=";
}

btn.addEventListener("click",()=>{
    console.log("Clicked");
    opDiv.innerText = textArea.value;
    console.log(opDiv.innerText);
    console.log(getURL());
})

