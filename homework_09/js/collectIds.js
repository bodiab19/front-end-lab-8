function collectIds(array) {
	var newArray=array.concat();
	var collectIds=[];
	collectIds=getFilteredArray(newArray,function(el){
		return el.rating>3;
	});
	collectIds=getTransformedArray(collectIds,function(el){
		return el.id;
	});
}
