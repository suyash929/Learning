let newsButton = `<div class="newsButtonClass"><input type = "button" class ="newsButton" id="newsButton" value ="Headlines" /><div>`;
document.querySelector('main').innerHTML = newsButton;

let viewNews = document.querySelector('.newsButton');
viewNews.addEventListener('click', (event) => {// Add click property to news button

	import ('./newsContent.ts').then(function(module){
		module.ShowNews();
	});
});