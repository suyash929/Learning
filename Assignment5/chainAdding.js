function add(n) {
  let sum = (x) => { return add(n+x); }; // calling function 
  sum.valueOf = () => {return n;}; // in cases where we want sum as primitve type instead of function so returning value
  return sum;
}
