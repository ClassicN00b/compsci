var puddingpops = document.getElementById("puddingpops");
var catwars = document.getElementById("catwars");
var text = document.getElementById("text");


puddingpops.addEventListener("click", function(){
        text.style.visibility = "visible"
        text.innerHTML = "People love pudding pops"   
    });
    
catwars.addEventListener("click", function(){
        text.style.visibility = "visible"
        text.innerHTML = " Cat Wars: The Devastating Consequences of a Cuddly Killer"   
    });

text.addEventListener("click", function(){
    text.style.visibility = "hidden"
})

    
    
   