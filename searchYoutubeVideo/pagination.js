let responsive=[
  {breakPoint:{width:0,item:2}}, //if width greater than 0 (1 item will show)
  {breakPoint:{width:600,item:3}}, //if width greater than 600 (2  item will show)
  {breakPoint:{width:1000,item:5}} //if width greater than 1000 (4 item will show)
];
function load(){
  for(let i=0; i<responsive.length;i++){
  	if(window.innerWidth>responsive[i].breakPoint.width){
  		items=responsive[i].breakPoint.item;
  	}
  }
}
function paginationDisplay(data){ // Display paginationitems per page

  thumbnailContainer = document.getElementById('thumbnail-container');
  thumbnailContainer.innerHTML = '';
  pagenumbers = document.getElementById('pagenumbers');
  list=data;
  currentPage--;

  load();
  let start = items*currentPage;
  let end = start + items;
  let paginatedItems = data.slice(start,end);

  for(let i = 0;i < paginatedItems.length ;i++){
    let duration = timeDifference(new Date(),new Date(paginatedItems[i].snippet.publishedAt));
    let view = numFormatter(paginatedItems[i].statistics.viewCount);

    let thumbnailContent = `<div class='thumbnail-box'>
    <img class='thumbnail-image' src=${paginatedItems[i].snippet.thumbnails.medium.url} alt=''/>
    <h4 class='thumbnail-title'>${paginatedItems[i].snippet.title}</h4>
    <p class='thumbnail-sub-title'>${paginatedItems[i].snippet.channelTitle}<br />${view} views <b>&middot</b> ${duration}</p>
    </div>`;

    thumbnailContainer.innerHTML += thumbnailContent;
    thumbnailContainer.addEventListener('click', (event) => {
      window.open('https://www.youtube.com/watch?v='+paginatedItems[i].id);
    });
  }
  if(currentPage+1 == Math.ceil(list.length / items))
    YouTubeSearchApi(searchInput.value,nextPageToken);
}

function setUpPagination(){// set up pagination and buttons

  let pageCount = Math.ceil(list.length / items);
  let start = Math.ceil((list.length -15)/ items) +1;
  for(let i = start; i < pageCount + 1 ; i++){
    let btn = paginationButton(i,list);
    pagenumbers.appendChild(btn);
  }

}

function paginationButton(page,totalItems){ // creating pagination button and callin display function according to page number

  let button = document.createElement('button');
  button.innerText = page;

  button.addEventListener('click', function(){

    currentPage = page;
    paginationDisplay(list);
  });

  return button;

}
