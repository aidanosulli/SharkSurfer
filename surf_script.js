var surfer = document.getElementById("surfer");
var rock = document.getElementById("rock");
var shark = document.getElementById("shark");
var swimmer = document.getElementById("swimmer");
var score = document.getElementById("score");
var score_counter = 0; /* will be used to count the score */

var moveBy_right = 25;
var moveBy_left = 25;
var moveBy_up = 25;
var moveBy_down = 25;

/* begin make surfer moveable */
window.addEventListener('load', () => {
    surfer.style.position = 'absolute';
    surfer.style.left = 0;
    surfer.style.top = 0;
});

window.addEventListener('keyup', (e) => {
    var surferLeft = parseInt(window.getComputedStyle(surfer).getPropertyValue("left"));
    var surferTop = parseInt(window.getComputedStyle(surfer).getPropertyValue("top"));
    switch(e.key){ 
        case "ArrowLeft":
            moveBy_right = 25;
            if(surferLeft < 5){
                moveBy_left = 0;
            }
            surfer.style.left = parseInt(surfer.style.left) - moveBy_left + "px";
            surfer.style.backgroundImage = "url('Images/surfer_left_outline.png')"
            break;
        case "ArrowRight":
            moveBy_left = 25;
            if(surferLeft > 620){
                moveBy_right = 0;
            }
            surfer.style.left = parseInt(surfer.style.left) + moveBy_right + "px";
            surfer.style.backgroundImage = "url('Images/surfer_right_outline.png')";
            break;
        /*
        case "ArrowUp":
            moveBy_down = 25;
            if(surferTop < 430){
                moveBy_up = 0;
            }
            surfer.style.top = parseInt(surfer.style.top) - moveBy_up + "px";
            //surfer.style.backgroundImage = "url('Images/surfer_forward.png')";
            break;
        case "ArrowDown":
            moveBy_up = 25;
            if(surferTop > 610){
                moveBy_down = 0;
            }
            surfer.style.top = parseInt(surfer.style.top) + moveBy_down + "px";
            //surfer.style.backgroundImage = "url('Images/surfer_back.png')";
            break;
        */
    }
});
/*end make surfer moveable */

/*begin make obstacles come from random locations at top*/
rock.addEventListener('animationiteration', () => {
    var random = ((Math.random()*600)+50);
    rock.style.left = random + "px";
});

shark.addEventListener('animationiteration', () => {
    var random = ((Math.random()*600)+50);
    shark.style.left = random + "px";
});

swimmer.addEventListener('animationiteration', () => {
    var random = ((Math.random()*600)+50);
    swimmer.style.left = random + "px";
});

trash.addEventListener('animationiteration', () => {
    var side = Math.round(Math.random())
    if (side == 0){
        var random = ((Math.random()*200)+10);
        trash.style.left = random + "px";
    } else {
        var random = Math.floor(Math.random() * (680 - 480 + 1) + 480);
        trash.style.left = random + "px";
    }
});




/*create hit detection for shark within an interval */

setInterval(function(){
    var surferTop = parseInt(window.getComputedStyle(surfer).getPropertyValue("top"));
    var surferLeft = parseInt(window.getComputedStyle(surfer).getPropertyValue("left"));
    var sharkTop = parseInt(window.getComputedStyle(shark).getPropertyValue("top"));
    var sharkLeft = parseInt(window.getComputedStyle(shark).getPropertyValue("left"));
    var rockTop = parseInt(window.getComputedStyle(rock).getPropertyValue("top"));
    var rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    var swimmerTop = parseInt(window.getComputedStyle(swimmer).getPropertyValue("top"));
    var swimmerLeft = parseInt(window.getComputedStyle(swimmer).getPropertyValue("left"));
    var trashTop = parseInt(window.getComputedStyle(trash).getPropertyValue("top"));
    var trashLeft = parseInt(window.getComputedStyle(trash).getPropertyValue("left"));

    /* add score */
    score_counter = score_counter + 0.01;
    score.textContent = Math.round(score_counter);

    /*hit detection on shark */
    if (((surferLeft > sharkLeft) && (surferLeft < sharkLeft + 55) && (sharkTop > 558)) ||
    ((surferLeft + 55 > sharkLeft) && (surferLeft + 55 < sharkLeft + 55) && (sharkTop > 558))){
        alert("Game over, you hit a shark! If you hire Aidan, he will help you spot those sharks! \nFinal Score: " + Math.round(score_counter));
        score_counter = 0;
    }

    /*hit detection on rock */
    if (((surferLeft > rockLeft) && (surferLeft < rockLeft + 55) && (rockTop > 558)) ||
    ((surferLeft + 55 > rockLeft) && (surferLeft + 55 < rockLeft + 60) && (rockTop > 558))){
        alert("Game over, you hit a rock! If you hire Aidan, he will help you avoid being stuck in between a rock and a hard place.  \nFinal Score: " + Math.round(score_counter));
        score_counter = 0;
    }

    /* hit detection on swimmer */
    if (((surferLeft > swimmerLeft) && (surferLeft < swimmerLeft + 40) && (swimmerTop > 550)) ||
    ((surferLeft + 55 > swimmerLeft) && (surferLeft + 55 < swimmerLeft + 40) && (swimmerTop > 550))){
        alert("Game over, you got too close to a swimmer! If you hire Aidan, he would tell you to surf away from the people, not towards them, silly goose!  \nFinal Score: " + Math.round(score_counter));
        score_counter = 0;
    }

    /* hit detection on trash */
    if (((surferLeft > trashLeft) && (surferLeft < trashLeft + 35) && (trashTop > 570)) ||
    ((surferLeft + 55 > trashLeft) && (surferLeft + 55 < trashLeft + 35) && (trashTop > 570))){
        alert("Game over, you got contaminated by trash in the water. Let's go do a beach clean up, shall we.  \nFinal Score: " + Math.round(score_counter));
        score_counter = 0;
    }
 


},5);



/* hit detection between surfer and rock 
setInterval(function(){
    var surferTop = parseInt(window.getComputedStyle(surfer).getPropertyValue("top"));
    var surferLeft = parseInt(window.getComputedStyle(surfer).getPropertyValue("left"));
    var rockTop = parseInt(window.getComputedStyle(rock).getPropertyValue("top"));
    var rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));

    if (((surferLeft > rockLeft) && (surferLeft < rockLeft + 55) && (rockTop > 555)) ||
    ((surferLeft + 55 > rockLeft) && (surferLeft + 55 < rockLeft + 55) && (rockTop > 555))){
        alert("Game over, you hit a rock! If hire Aidan, he will help you avoid being stuck in between a rock and a hard place.  \n Final Score: ");
    }
},10);

hit detection between surfer and swimmer 
setInterval(function(){
    var surferTop = parseInt(window.getComputedStyle(surfer).getPropertyValue("top"));
    var surferLeft = parseInt(window.getComputedStyle(surfer).getPropertyValue("left"));
    var swimmerTop = parseInt(window.getComputedStyle(swimmer).getPropertyValue("top"));
    var swimmerLeft = parseInt(window.getComputedStyle(swimmer).getPropertyValue("left"));

    if (((surferLeft > swimmerLeft) && (surferLeft < swimmerLeft + 45) && (swimmerTop > 555)) ||
    ((surferLeft + 55 > swimmerLeft) && (surferLeft + 55 < swimmerLeft + 45) && (swimmerTop > 555))){
        alert("Game over, you got too close to a swimmer! If hire Aidan, he would tell you to surf away from the people, not towards them, silly goose!  \n Final Score: ");
    }
},10);

*/