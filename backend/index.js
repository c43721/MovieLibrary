
const express = require("express");
const db = require("./db/repository-wrapper");
const cors = require("cors");

const updateRoute = require("./routes/UpdateMovie");

const app = express();

const port = process.env.PORT || 3006;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/update/", updateRoute);

app.get("/api/movies", (req, res) => {
    let port = db.movies.findAllMovies();
    res.send(port);
});

app.get("/api/movies/:id", (req, res) => {
    let id = req.params.id;
    let movieFromid = db.movies.findMoviesById(id);
    if (!movieFromId) res.status(401).json({ message: "Cannot find movie." });
    else res.json(movieFromid);
});

app.post("/api/create/new", (req, res) => {
    let newMovie = req.body;
    let addedMovie = db.movies.createMovie(newMovie);
    res.send(addedMovie);
});