function decypherPhrase(obj, text){
	var newObj={};
	for(key in obj){
		newObj[obj[key]]=key;
	}
	var decypher=cypherPhrase(newObj,text);	
	return decypher;

}