var p1btn = document.getElementById("p1");
var p2btn = document.getElementById("p2");
var rstbtn = document.getElementById("reset");
var inputNum = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var win = false;
var winningScore = 9

document.getElementById("winningScore").textContent = winningScore;
p1btn.addEventListener("click", function(){
	if(!win){
		p1Score++;
		document.getElementById("p1Display").textContent = p1Score;
		if(p1Score ==winningScore){
			document.getElementById("p1Display").classList.add("win");
			win = true;
}}})


p2btn.addEventListener("click", function(){
	if(!win){
		p2Score++;
		document.getElementById("p2Display").textContent = p2Score;
		if(p2Score ==winningScore){
			document.getElementById("p2Display").classList.add("win");
			win = true;
}}})

rstbtn.addEventListener("click", function(){
	reset();
})

function reset(){
	p1Score = 0;
	p2Score = 0;
	winningScore = 9
	win = false;
	document.getElementById("winningScore").textContent = winningScore;
	document.getElementById("p1Display").textContent = 0;
	document.getElementById("p2Display").textContent = 0;
	document.getElementById("p1Display").classList.remove("win");
	document.getElementById("p2Display").classList.remove("win");
}


inputNum.addEventListener("change", function(){
	reset();
	winningScore = inputNum.value;
	document.getElementById("winningScore").textContent = winningScore;

})


// button color effects
var allbuttons = document.querySelectorAll("button");

allbuttons.forEach(function(each){
	each.addEventListener("mouseover", function(){
	each.style.color = "green";
})

each.addEventListener("mouseout", function(){
	each.style.color = "black";
})

})





