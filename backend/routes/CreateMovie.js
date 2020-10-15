const express = require("express");
const db = require('../db/repository-wrapper');

const router = express.Router();

router.post("/", (req, res, next) => {
    console.log("testing post!!!!")
    next()
});

    // const newMovie
    // {
    //     title: "";
    //     director: "";
    //     genre: "";
    //   }

// {
//     const idToAdd = req.params.newMovieId;

//     const addNewMovie = db.movies.createMovie(idToAdd); //lines 9-19 are in progress
//     if (!addNewMovie) res.status(404).json({ success: "false", error: "Could not find movie." });
//     else {
//         const updatedItems = req.body;

//         if (!Object.keys(updatedItems).length) res.status(400).json({ success: "false", error: "No items to update." });
//         else if (JSON.stringify(addNewMovie) === JSON.stringify(updatedItems)) res.status(200).json({ success: "true", status: "Not modified" });
//         else {
//             const updatedMovie = db.movies.updateMovie(updatedItems);

//             res.status(200).json({ success: "true", status: "Updated", movie: updatedMovie });
//         }
//     }
// })

module.exports = router;