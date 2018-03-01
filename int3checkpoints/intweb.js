
//var list = ["A friend asks only for your time not your money.", "If you refuse to accept anything but the best, you very often get it.","Hard work pays off in the future, laziness pays off now.","Change can hurt, but it leads a path to something better.","You learn from your mistakes... You will learn a lot today.","If you have something good in your life, don't let it go!","Never give up. You're not a failure if you don't give up."];
// var display = document.getElementById("display");
// var button = document.getElementById("button");
var prompt = document.getElementById("prompt");
var choice1 = document.getElementById("choice1");
var act = document.getElementById("action");
var event2 = document.getElementById("event2");
var act2 = document.getElementById("action2");
var choice2 = document.getElementById("choice2");
var prompt2 = document.getElementById("prompt2");
var event3 = document.getElementById("event3");
var act3 = document.getElementById("action3");
var choice3 = document.getElementById("choice3");
var prompt3 = document.getElementById("prompt3");
var weapontext = document.getElementById("weapon");
var medkittext = document.getElementById("medkit");
var img = document.getElementById("img");

// this is the parts of the story that will be changed

var partner = 0;
var injury = 0;
var medkit = 1;
var weapon = 0;



//hides the text of the next choices so that they look chronological
event2.style.visibility = "hidden";
event3.style.visibility = "hidden";

// displays weapon. I made the choice binary since there only two weapons that you can get

if (weapon == 1){
    weapontext.innerHTML = "Machete";
}
if (weapon ==0){
    weapontext.innerHTML = "Knife";
}


medkittext.innerHTML = medkit; // displays the inital medkit count

//this is the first event. it listens for the user to press the button to run
// the way i set this up is that there are four options but the user is given 2 choices twice. This is to shorten the amount of code and it works perfectly.

act.addEventListener("click",function(){
    
    img.innerHTML = "<img src=\"tip2.jpeg\">";
    
    if (choice1.value === "attack"){
        prompt.innerHTML = "The man was hurt. He had no weapon on him. He was most likely asking for help.";
        event2.style.visibility = "visible"; // this makes the second prompt available. I hid the second prompt so that it doesn't look out of place
    }
    
    if (choice1.value ==="talk"){
        prompt.innerHTML = "You walk towards the man. You notice that he is hurt, you have a medkit that you could use. Do you use it?(yes/no)" ;
    }
    
    if (choice1.value ==="yes"){
        prompt.innerHTML = "The man thanks you for helping him. He was fighting looters and lost everything. He will now follow you.";
        event2.style.visibility = "visible";
        partner = partner +1;
        medkit = medkit-1;
        medkittext.innerHTML = medkit;
        
    }
    if(choice1.value ==="no"){
        prompt.innerHTML = "The man gets aggravated. He gets so angry that he starts swinging at you. Out of pure instict, you tackle him down with full force and land a few punches. You killed the strange man";
        event2.style.visibility = "visible";
    }
});

