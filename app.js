let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  // Mode button event listeners
  setUpModeButtons();
  setUpSquares();

  reset();
}

resetButton.addEventListener("click", function(){
  reset();
});

function setUpSquares(){
  // Add click listeners to squares
squares.forEach(square => {
    // Add click listeners to squares
    square.addEventListener("click", function(){
    
      // Grab color of picked square
      let clickedColor = this.style.backgroundColor;
      // Compare color to pickedColor
        if (clickedColor === pickedColor) {
          messageDisplay.textContent = "Correct";
          resetButton.textContent = "Play Again?";
          changeColors(clickedColor);
          h1.style.background = clickedColor;
        } else {
          this.style.background = "#232323";
          messageDisplay.textContent = "Try Again";
        }
      });
})
}

function setUpModeButtons(){
  modeButtons.forEach(button => {
    button.addEventListener("click", function(){
          modeButtons[0].classList.remove("selected");
          modeButtons[1].classList.remove("selected");
          this.classList.add("selected");
          this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
          reset();
          });
  })
}

// Set all squares as one color
function changeColors(color) {
  // Loop through all squares
  squares.forEach(square => {
    //Change each color to match given color
    square.style.backgroundColor = color;
  })
}

// Choose random color from color array
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
    randomColors = [];
  // Repeat num times
    for(let i =0; i < num; i++){
      // Get random color and push into array
      randomColors.push(randomColor());
    }
  //return array
    return randomColors;
}

function randomColor() {
  // Pick a "red" from 0 - 255
   let r = Math.floor(Math.random() * 256)
  // Pick a "gree" from 0 - 255
   let g = Math.floor(Math.random() * 256)
  // Pick a "blue" from 0 - 255
   let b = Math.floor(Math.random() * 256)
  //  "rgb(r,g,b)"
   return "rgb(" + r + ", " + g + ", " + b + ")";
  }

// To simulate 6 sided dice
// Math.floor(Math.random() * 6 + 1)

function reset() {
  colors = generateRandomColors(numSquares);
  // Pick a new random color from array
    pickedColor = pickColor();
    
  // Change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

  // Change colors of squares on page
    for(let i = 0; i < squares.length; i++){  
      if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
      } else {
        squares[i].style.display = "none";
      }
    }

    h1.style.background = "steelblue";
}