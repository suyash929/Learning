let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');
let nextPageToken;
let currentPage;
let thumbnailContainer;
let pagenumbers;
let items;
let count = 1;
let list=[];
let totalData;
const key = 'AIzaSyDN6Bc_EvpSr852vt1sfVQWh0G_jvEo1ig';

searchButton.addEventListener('click', (event) => {// Add click property to search button
  document.getElementById('mainContent').innerHTML = '';
  currentPage = 1;
  totalData = [];
  if(searchInput.value == '' ||searchInput.value == undefined)
    return alert("Please enter something in search bar");
  YouTubeSearchApi(searchInput.value);
});
function YouTubeSearchApi(queryData,nextPage = ''){ // calling YuTube api to get data according to search result
  let url;
  if(nextPage == '')
    url = 'https://www.googleapis.com/youtube/v3/search?key='+key+'&type=video&part=snippet&maxResults=15&q='+queryData;
  else
    url = 'https://www.googleapis.com/youtube/v3/search?key='+key+'&type=video&part=snippet&maxResults=15&q='+queryData+'&pageToken='+nextPage;
  fetch(url)
  .then(data => data.json())
  .then(data => {
    nextPageToken = data.nextPageToken;
    setThumbnail(data.items);
  }) // calling function to create thumbnail container with some description
  .catch(error => alert(error));
}
