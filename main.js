let lobos = document.querySelector('img');

let botão1 = document.querySelector('.botãoant');

let botão2 = document.querySelector('.botãopos');

let listlobos = [
	'assets/lobo4.jpg',
	'assets/lobo3.jpg ',
	'assets/lobo2.jpeg',
	'assets/lobo.jpg'
]

let counter= 0;

function setlobos(){
	lobos.setAttribute('src' , listlobos[counter])
}

botão2.addEventListener('click', function(){
	if (counter > 0){
	counter = counter -1;
	} else {counter = 3}
	setlobos();
	})

botão1.addEventListener('click', function(){
	if (counter < 3){
	counter = counter +1;
	} else {counter = 0}
	setlobos();
	})

function init(){
	console.log 
	(lobos, botão1, botão2, listlobos)
	}