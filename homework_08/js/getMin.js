function getMin(){
	var Min=arguments[0];
	for(var i=1;i<arguments.length;i++){
		if(Min>arguments[i]){
			Min=arguments[i];
		}
	}
	return Min;
}