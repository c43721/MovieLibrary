const express = require("express");
const db = require("./db/repository-wrapper");
const cors = require("cors");

const updateRoute = require("./routes/UpdateMovie");
const createRoute = require("./routes/CreateMovie");
const { movies } = require("./db/json-context");
const { createMovie } = require("./db/movies-repository");

const app = express();

const port = process.env.PORT || 3006;

var btn1 = require();

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




  btn1.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open('Post', "http://localhost:3006/api/create/new");
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        addMovie(data);
        console.log(data.title)
    };
    xhr.send();
});

function addMovie() {
    $.ajax({
        url: "http://localhost:3006/api/create/new",
        dataType: "json",
        type: "post",
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $("#title").append(
                    "<tr>" + "<td>" + data[i].title + "</tr>");
                $("#director").append(
                      "<tr>" + "<td>" + data[i].director + "</tr>");
                $("#genre").append(
                    "<tr>" + "<td>" + data[i].genre + "</tr>");
            }
        },
        error: function (jQxhr, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    });
}