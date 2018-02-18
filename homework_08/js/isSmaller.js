function isBigger(firstNumber, secondNumber){
	return firstNumber>secondNumber;
}

function isSmaller(firstNumber, secondNumber){
	if(firstNumber==secondNumber){
		return false;
	}
	else{
		return !isBigger(firstNumber,secondNumber);
	}	
}
