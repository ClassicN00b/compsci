/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(245, 245, 220);
     for(i = 0;  i < width; i+= 20){ // this is a variable to make a new circle at +20 as long as it is less than the width
        for(j = 0; j < height; j+=20){ // this is a variable to change by 20 every new circle as long as it is less than the height
            fill(random(250),random(250),random(250))
            strokeWeight(random(8))
            stroke(random(250),random(250),random(250))
            ellipse (i, j, random(20),random(20))// this repeating loop creates a new circle at +20 y and +20 x
            
            
        }
    }

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);