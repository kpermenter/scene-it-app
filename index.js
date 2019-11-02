document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
      var movieHTML = movieArray.map(function(currentMovie) {
        return `
        <div class="movies-container col-3" id="movies-container">
					<div class="card text-white" style="width: 18rem;">
						<img src="${currentMovie.Poster}" class="card-img-top" alt="Card image">
						<div class="card-body">
							<h5 class="card-title">${currentMovie.Title}</h5>
							<p class="card-text">${currentMovie.imdbID}</p>
							<a href="#" class="btn btn-primary">Add</a>
						</div>
					</div>
				</div>
        `;
      });

      return movieHTML.join("");

    }
    var content = document.getElementById("movies-container");
    //content.innerHTML =(renderMovies(movieData));
});



// var movieHTML = [];
// document.addEventListener('DOMContentLoaded', function () {

// var content = document.getElementsByClassName("movies-container")
// content.innerHTML = renderMovies(movieData);

//     function renderMovies(movieArray) {
//         movieHTML = movieArray.map(function (currentMovie) {
//             movieHTML += currentMovie[i];
//             `
//             <div class="movies-container">${currentMovie.Title[0]}</div>
//             `

// //template literals to build out movies
//         });
//         return movieHTML.join("");
//     }

// });