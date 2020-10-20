"use strict";

//Local constant for API url
const baseApiUrl = "http://localhost:3006/api";

//On load, get all movies
getMovies();

async function updateSpecificMovie(id, data) {
    return await $.ajax({
        type: "PUT",
        url: baseApiUrl + "/update/" + id,
        contentType: 'application/json',
        data: JSON.stringify(data),
    })
}

function getMovies() {
    $.ajax({
        type: "GET",
        url: baseApiUrl + "/movies",
        contentType: 'application/json',
        success: function (data) {
            updateCards(data);
        }
    })
}

async function getSpecificMovie(id) {
    const output = await $.ajax({
        type: "GET",
        url: baseApiUrl + "/movies/" + id,
        contentType: 'application/json',
    })
    return output;
}


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
                    <a onclick="editMovie(${movie.id})" class="btn btn-primary">Edit</a>
                </div>
            </div>
        `);
    }
}

async function editMovie(id) {
    const movieFromDb = await getSpecificMovie(id);

    $("#edit").empty().append(`
    <form>
        <div class="form-group">
            <label for="id">ID</label>
            <input type="email" class="form-control disabled" id="id" aria-describedby="id" placeholder="${id}" readonly>
        </div>
        <div class="form-group">
            <label for="newMovieName">Name</label>
            <input type="text" class="form-control" id="newMovieName" aria-describedby="movieName" placeholder="${movieFromDb.title}">
        </div>
        <div class="form-group">
            <label for="newMovieDirector">Director</label>
            <input type="text" class="form-control" id="newMovieDirector" aria-describedby="emailHelp" placeholder="${movieFromDb.director}">
        </div>
        <div class="form-group">
            <label for="newMovieGenre">Genre</label>
            <input type="text" class="form-control" id="newMovieGenre" aria-describedby="emailHelp" placeholder="${movieFromDb.genre}">
        </div>
    <button type="submit" class="btn btn-primary">Edit</button>
    <button type="button" class="btn btn-secondary" onclick="cancelEditMovie()">Cancel</button>
    </form>
    `).on("submit", async function (e) {
        e.preventDefault();

        const newTitle = $("#newMovieName").val() || movieFromDb.title;
        const newDirector = $("#newMovieDirector").val() || movieFromDb.director;
        const newGenre = $("#newMovieGenre").val() || movieFromDb.genre;

        await updateSpecificMovie(id, {
            id,
            title: newTitle,
            director: newDirector,
            genre: newGenre
        })

        getMovies();
        $("#edit").empty();
    })
}

function cancelEditMovie() {
    return $("#edit").empty();
}