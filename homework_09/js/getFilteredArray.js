function getFilteredArray(array, func){
		var newArray = array.concat();
		var filteredNewArray=[];

		forEach(newArray,function(el){
			if(!func(el)){
				delete newArray[newArray.indexOf(el)];
			}			
		});	
			
		forEach(newArray,function(el){
				filteredNewArray.push(el);	
		});	


		return filteredNewArray;
}