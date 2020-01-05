//Javasript Function that wraps everything///
var textInput = $('plan');
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
    var plan = ["#plan1", "#plan2", "#plan3", "#plan4", "#plan5", "#plan6", "#plan7", "#plan8", "#plan9"];

    for (var i = 0; i < plan.length; i++) {
    
    
    
     var text = localStorage.getItem("");
    if(text && "") {
        return;
    }
    console.log("")
    textInput.value = "";

    

}}

    






$("button").on ("click", function() {
    var id = ($(this).attr("id"))
    event.preventDefault();
        var text = $( "." + id).val();
        if (text === "") {
            saveMessage("text entered");
        } else {
            displayMessage("text is saved!");
            localStorage.setItem(id, text);
            renderLastSave();
        }
        

});
});


function getInput() {
    window.userInput = document.getElementById('plan').value;
    console.log(plan)
}  


///////Code for the Time///////

var time = moment().format('MMMM Do YYYY, H:mm:ss');
console.log(time);

var past = moment().startOf('hour').fromNow();
console.log(past);
 
function pastEvent(){
 var colors = ["#plan1", "#plan2", "#plan3", "#plan4", "#plan5", "#plan6", "#plan7", "#plan8", "#plan9"];

for (var i = 0; i < colors.length; i++) {

    
    $(".plan").each((_index, element) => {
    
    var hour = moment($(element).text(), "HH:mm:ss");
    var time = moment();
    if (moment(time, "hour").isSame(hour, "hour")){
            $(element).parent().removeClass("available-time");
            $(element).parent().addClass("current-time");
            $("#text").css({"background-color": "green"});
    } else if ( moment(time).isAfter(hour)){
            $(element).parent().removeClass("current-time");
            $(element).parent().addClass("past-time");
            $("#text").css({"background-color": "red"});
    } else {
            $(element).parent().addClass("available-time");
    }
    })
} }
setInterval(pastEvent, 250);