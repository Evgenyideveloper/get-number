
const makeNumber = () =>{

	let humanNumber = +prompt('Угадай число от 1 до 100');

	function trableNumber(){

		let randomNumber = Math.floor(100 * Math.random()) + 1;
		if(humanNumber > randomNumber){
			console.log("случайное число: " + randomNumber);
			console.log("загаданное число: " + humanNumber);
			alert('Загаданное число больше');	
			let newNumber1 = +prompt('Угадай число от 1 до 100');
			humanNumber = newNumber1;
		}
		if(humanNumber < randomNumber && humanNumber !== 0){
			console.log("случайное число: " + randomNumber);
			console.log("загаданное число: " + humanNumber);
			alert('Загаданное число меньше');
			let newNumber2 = +prompt('Угадай число от 1 до 100');
			humanNumber = newNumber2;
		}
		if(humanNumber == '' || humanNumber == null ){
			
			alert('Игра окончена');
			return true;
		}
		
		if(Number.isNaN(humanNumber) == true){		
			alert('Введи число!');		
			let newNumber3 = +prompt('Угадай число от 1 до 100');
			humanNumber = newNumber3;
		}

		if(humanNumber == randomNumber){
			console.log("случайное число: " + randomNumber);
			console.log("загаданное число: " + humanNumber);
			alert('Поздравляю, Вы угадали!!!');
			return true;
		}
		trableNumber();
	}

	trableNumber();
}
makeNumber();