// this is the second event. This is where people have a partner or not. This is also where people have an injury or not.  
// this also changes the third prompt. Depending on what they choose, the third prompt will change.
act2.addEventListener("click",function(){
    
    img.innerHTML = "<img src=\"tip2.jpeg\">";
    
    if (choice2.value === "yes" && partner == 1){ // this says that if the user said yes and the user has a partner, then ...
        prompt2.innerHTML = "You and your new partner head to the nearest house and set up camp. You both take turns taking watch. You find a bat and a machete to defend youself with";
        prompt3.innerHTML = "Its daytime now. You both feel rested and ready to start the day. You eat a meal together and head toward the sanctuary city. Upon going to the city, you come upon a heard of the undead. there are only a few zombies. They are the only thing separating you from the sanctuary city. With the help of your partner, you can take them on easily. Do you want to go through them or around?(through/around)";
        event3.style.visibility ="visible";
        weapon = weapon + 1 ;// this will change the name of the weapon from knife to machete
        weapontext.innerHTML = "Machete";
    }
    if (choice2.value ==="yes" && partner == 0){
        prompt2.innerHTML = "You take shelter in a small but discrete box inside an alley";
        prompt3.innerHTML = "Its daytime now. You feel tired and your back hurts from being squished in the box all night. You eat a meal and head toward the sanctuary city. Upon going to the city, you come upon a heard of the undead. There are only a few zombies. They are the only thing separating you from the Sanctuary City. Do you want to go through them or around?(through/around)";
        event3.style.visibility ="visible";
    }
    
    if (choice2.value ==="no" && partner == 0){
        prompt2.innerHTML = "You decided to pack you things and leave. You start heading towards the sanctuary in the night. Without any vision, you trip and sprain your ankle. You crawl towards the closest safe space. However, you have a Medkit that you didnt use, you decide that this is a good time to use it"; 
        medkit = medkit - 1;
        medkittext.innerHTML = medkit;
        event3.style.visibility ="visible";
        prompt3.innerHTML = "Its daytime now. You feel tired but your ankle is better now. You eat a meal and head toward the sanctuary city. Upon going to the city, you come upon a heard of the undead. There are only a few zombies. They are the only thing separating you from the Sanctuary City. Do you want to go through them or around?(through/around)";
    }
    if (choice2.value ==="no" && partner == 1){
        prompt2.innerHTML = "You decided to pack you things and leave. You start heading towards the sanctuary in the night. Without any vision, you trip and sprain your ankle. Your partner picks you up and carries you to the nearest house. The house has a machete and a bat that you could use. You guys wait out the rest of the night"; 
        injury = injury+1;
        prompt3.innerHTML = "Its daytime now. You both feel tired. You eat a meal together and head toward the sanctuary city. Upon going to the city, you come upon a heard of the undead. There are only a few zombies separating you from the sanctuary. Do you want to go through them or around?(through/around)";
        event3.style.visibility ="visible";
        weapon = weapon + 1; 
        weapontext.innerHTML = "Machete";
    }
    
    
});

act3.addEventListener("click",function() { // this is the final part. This is where we get the ending. there are multiple endings to this. they are all based on what the user choose in the beginning
    
    img.innerHTML = "<img src=\"tip3.jpg\">";
    
   if (choice3.value == "through" && partner == 1 ){
       prompt3.innerHTML = "You decide to fight the few zombies. You pull out your machete and begin slicing. Your partner follows you with a bat. It all starts going well. Suddenly, you hear a scream. Your partner was bitten. You know there isn't anything that you could to save him. You grab your machete and push through the zombies to get to the sanctuary city. You left your partner to die but you saved yourself";
   }
   if (choice3.value == "around" && partner == 1 ){
       prompt3.innerHTML = "You decide to go around the heard to avoid attention. This works perfectly. You both reach the sanctuary and get saved";
   }
    if (choice3.value == "through" && injury == 1 ){
       prompt3.innerHTML = "You decide to go through them despite your injury. This was a terrible idea. You cannot stand properly and the undead took advantage of that. You were bit and the dead now start piling on top of you. You feel every bite and glace towards you partner who was now running towards the sanctuary city. He left you to die in pain and saved himself. So much for saving his life.";
        
    }
   if(choice3.value == "through"&& partner == 0){
       prompt3.innerHTML = "You decide to take them on by yourself. This was a bad idea. You take out your knife to attack but they quickly overpower you. You are now piled on by the undead. You feel every bite until you finally become one of them";
   }
   
   if (choice3.value == "around" && partner == 0){
       prompt3.innerHTML = "You go around the heard to take the safer option. Upon going around, you run into a crawler. The crawler bites you 3 inches above your ankle. You kill it before it can do anymore harm. You see the sanctuary from here. You can either go to the sanctuary or live the rest of the time you have outside. will you go to the sanctuary? ";
   }
    if (choice3.value == "yes"){
        prompt3.innerHTML = "You reach the sanctuary city. The people there are armed and have their guns pointed at you. They give you a set of instructions and you follow them willingly. They now begin to check your body for any bites. Luckily the zombie bit you in a place somewhat hidden. You are given access to the sanctuary city. In a couple of hours, you end up turning into one of the undead and destroy humanity's last chance of survival.";
    }
    if (choice3.value == "no"){
        prompt3.innerHTML = "You are unselfish. You knew that going to the sactuary city will put all those people at risk. You decide to end your days watching the sunset before grabbing the knife and cutting your throat. You have killed yourself to prevent being one of them.";
    }
    
    
});




