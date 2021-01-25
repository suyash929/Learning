function createFunctions(n) {
  var callbacks = [];

  for (let i=0; i<n; i++) { // corrected function while declaring i instead of using var we used let
    callbacks.push(function() {
      return i;
    });
  }
  
  return callbacks;
}