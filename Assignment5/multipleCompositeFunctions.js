function compose() {
  
  if(arguments.length < 1 )
    return (arg) => {return arg} // if no argument return value

  else{
    return (x)=>{
      for(let i = arguments.length - 1;i >= 0;i--){
        x = arguments[i](x)
      }
      return x
    }
  }
}