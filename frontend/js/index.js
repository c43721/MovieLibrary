"use strict";

//have constants for maybe base api url, and a local movie array to be overridden.
const baseApiUrl = "http://localhost:3006/api";

//use AJAX to get all the movies, on page load
//Loop through each of those movies, and make a new "card" for each movie in the list. Each card should be tailored to show the movie details.

//create movie function/button should be able to send a request to the API, then it should return the new list. That new list should override the previous list, and update every entry again.

//update movie function/button should be able to take a form body, and send a PUT request to the API, which will update that movie, and then that new list should call a function to update the movies again

//functions:
//a function to GET all movies
//a function to update (PUT) a movie in the list
//a function to create a new movie, then that function would need to call the "GET all movies" function to update the data on the frontend

function updateSpecificMovie(id, data) {
    $.ajax({
        type: "PUT",
        url: baseApiUrl + "/update/" + id,
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
            //Do something to modify the frontend
            console.log(data);
        }
    })
}

function getMovies() {
    $.ajax({
        type: "GEt",
        url: baseApiUrl + "/movies",
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            updateCards(data);
        }
    })
}

getMovies();

function updateCards(movieArray) {
    const container = $("#cards-container");
    container.empty();

    for (let movie of movieArray) {
        container.append(`
            <div class="card" style="width: 18rem; height: 18rem;" id=${movie.id}>
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">Director: ${movie.director}</p>
                    <p class="card-text">Genre: ${movie.genre}</p>
                </div>
            </div>
        `);
    }
}

// updateSpecificMovie(1, {
//     "id": 1,
//     "title": "The Departed 2",
//     "director": "Martin Scorsese",
//     "genre": "Drama"
// })