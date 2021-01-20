function zero() {

  if(arguments.length>0){// if there is argument then we simply pass value to the function which is in argument
    return arguments[0](0)
  }else{ // we will return integer
    return 0
  }

}
function one() {

  if(arguments.length>0){
    return arguments[0](1)
  }else{
    return 1
  }

}
function two() {

  if(arguments.length>0){
    return arguments[0](2)
  }else{
    return 2
  }

}
function three() {

  if(arguments.length>0){
    return arguments[0](3)
  }else{
    return 3
  }

}
function four() {

  if(arguments.length>0){
    return arguments[0](4)
  }else{
    return 4
  }

}

function five() {

  if(arguments.length>0){
    return arguments[0](5)
  }else{
    return 5
  }

}
function six() {

  if(arguments.length>0){
    return arguments[0](6)
  }else{
    return 6
  }

}
function seven() {

  if(arguments.length>0){
    return arguments[0](7)
  }else{
    return 7
  }

}
function eight() {

  if(arguments.length>0){
    return arguments[0](8)
  }else{
    return 8
  }

}
function nine() {

  if(arguments.length>0){
    return arguments[0](9)
  }else{
    return 9
  }

}

function plus(secondNumber) {
  // return a function which returns operation
  return (firstNumber) => {return firstNumber + secondNumber}

}
function minus(secondNumber) {

  return (firstNumber) => {return firstNumber - secondNumber}

}

function times(secondNumber) {

  return (firstNumber) => {return firstNumber * secondNumber}

}
function dividedBy(secondNumber) {

  return (firstNumber) => {return Math.floor(firstNumber / secondNumber)}

}