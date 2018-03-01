/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
    {fill(204, 255, 153);//color inside the circle1
    strokeWeight(5);//how thick the border of the circle1 is
    stroke(102, 140, 255);// the color of the border of the circle1
    ellipse(xPos,yPos,30,30);}//the circle1

    xPos = xPos+20;// a new circle is being drawn at the same x plus 20
    yPos = yPos+20;// a new circe is being drawn at the same y plus 20
    
    fill(204, 255, 153);//color inside the circle2
    strokeWeight(weight);//how thick the border of the circle2 is
    stroke(102, 140, 255);// the color of the border of the circle2
    ellipse(200,yPos,30,30);//the circle2
    
    fill(color1, 255, 153);//color inside the circle2
    strokeWeight(2);//how thick the border of the circle2 is
    stroke(102, 140, 255);// the color of the border of the circle2
    ellipse(300,yPos,30,30);//the circle2
    
    fill(color1, 200, color1);//color inside the circle2
    strokeWeight(2);//how thick the border of the circle2 is
    stroke(102, 140, 255);// the color of the border of the circle2
    ellipse(100,yPos,30,30);//the circle2
    
    color1 = color1 +20
    weight = weight+2

    bezier(30, 20,  80, 5,  80, 75,  30, 75);
};    

var xPos = 0;//variable
var yPos = 0;//variable
var weight=2;
var color1 = 0;
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
