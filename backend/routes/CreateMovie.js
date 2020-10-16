const express = require("express");
const db = require('../db/repository-wrapper');

var router1 = express.Router();

router1.post("/api/create/new", (req, res) => {
    const newMovie = req.body
    {
        title: "";
        director: "";
        genre: "";
      }
      const movieAdd = req.body;

      const movieCreation = db.movies.createMovie(movieAdd);
      if (!movieCreation) res.status(404).json({ success: "false", error: "test i think?" });
      else {
          const CreatedMovie = req.body;
  
          if (!Object.keys(CreatedMovie).length) res.status(400).json({ success: "false", error: "No items to add." });
          else if (JSON.stringify(movieCreation) === JSON.stringify(CreatedMovie)) res.status(200).json({ success: "true", status: "Not modified" });
          else {
              const newAddMovie = db.movies.createMovie(CreatedMovie);
  
              res.status(200).json({ success: "true", status: "Created", movie: newAddMovie });
          }
      }
    console.log(newMovie, "testing post!!!!")
   res.send(newMovie)
   
    });

module.exports = router1;
