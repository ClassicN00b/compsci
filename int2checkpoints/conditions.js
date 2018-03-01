/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
    background(128, 255, 128);
    strokeWeight(2)
    ellipse(mouseX,mouseY,30,30)
    
    if (mouseX > 200) { // if its less than 200 then it switches color
        fill(20,198,58)
        
    }
    else{ // else, its changes back to the original color
        fill(80,120,200)
    }
    if (mouseY > 200){
        background();
        ellipse(mouseX,mouseY,10,10);
    }
    if (mouseX < 200 && mouseX > 100){
        ellipse(mouseX,mouseY,70,70)
    }
}; 



// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);