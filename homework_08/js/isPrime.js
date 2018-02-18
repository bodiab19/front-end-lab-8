function isPrime(number){
	var Prime=true;
 	for(var i=2;i<number;i++){
 		if(number%i==0){
 			Prime=false;
 		}
 	}
 	return Prime;
}