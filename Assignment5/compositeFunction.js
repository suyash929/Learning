function compose(f,g) {
  
  return (...args)=> {
    
    let innerFunc = g(...args)
    return f(innerFunc)
  
  }
}