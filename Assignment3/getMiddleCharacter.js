function getMiddle(stringValue)
{

	let index;
	if(stringValue.length % 2 == 0 ){ 

		index = stringValue.length / 2
		return stringValue.charAt(index-1)+stringValue.charAt(index)

	}else{

		index = Math.floor(stringValue.length/2)
		return stringValue.charAt(index)
		
	}

}