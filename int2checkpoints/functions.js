/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
   

}; 

head = function(){
    
    
    pushMatrix();
    translate(mouseX,mouseY)
    fill(255, 26, 26)
    ellipse(10,-40,20,20)
    stroke(0,0,0)
    strokeWeight(1)
    fill(255, 255, 204)
    ellipse(0,0,80,80); // head
    stroke(1);
    strokeWeight(4);
    stroke(255, 26, 26);
    arc(0,-2,80,46,3.5,6);//redheadband
    noFill()
            
            noFill();
            stroke(51, 119, 255)
            arc(0,0,80,80,3.5,6);//headband
            noFill();
            stroke(51, 119, 255)
            arc(0,0,80,72,3.5,6);//headband
            noFill();
            stroke(51, 119, 255)
            arc(0,0,80,65,3.5,6);//headband
            noFill();
            stroke(51, 119, 255)
            arc(0,-5,80,48,3.5,6);//headband
        
            
            noFill()
            strokeWeight(4);
            stroke(255, 26, 26);
            arc(0,-2,80,40,3.5,6);//headband
            noFill()
    popMatrix();
    
    pushMatrix();
    strokeWeight(1)
    translate(mouseX-13, mouseY-5);
    rotate(19.78);
    fill(250,250,250)
    stroke(0,0,0)
    ellipse(0,0,22,26)// left eye
    fill(0,0,0)
    ellipse(0,-3,5,5);
    noFill();
    popMatrix();
    
    
    pushMatrix();
    
    translate(mouseX+13, mouseY- 5)
    rotate(-19.78);
    stroke(0,0,0)
    fill(250,250,250)
    ellipse(0,0,22,26)//right eye
    fill(0,0,0)
    ellipse(0,-3,5,5)//pupil
       
    popMatrix();
    
    pushMatrix()
    translate(mouseX,mouseY);
    fill(250,250,250);
    triangle(-10,15,16,15,5,25);//teeth
    fill(0,0,0)
    rect(-3,14,0.3,5)//first tooth
    fill(0,0,0)
    rect(3,14,0.3,5)
    fill(0,0,0);
    fill(0,0,0)
    rect(10,14,0.3,5)
    triangle(-3,20,10,20,5,25);//mouf
    noFill();
    popMatrix()
    }
    
//mouseClicked(head());

mouseClicked = function(){
    head(mouseX, mouseY)
}

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);