document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function (currentMovie) {
            return `
        <div class="movies-container col-3">
					<div class="card text-white" style="width: 18rem;">
						<img src="${currentMovie.Poster}" class="card-img-top" alt="Card image">
						<div class="card-body">
							<h5 class="card-title">${currentMovie.Title}</h5>
							<p class="card-text">${currentMovie.Year}</p>
							<button onclick="saveToWatchlist('${currentMovie.imdbID}')" class="btn btn-primary">Add</a></button>
						</div>      
					</div>
				</div>
        `;
        });

        return movieHTML.join("");

    }
    // var content = document.getElementById("movies-container");
    // content.innerHTML = (renderMovies(movieData));

    document.getElementById("search-form").addEventListener("submit", function(event) {
        event.preventDefault();

        var content = document.getElementById("movies-container");
        content.innterHTML = renderMovies(movieData);

    });

});



function saveToWatchlist(imdbID) {
    var movie = movieData.find(function (currentMovie) {
        return currentMovie.imdbID == imdbID;
    })
    var watchlistJSON = localStorage.getItem("watchlist");
    var watchlist = JSON.parse(watchlistJSON);

    if (watchlist === null) {
        watchlist = [];
    }
    else {
        watchlist.push(movie);
    }

    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistJSON);

    console.log(watchlist);
};
