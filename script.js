var allButtons = document.getElementsByTagName("button");

var copyAllButtons = [];

for (var i = 0; i < allButtons.length; i++) {
	copyAllButtons.push(allButtons[i].classList[1]);
}
console.log(copyAllButtons);
function buttonColorChange(buttonThingy) {
	if (buttonThingy.value === "red") {
		buttonRed();
	} else if (buttonThingy.value === "green") {
		buttonGreen();
	} else if (buttonThingy.value === "reset") {
		buttonReset();
	} else if (buttonThingy.value === "random") {
		randomColor();
	}
}
function buttonRed() {
	for (let i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add("btn-danger");
	}
}
function buttonGreen() {
	for (let i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add("btn-success");
	}
}
function buttonReset() {
	for (let i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add(copyAllButtons[i]);
	}
}
function randomColor() {
	let choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];
	for (let i = 0; i < allButtons.length; i++) {
		let randomNumber = Math.floor(Math.random() * 4);
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add(choices[randomNumber]);
	}
}
