//Javasript Function that wraps everyhting///
var plan = document.getElementById("plan");
var save = document.getElementById("click");

$(document).ready(function() {
    $("#click").click = function Save() {
        var key = plan.value;
        console.log(key);
        if(key&&value) {
            localStorage.setItem(key,value);
            location.reload();
        }
    }
    
   
})
