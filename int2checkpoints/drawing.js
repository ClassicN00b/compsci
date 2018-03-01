/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

setup = function(){
    bg = loadImage('../allanpics/school.jpg');
}

background(bg);


draw = function() {
   

};


body = function(){
    
    pushMatrix(); // body
    translate(200,200);
    noStroke()
    fill(255, 112, 77)//sweatercolor

    curve(50,500,-45,74,45,74,-50,500)//sweater
    
    noStroke();
    fill(255,255,255);
    //rect(-45,73,90,50);// removes the excess circle that we don't need
    stroke(0,0,0);
    strokeWeight(2.2);
    fill(255, 26, 26);
    bezier(-30,26,-20,51,20,51,30,26);//scarf
    fill(0,0,0);
    fill(255, 112, 77);
    curve(-20,0,-30,72.5,30,72.5,20,0);
    rect(5,45,1,35);//button line
    strokeWeight(3);
    point(-5,50);//button1
    point(-5,60);//button2
    point(-5,70);//button3
    noStroke();
    strokeWeight(1);
    popMatrix();
}
  
head = function(){  
    
    pushMatrix();
    translate(200,200)
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
 }
lefteye = function (){   
    
    pushMatrix(); // left eye
    strokeWeight(1)
    translate(200-13, 200-5);
    rotate(19.78);
    fill(250,250,250)
    stroke(0,0,0)
    ellipse(0,0,22,26)// left eye
    popMatrix();
}

leftpupil = function(){
    pushMatrix();
    translate(200-10,200-4)
    fill(0,0,0)
    ellipse(0,-3,5,5);
    noFill();
    popMatrix()
}

righteye = function(){
    
    pushMatrix(); //right eye
    translate(200+13, 200- 5)
    rotate(-19.78);
    stroke(0,0,0)
    fill(250,250,250)
    ellipse(0,0,22,26)//right eye
    popMatrix();
}

rightpupil = function(){
    pushMatrix()
    translate(200+10,200-4)
    fill(0,0,0)
    ellipse(0,-3,5,5)//pupil
    popMatrix()
}

mouth = function(){
    pushMatrix(); // mouth
    translate(200,200);
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
    popMatrix();
}
eyebrows = function(){
    pushMatrix(); //eyebrows
    translate(200,200);
    fill(0,0,0)
    rotate(PI/6);
    rect(-29,-14,15,1.5)//left eyebrow   
    rotate(PI/1.5)
    rect(-28,12,15,1.5)//right eyebrow
    noFill();
    popMatrix()
}
leftarm = function(){
    pushMatrix() // left arm
    strokeWeight(1.5)
    translate(200,200)
    rotate(0.35);
    fill(255, 112, 77)
    arc(-15,60,15,45,2,4.5)//left arm outside
    rotate(-.2)
    arc(-15,64,3,20,2,4.5)//left arm inside
    fill(255,0,0)
    ellipse(-25,75,20,20)//hand
    ellipse(-20,70,10,10)//thumb
    popMatrix()
}

rightarm = function(){    
    pushMatrix() //right arm
    strokeWeight(1.5)
    translate(200,200)
    rotate(-.5);
    fill(255, 112, 77)
    arc(5,60,15,45,5.2,7.6) //right arm outside
    rotate(0.2);
    arc(5,65,3,20,5.2,7.6)
    fill(255,0,0)
    ellipse(15,80,20,20)//hand
    ellipse(12,75,10,10)//thumb
    
    popMatrix()
    
    }
    
legs = function(){
    pushMatrix();
    translate(200,200)
    fill(77, 77, 255)//pantscolor
    // for (color1 = 0; color1)
    rect(-30,70,60,23)//pants
    fill(0,0,0)
    arc(-15,96,40,10,3.2,6.25)//left shoe
    arc(16,96,40,10,3.2,6.25)//right shoe
    popMatrix()
}
    
    
// legs();
// body();
// head();
// lefteye();
// righteye();
// mouth();
// eyebrows();
// arms();




var stan = 0;

mouseClicked = function(){
 
     if (stan == 0){
        legs();
     }
     else if (stan == 1){
         body();
     }
     else if (stan == 2){
         head();
     }
     else if (stan == 3){
         lefteye();
     }
     else if (stan == 4){
         righteye();
     }
     else if (stan == 5){
         mouth();
     }
     
     else if (stan == 6){
         leftpupil();
     }
      else if (stan == 7){
         rightpupil();
     }
     else if (stan == 8){
         eyebrows();
     }
     else if (stan == 9){
         leftarm();
     }
     else if (stan == 10){
         rightarm();
     }
     else if (stan == 11){
    
     }
     else if (stan == 11){
        
     }
     
     stan++;
}






// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);