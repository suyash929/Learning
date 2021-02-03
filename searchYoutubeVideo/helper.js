function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';// return seconds
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';// return minutes
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';//return hours
    }

    else if (elapsed < msPerMonth) {
         return Math.round(elapsed/msPerDay) + ' days ago';// return days
    }

    else if (elapsed < msPerYear) {
         return Math.round(elapsed/msPerMonth) + ' months ago';// return months
    }

    else {
         return Math.round(elapsed/msPerYear ) + ' years ago';// return years
    }
}
function numFormatter(num) { // to convert views into M or K form
  if(num > 999 && num <= 1000000){
      return (num/1000).toFixed(1) + 'K';
  }else if(num > 1000000){
      return (num/1000000).toFixed(1) + 'M';
  }else if(num <= 999){
      return num;
  }
}
