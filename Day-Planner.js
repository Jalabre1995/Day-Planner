//Javasript Function that wraps everyhting///
var plan = document.getElementById("plan");
var save = document.getElementById("Save-btn");

$(document).ready(function() {
    $("#click").click(function Save() {
        var key = plan.value;
        console.log(key);
        if(key&&value) {
            localStorage.setItem(key,value);
            location.reload();
        }
    })
    
   
})


$(document).ready(function() {
    $("#Save-btn").click(function Save() {
        var inputValue = document.getElementById("plan").value;
        var t =document.createTextNode("plan");
        appendChild(t);
        document.getElementById("plan").value = "";
    })
})

function checkTime(i) {
    if (i<10) {
        i="0" +i;
    }
    return i;
}

function startTime() {
    var today = new Date()
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s =checkTime(s);
    document.getElementsByClassName("box-container").innerHTML = h + ":"+ m + ":" + s;
    t = setTimeout(function() {
        startTime() 
        
    },500);
    
}
startTime()

