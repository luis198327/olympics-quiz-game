const finish = document.getElementById("final"); 
const currentScore = localStorage.getItem("currentScore"); //pulls in score from local storage

finish.innerHTML = currentScore; //replaces the element with the score from local storage

let body = document.getElementsByTagName('body')[0];
let medal = document.getElementById('medal');

/**
 * function to change background image based on score
 */
 if(currentScore == 9 || currentScore == 10) {  
    body.style.backgroundImage = 'url("../assets/images/medal-1.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "50% 90%";
    body.style.backgroundSize = "10rem 20rem";
    medal.innerHTML = "Congratulations. You have won Gold!!!";

} else if (currentScore >= 6 && currentScore <= 8) { 
    body.style.backgroundImage = 'url("../assets/images/medal-2.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "50% 90%";
    body.style.backgroundSize = "10rem 20rem";
    medal.innerHTML = "You have won Silver!!!";

} else if (currentScore >= 1 && currentScore <= 5) {
    body.style.backgroundImage = 'url("../assets/images/medal-3.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "50% 90%";
    body.style.backgroundSize = "10rem 20rem";
    medal.innerHTML = "Unlucky. You have won a Bronze medal!!!";

} else if (currentScore == 0) {
    body.style.backgroundImage = 'url("../assets/images/false-start.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "50% 90%";
    body.style.backgroundSize = "30rem 15rem";
    medal.innerHTML = "False Start!!! Try again!!!";

} else {
    location.replace("/404error.html");
}

