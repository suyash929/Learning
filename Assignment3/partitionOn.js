function partitionOn(isEven, items) {

	var itemsLength = items.length
	var count = 0
	var oddList = []
	var evenList = [] 
	// separting odd even numbers into two objects
	for(let i=0;i < itemsLength; i++){

		if(isEven(items[i])){

			evenList.push(items[i])

		}else{

			count++
			oddList.push(items[i])

		}

	}
	var oddLength = oddList.length
	var evenLength = evenList.length
	// adding odd even elements in item
	for(var i=0;i < itemsLength - evenLength ; i++){

		items[i] = oddList[i]

	}
	for(var j=0;j < evenLength;j++){

		items[i] = evenList[j]
		i++
	}
	if(count > 0)
		return count
	else
		return 0

}