let inputField = document.getElementById("inputTextField");
let oList = document.getElementById("myList");
let knopka = "<button id='removeButton' onclick='delli(this)'>Удалить</button>";
readlist();
function addme(){
	let inp = inputField.value;
	console.log(inp);
	if (inp!=''){
		let liFirst = document.createElement('li');
		liFirst.innerHTML = inp + knopka;
		inputField.value = "";
		inputField.focus();
		oList.prepend(liFirst);	
		savelist();
	}
}
function delli(kto){
	kto.parentElement.remove();
	savelist();
}
function savelist(){
	localStorage.clear();
	let lis = oList.getElementsByTagName("li");
	for (let i = 0; i<lis.length; i++){
		localStorage.setItem(String(i), lis[i]["firstChild"]["nodeValue"]); //["firstChild"]["textContent"]
		//console.log(lis[i]);
	}
}
function readlist(){
	for (let i = 0; i < localStorage.length; i++){
		let elem = document.createElement('li');
		elem.innerHTML = localStorage.getItem(String(i)) + knopka;
		oList.append(elem);
	}
}
