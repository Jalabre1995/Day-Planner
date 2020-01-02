//Javasript Function that wraps everything///
var textInput = document.getElementById("plan");
var saveButton = document.getElementById("Save-btn");
var msgDiv = document.getElementById("msg");

$(document).ready(function() {

renderLastSave();

function displayMessage(type, message){
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderLastSave() {
    var text = localStorage.getItem("plan");
    if(text === null) {
        return;
    }
 textInput.textContent = textInput;

}

    $("#Save-btn").click(function(event) {
        event.preventDefault();
        var text = document.getElementById("plan").value;
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


