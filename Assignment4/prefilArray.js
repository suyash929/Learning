function prefill(n, v) {
  
  if( n === 0 || n === '0') // if n is 0
    return []

  else if(!(n >= 0)  || n == NaN || (Number(n) === n && n % 1 !== 0) || n === true || n === false) // if n is string like abc, Nan, infinity, float type or boolean
    throw {name : 'TypeError', message : n +' is invalid' }

  else if(v == undefined) // if v is undefined or not sent
    return new Array(n).fill(undefined)

  else
    return new Array(n).fill(v) // if everything is fine fill array with value for n timesa
  
}