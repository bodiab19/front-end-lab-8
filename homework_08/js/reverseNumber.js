function reverseNumber(number){
	var str;
	if(number<0){
		 str="-";
	}
	else{
		 str=""
	}
	number=Math.abs(number).toString();	
	for (var i = number.length-1; i>=0; i--) {
		str+=number[i];
	}

	return Number(str);
}