//Javasript Function that wraps everything///
var textInput = $("#plan1");
var saveButton = $("#Save-btn");
var msgDiv = $("#msg");

$(document).ready(function() {
    console.log(renderLastSave)

renderLastSave();


function displayMessage(type, message){
    $("#msg").innerHTML = message;
    $("#msg").attr("class", type);
} 

function renderLastSave() { 
    var text = localStorage.getItem("plan");
    if(text === null) {
        return;
    }
    console.log(text)
    textInput.value = text;

}

    $("#Save-btn").click(function(event) {
        event.preventDefault();
        var text = $("#plan1").value;
        if (text === "") {
            displayMessage("text blank");
        } else {
            displayMessage("text is saved!");
            localStorage.setItem("plan", text);
            renderLastSave();
        }
        }
    
    );
});



////////////////-Code for Implementing the time////////////

var now = new Date(Date.now());
