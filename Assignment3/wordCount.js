function countWords(str) {
  
  var totalWords = str.match(/[a-zA-Z0-9\-'`]+/g)
  if(totalWords != null)
      return totalWords.length
  else
    return 0
  
}