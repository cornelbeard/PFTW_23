// 5 favorite movies
const myFavMovies = " Rush Hour,  Rush Hour 2,  Rush Hour 3,  Money Talks,  Coach Carter" .split(", ");
console.log("my top 5 favorite movies", myFavMovies);

// input favorite movie
const yourFavMovie = window.prompt("What is your favorite movie?");
console.log("Your favorite movie is", yourFavMovie);

// add fav movie to my 5 favorite movies
myFavMovies.push(" and " + yourFavMovie);
console.log("our favorite movies are:", myFavMovies);

// complete list of favorite movies
window.alert("Our favorite movies are: " + myFavMovies +'.');