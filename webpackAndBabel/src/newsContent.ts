export let ShowNews = function(){
	let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=c2d8ea3918c942a5813e30c4007e54a8';
	fetch(url)
	.then(data => data.json())
	.then(data => {
		setContent(data);
	})
}
let setContent = function(data){
	let mainDOM = document.querySelector('main');
	mainDOM.innerHTML = "";
	let items = data.articles;
	let desc;
	console.log(items);
	let itemsLength = items.length;
	for(let i = 0;i< itemsLength;i++){

		if(items[i].content)
			 desc = items[i].content.substring(0,200);
		else
			desc = "";
		let content = `<br><div class="descriptionSection">
            <img class="newsImg" src='${items[i].urlToImage}' alt="BlogImage"/>
            <div class="newsDesc">
                <span class="newsTitle"><b>${items[i].title}</b></span>
                <br>
                <span class="newsDate">Posted on <b>${items[i].publishedAt}</b> // Source: <b>${items[i].source.name}</b></span>
                <p class="newsDetail">${desc}</p>
                <input type="button" class="readingButton" onclick = window.open('${items[i].url}') value="Continue Reading">
            </div>
        </div>
        <hr class="subDivision">`;
        mainDOM.innerHTML += content;
	}

}