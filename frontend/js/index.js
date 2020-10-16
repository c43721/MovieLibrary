"use strict";

//have constants for maybe base api url, and a local movie array to be overridden.

//use AJAX to get all the movies, on page load
//Loop through each of those movies, and make a new "card" for each movie in the list. Each card should be tailored to show the movie details.

//create movie function/button should be able to send a request to the API, then it should return the new list. That new list should override the previous list, and update every entry again.

//update movie function/button should be able to take a form body, and send a PUT request to the API, which will update that movie, and then that new list should call a function to update the movies again

//functions:
//a function to GET all movies
//a function to update (PUT) a movie in the list
//a function to create a new movie, then that function would need to call the "GET all movies" function to update the data on the frontend