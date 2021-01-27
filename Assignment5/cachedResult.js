function cache(func) {
  const cached = {};
  
  return (...args) => {
      
      let key = JSON.stringify(args) // convert arguments intostring(needed if objects are there in argumnets)
      if(!(key in cached)){
        
        let res = func(...args) // call unction with arguments
        cached[key] = res // store rsult
      }
      return cached[key]
  }
  
}