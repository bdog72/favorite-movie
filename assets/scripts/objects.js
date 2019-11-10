const addMovieButton = document.querySelector('#add-movie-btn');
const searchButton = document.querySelector('#search-btn');

const movies = [];

const addMovieHandler = () => {
  const title = document.querySelector('#title').value;
  const extraName = document.querySelector('#extra-name').value;
  const extraValue = document.querySelector('#extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random()
  };
  movies.push(newMovie);
  console.log(newMovie);
};

addMovieButton.addEventListener('click', addMovieHandler);
