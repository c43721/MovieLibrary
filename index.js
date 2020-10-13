const express = require("express");
const db = require("./db/repository-wrapper");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3006;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());