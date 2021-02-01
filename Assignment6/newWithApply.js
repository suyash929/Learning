function construct(Class,...args) {
  
  let newObject = Object.create(Class.prototype); // creates a Class object
  Class.apply(newObject, [...args]); // apply the argumnets
  return newObject
  
}