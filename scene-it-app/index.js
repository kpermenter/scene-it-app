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

    document.getElementById("search-form").addEventListener("submit", function(event) {
        event.preventDefault();

        var searchString = document.getElementsByClassName("form-control search-bar").value;
        var urlEncodedSearchString = encodeURIComponent(searchString);

        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function (response) {
            var content = document.getElementById("movies-container");
            content.innterHTML = renderMovies(response.data.Search);

            console.log(response.data);
    });

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
