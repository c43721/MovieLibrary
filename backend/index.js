const express = require("express");
const db = require("./db/repository-wrapper");
const cors = require("cors");

const updateRoute = require("./routes/UpdateMovie");
const createRoute = require("./routes/CreateMovie");
const { movies } = require("./db/json-context");
const { createMovie } = require("./db/movies-repository");

const app = express();

const port = process.env.PORT || 3006;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/update/", updateRoute);

app.use("/api/create", createRoute);

app.get("/api/create/new",(req,res)=>{  
  res.send("hello");
});

 app.post("/api/create/new", (req,res) => {
    let newMovie = req.body;
    let addedMovie = db.movies.createMovie(newMovie);
    res.send(addedMovie);
  }); 