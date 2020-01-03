//Javasript Function that wraps everything///
var textInput = document.getElementById("plan1");
var saveButton = document.getElementById("Save-btn");
var msgDiv = document.getElementById("msg");

$(document).ready(function() {
    console.log(renderLastSave)

renderLastSave();


function displayMessage(type, message){
    msgDiv.innerHTML = message;
    msgDiv.setAttribute("class", type);
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
        var text = document.getElementById("plan1").value;
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

