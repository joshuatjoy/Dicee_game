function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var imageName1 = "dice" + randomNumber1 + ".png";
    var imageSource1 = "images/" + imageName1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", imageSource1);
  
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imageName2 = "dice" + randomNumber2 + ".png";
    var imageSource2 = "images/" + imageName2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", imageSource2);
  
    var heading = document.querySelector("h1");
  
    if (randomNumber1 > randomNumber2) {
      heading.innerHTML = "🚩 Player 1 Wins!!";
    } else if (randomNumber1 < randomNumber2) {
      heading.innerHTML = "Player 2 Wins!!🚩";
    } else {
      heading.innerHTML = "🚩 Draw!! 🚩";
    }
  }
  