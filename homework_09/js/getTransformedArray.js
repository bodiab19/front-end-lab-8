function getTransformedArray(array, func) {
		var transformedArray = array.concat();
		forEach(transformedArray,function(el){
			transformedArray[transformedArray.indexOf(el)]=func(el);	
		});	

		return transformedArray;
}