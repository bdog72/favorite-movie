const addMovieButton = document.querySelector('#add-movie-btn');
const searchButton = document.querySelector('#search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.querySelector('#movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieElement = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = `${getFormattedTitle.apply(movie)} - `;
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieElement.textContent = text;
    movieList.append(movieElement);
  });
};

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
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    }
  };
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.querySelector('#filter-title').value;
  renderMovies(filterTerm);
};

addMovieButton.addEventListener('click', addMovieHandler);
searchButton.addEventListener('click', searchMovieHandler);
