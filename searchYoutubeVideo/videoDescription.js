function getVideoDetails(itemsId){// get details of all videos using video id
  let itemsIds = itemsId.join(',');

  return fetch('https://www.googleapis.com/youtube/v3/videos?key='+key+'&id='+itemsIds+'&part=snippet,statistics')
        .then(data => data.json())
        .then(data => {return data})
        .catch(error => alert(error));
}
