const express = require("express");
const db = require("./db/repository-wrapper");
const cors = require("cors");

const updateRoute = require("./routes/UpdateMovie");
const createRoute = require("./routes/CreateMovie");

const app = express();

const port = process.env.PORT || 3006;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/update/", updateRoute);

app.use("/api/create", createRoute);