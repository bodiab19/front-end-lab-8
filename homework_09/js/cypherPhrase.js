function cypherPhrase(obj, text){
	var arrayOfText=text.split("");
	var cypherPhrase=arrayOfText.concat();
	cypherPhrase=getTransformedArray(cypherPhrase,function(el){

		for(key in obj){
			if(el==key){
				el=obj[key];			
			}				
		}
		return el;	
			
	});
	return cypherPhrase.join("");
}