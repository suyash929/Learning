function basicOp(operation, value1, value2)
{
  // Code
  return operation === '+' ? value1 + value2 : operation === '-' ? value1-value2 : operation === '*' ? value1*value2 : operation === '/' ? value1/value2 : 0
}