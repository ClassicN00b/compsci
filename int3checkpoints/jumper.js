var button = document.getElementById("button")
var reload = function reload(){
    location.reload(true);
}
var ad1 = document.getElementById("ad1")
var Xad1 = document.getElementById("Xad1")
var Xad2 = document.getElementById("Xad2")
var Xad3 = document.getElementById("Xad3")

Xad1.addEventListener("click",function(){
    document.querySelector(".ads").classList.add("closed");
})

Xad2.addEventListener("click",function(){
    document.querySelector(".ad2").classList.add("closed");
})

Xad3.addEventListener("click",function(){
    document.querySelector(".ad3").classList.add("closed");
})



lightBoxClose = function() {
  document.querySelector(".lightbox").classList.add("closed");
  setTimeout(reload,3000)
  
}








button.style.position = "absolute"
button.addEventListener("mousemove", function(){
    button.style.top = Math.random()*400 + "px"
    button.style.left = Math.random()*700 + "px"
})

