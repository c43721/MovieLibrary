const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ test: "Success" });
});

router.get("/:movieid", (req, res) => {
    const idToSearch = req.params.movieid;
    res.json({ test: idToSearch });
})

module.exports = router;
