const finish = document.getElementById("final"); 
const currentScore = localStorage.getItem("currentScore"); //pulls in score from local storage

finish.innerHTML = currentScore; //replaces the element with the score from local storage

let body = document.getElementsByTagName('body')[0];
let medal = document.getElementById('medal');

/**
 * function to change background image based on score
 */
if(currentScore >= 9) {
    body.style.backgroundImage = 'url("../assets/images/medal-1.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "contain";
    medal.innerHTML = "Congratulations. You have won Gold!!!";

} else if (currentScore >= 6) { 
    body.style.backgroundImage = 'url("../assets/images/medal-2.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "contain";
    medal.innerHTML = "You have won Silver!!!";

} else {
    body.style.backgroundImage = 'url("../assets/images/medal-3.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "contain";
    medal.innerHTML = "Unlucky. You have won a Bronze medal!!!";
};