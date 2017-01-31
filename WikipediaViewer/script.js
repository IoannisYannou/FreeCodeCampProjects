function change() {
	var textbox = document.createElement("input");
	textbox.type = "text";
	textbox.onclick = "change()";

	var div = document.getElementById("content").children[0];
	div.replaceChild(textbox, div.childNodes[0]);
	//document.getElementById("demo").innerHTML = div;
}