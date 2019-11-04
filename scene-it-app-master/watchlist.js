document.addEventListener('DOMContentLoaded', function () {
    function renderList(watchlist) {
      
        var listHTML = listArray.map(function (watchlist) {
            return `
        <div class="movies-container col-3">
					<div class="card text-white" style="width: 18rem;">
						<img src="${watchlist.Poster}" class="card-img-top" alt="Card image">
						<div class="card-body">
							<h5 class="card-title">${watchlist.Title}</h5>
							<p class="card-text">${watchlist.Year}</p>
							<button onclick="saveToWatchlist('${watchlist.imdbID}')" class="btn btn-primary">Add</a></button>
						</div>      
					</div>
				</div>
        `;
        });

        return listHTML.join("");

    }
    var content = document.getElementById("movies-container");
    content.innerHTML = (renderList(watchlist));
});


function retrieveWatchlist(list) {
    if (!localStorage)
        return;

    var watchlist = localStorage.getItem("watchlist");
    if (!watchlist)
        return null;
    return JSON.parse(watchlist);
};
