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
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${movieFromDb.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                    <label for="id">ID</label>
                    <input type="email" class="form-control disabled" id="id" aria-describedby="id" placeholder="${id}" readonly>
                </div>
                <div class="form-group">
                    <label for="newMovieName">Name</label>
                    <input type="text" class="form-control" id="newMovieName" aria-describedby="movieTitle" placeholder="${movieFromDb.title}">
                </div>
                <div class="form-group">
                    <label for="newMovieDirector">Director</label>
                    <input type="text" class="form-control" id="newMovieDirector" aria-describedby="movieDirector" placeholder="${movieFromDb.director}">
                </div>
                <div class="form-group">
                    <label for="newMovieGenre">Genre</label>
                    <input type="text" class="form-control" id="newMovieGenre" aria-describedby="movieGenre" placeholder="${movieFromDb.genre}">
                </div>
                <button type="submit" class="btn btn-primary">Edit</button>
                </form>
            </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div> 
        </div>
    </div>
    `).on("submit", async function (e) {
        e.preventDefault();

        const editingId = movieFromDb.id;
        const newTitle = $("#newMovieName").val() || movieFromDb.title;
        const newDirector = $("#newMovieDirector").val() || movieFromDb.director;
        const newGenre = $("#newMovieGenre").val() || movieFromDb.genre;

        await updateSpecificMovie(id, {
            id: editingId,
            title: newTitle,
            director: newDirector,
            genre: newGenre
        })

        getMovies();

        $(this).off();
    })

    $('#editModal').modal().on("hidden.bs.modal", function () {
        $("#edit").empty().off();
    });;
}

$("#createMovie").on("click", function (e) {
    e.preventDefault();
})