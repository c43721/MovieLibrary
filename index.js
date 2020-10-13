const express = require("express");
const db = require("./db/repository-wrapper");

const app = express();

const port = process.env.PORT || 3006;

app.listen(port, () => console.log(`Listening on port ${port}`))