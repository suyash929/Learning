function setThumbnail(items){

  let thumbnailContainer = document.createElement('div');
  thumbnailContainer.setAttribute('class','thumbnail-container');
  thumbnailContainer.setAttribute('id','thumbnail-container');
  let itemsLength = items.length;
  let itemsId = [];

  for(let h = 0;h < itemsLength;h++){
    itemsId.push(items[h].id.videoId);
  }

  document.getElementById('mainContent').appendChild(thumbnailContainer);

  let paginationNumbers = document.createElement('div');
  paginationNumbers.setAttribute('class','pagenumbers');
  paginationNumbers.setAttribute('id','pagenumbers');

  document.getElementById('mainContent').appendChild(paginationNumbers);

  getVideoDetails(itemsId).then(response => {// get video details
    totalData = totalData.concat(response.items);
    paginationDisplay(totalData);
    setUpPagination();
  })

}
