function getMiddle(stringValue)
{

	let index;
	if(stringValue.length % 2 == 0 ){ 

		index = stringValue.length / 2
		return stringValue.slice(Math.floor(index)-1,Math.floor(index)+1)

	}else{

		index = Math.floor(stringValue.length/2);
		return stringValue[index];
		
	}

}