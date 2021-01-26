// Let's make a Cat constructor!
var Cat = (function () {
  
   const weightArray = []
   let construtor = function(name,weight){
       if(!name || !weight)
         throw Error("parameters missing");
       Object.defineProperty(this, 'name', { get: () => name })
       Object.defineProperty(this, 'weight', { get: () => weight, set: (value) => weight = value })
       weightArray.push(this)
   }
   
   construtor.averageWeight = () => {
    if(weightArray.length > 1){
      let sum = 0;
      for(let i=0;i<weightArray.length;i++){a
          
        sum = sum + weightArray[i].weight;
        
      }
      return parseInt(sum/weightArray.length)
    }else
      return weightArray[0];
   }
   
   return construtor
  
   }());