//A variable to hold number of squares. This is important because without it, when in easy mode, it generates six new colors which is a major bug because this mode only takes three colors
let numOfSquares = 6; //It's set to six initially because the game automatically starts in hard mode
//Configure easy and hard buttons
let easyButton = document.getElementById("easyBtn");
let hardButton = document.getElementById("hardBtn");
//Configure a reset button
let resetButton = document.getElementById("resetButton");
//Get all square elements
let squares = document.querySelectorAll(".square");
//Get the field to display our win or lose text
let winLoseText = document.getElementById("winOrLose");
//Array which holds random colors for the six boxes at every point in time
let colorArray = pickColor(numOfSquares);
// Color that wins the game
let winColor = colorArray[randomNumber()];
//Set the text content of RGB to the value returned from the generateRandomColor function
let RGBText = document.getElementById("RGB");
RGBText.textContent = winColor;
//Get the game heading 
let gameHeader = document.querySelector("#gameHeading");


//Easy button functionalities
easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    //numOfSquares becomes 3
    numOfSquares = 3;
    //When clicked, generate three new colors
    colorArray = pickColor(numOfSquares);
    //Change the win color to be one of the colors in the three newly generated ones in here
    winColor = colorArray[randomNumber()];
    //change the RGBText content in the heading section
    RGBText.textContent = winColor;
    //Loop through the colorArray and squares to let the three upper squares take up the colors
    for (let i = 0; i<colorArray.length; i++) {
            squares[i].style.backgroundColor = colorArray[i];
    }
    //loop through the remaining squares and hide them
    for (let j = colorArray.length; j<squares.length; j++) {
        squares[j].style.display = "none";
    }
});

//Hard button functionality
hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    //set numOfSquares back to six
    numOfSquares = 6;
     //When clicked, generate numOfSquares new colors
    colorArray = pickColor(numOfSquares);
    //Change the win color to be one of the colors in the three newly generated ones in here
    winColor = colorArray[randomNumber()];
    //change the RGBText content in the heading section
    RGBText.textContent = winColor;
      //Loop through the colorArray and squares to let the three upper squares take up the colors
    for (let i = 0; i<colorArray.length; i++) {
        squares[i].style.backgroundColor = colorArray[i];
        squares[i].style.display = "block";
    }
});

//Setup the reset button's functionality
resetButton.addEventListener("click", function () {
    //Generate new random colors and save them in a new array
    let resetColorArray = pickColor(numOfSquares);
    
    //Change the RGB text to a random color of an index in the color array
    winColor = resetColorArray[randomNumber()];
    RGBText.textContent = winColor;
    
    //Change the colors of the six boxes, so they all have a unique color in the color array
    for (let i = 0; i<squares.length; i++) {
    squares[i].style.backgroundColor = resetColorArray[i];
    }
    
    //Let the win or lose text be empty
    winLoseText.textContent = "";
    
    //Change the game header color back to black
    gameHeader.style.backgroundColor = "black";
    
    //let the button text change back to New colors
    resetButton.textContent = "New colors";
});

//Write a code which sets the colors of the six squares to a random color
for (var i = 0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colorArray[i];
    squares[i].addEventListener("click", function () {
        //Grab color of the clicked square.. Note, since squares[i] has been used to grab the element, using it to access its properties may not work
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === winColor) {
           winLoseText.textContent = "Correct!!";
            //If the correct color is picked, let the button text change to try again?
            resetButton.textContent = "Play again?";
            //Change the header background color
            gameHeader.style.backgroundColor = clickedColor;
            //loop through the squares again and do something cos inside here, it cannot access the variable i
            for (let j=0; j<squares.length; j++) {
                squares[j].style.backgroundColor = clickedColor;
            }
        } else {
            this.style.backgroundColor = "black";
            winLoseText.textContent = "Wrong, Try again";
        }
    });
}

// Write a code that generates random rgb(r, b, g) values
function generateRandomColor() {
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

return "rgb(" + r + ", " + g + ", " + b + ")";
}


//Pushing the random colors into an array (ie) Making an array containing a num number of random colors
function pickColor (num) {
    let myArr = [];
    for (let j =0; j < num; j++) {
        myArr.push(generateRandomColor());
    }
    return myArr;
}

//Generate random numbers to search colorArray and select a win color
function randomNumber () {
    var randomNum = Math.floor(Math.random() * colorArray.length)
    return randomNum;
}

















   



