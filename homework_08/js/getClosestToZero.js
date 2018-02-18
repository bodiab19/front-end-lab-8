function getClosestToZero(){
	var closestToZero=arguments[0];
	for(var i=1;i<arguments.length;i++){
		if(closestToZero>Math.abs(arguments[i])){
			closestToZero=arguments[i];
		}
	}
	return closestToZero;
}