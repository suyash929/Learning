function isSantaClausable(obj) {
  if((typeof obj.sayHoHoHo === 'function') && (typeof obj.distributeGifts === 'function' ) && (typeof obj.goDownTheChimney === 'function'))
    return true;
  else
    return false
}