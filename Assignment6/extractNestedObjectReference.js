Object.prototype.hash = function(string) {
  let obj = string.split('.');
  let value = this
  for(key in obj){
    if(key !== 'hash'){
      
      if(value[obj[key]]){
        value = value[obj[key]]
      }else{
        value = undefined
        break;
      }
    }
  }
  return value
}