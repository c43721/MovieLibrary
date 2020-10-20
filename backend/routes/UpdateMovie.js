const express = require("express");
const db = require('../db/repository-wrapper');

const router = express.Router();

router.put("/:movieid", (req, res) => {
    const idToSearch = req.params.movieid;

    const movieFromSearch = db.movies.findMovieById(idToSearch);
    if (!movieFromSearch) res.status(404).json({ success: "false", error: "Could not find movie." });
    else {
        const updatedItems = req.body;
        if (!Object.keys(updatedItems).length) res.status(400).json({ success: "false", error: "No items to update." });
        else if (JSON.stringify(movieFromSearch) === JSON.stringify(updatedItems)) res.status(200).json({ success: "true", status: "Not modified" });
        else {
            const movie = db.movies.updateMovie(updatedItems);

            console.log(movie);
            res.status(200).json({ success: "true", status: "Updated", movie });
        }
    }
})

module.exports = router;
