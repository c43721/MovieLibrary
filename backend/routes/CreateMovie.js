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
    console.log(newMovie, "testing post!!!!")
   res.send(newMovie)
   
    });

module.exports = router1;



// router.put("/:movieid", (req, res) => {
//     const idToSearch = req.params.movieid;

//     const movieFromSearch = db.movies.findMovieById(idToSearch);
//     if (!movieFromSearch) res.status(404).json({ success: "false", error: "Could not find movie." });
//     else {
//         const updatedItems = req.body;

//         if (!Object.keys(updatedItems).length) res.status(400).json({ success: "false", error: "No items to update." });
//         else if (JSON.stringify(movieFromSearch) === JSON.stringify(updatedItems)) res.status(200).json({ success: "true", status: "Not modified" });
//         else {
//             const updatedMovie = db.movies.updateMovie(updatedItems);

//             res.status(200).json({ success: "true", status: "Updated", movie: updatedMovie });
//         }
//     }
// })