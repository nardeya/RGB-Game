var numSquares = 6;
var colors = randColorArr(numSquares);
var squares = document.querySelectorAll(".square");
var titleColor = document.getElementById("titleColor");
var pickedcolor = pickColor();
var heading = document.querySelector("h1");
var message = document.getElementById("message");
var reset = document.getElementById("resetbtn");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
titleColor.textContent = pickedcolor;


easyBtn.addEventListener("click", function(){
	heading.style.backgroundColor = "steelblue";
	message.textContent = "";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = randColorArr(numSquares);
	pickedcolor = pickColor();
	console.log(pickedcolor);
	titleColor.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

})

hardBtn.addEventListener("click", function(){
	heading.style.backgroundColor = "steelblue";
	message.textContent = "";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = randColorArr(numSquares);
	pickedcolor = pickColor();
	titleColor.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];	
		squares[i].style.display = "block";	
	}


})


for(var i = 0; i < squares.length; i++){
	//add color to each square
	squares[i].style.backgroundColor = colors[i];

	//add click listener for each square
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor == pickedcolor){
			message.textContent = "Well Done!";
			reset.textContent = "Play Again?";
			changeColors();
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	})
}



//RESET COLORS
reset.addEventListener("click", function(){
	heading.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	message.textContent = "";
	colors = randColorArr(numSquares);
	pickedcolor = pickColor();
	titleColor.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

}})




//CHANGE ALL COLORS TO CORRECT ANSWER
function changeColors(){
	heading.style.backgroundColor = pickedcolor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = pickedcolor;
	}

}



//PICKS RANDOM ANSWER
function pickColor(){
	return colors[(Math.floor(Math.random() * colors.length))]; 
}



//CREATES RANDOM ARRAY OF COLORS
function randColorArr(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randColorGenerator());
	}

	return arr;
}



//CREATES INDIVIDUAL RANDOM RGB VALUE
function randColorGenerator(){
	var num1 = Math.floor(Math.random() * 256) + 1;
	var num2 = Math.floor(Math.random() * 256) + 1;
	var num3 = Math.floor(Math.random() * 256) + 1;
	var color = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";

	return color;
}

