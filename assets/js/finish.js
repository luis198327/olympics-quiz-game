const finish = document.getElementById("final"); 
    const currentScore = localStorage.getItem("currentScore"); //pulls in score from local storage

    finish.innerHTML = currentScore; //replaces the element with the score from local storage
    