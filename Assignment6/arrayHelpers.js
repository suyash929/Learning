Array.prototype.square = function(){
  return this.map((eachElement) => { return Math.pow(eachElement,2) })
}

Array.prototype.cube = function(){
  return this.map((eachElement) => { return Math.pow(eachElement,3) })
}

Array.prototype.sum = function(){
  
  if(this.length == 0)
    return NaN;
  
  return this.reduce((total,currentElement) => { return total + currentElement  })
}

Array.prototype.average = function(){
  return this.sum() / this.length
}

Array.prototype.even = function(){
  return this.filter( (element) => {return element % 2 == 0 } )
}

Array.prototype.odd = function(){
  return this.filter( (element) => {return element % 2 != 0 } )
}
