import Movie from '../domain/Movie'; // Предполагается, что ваш класс Movie находится в файле Movie.ts

describe('Movie class tests', () => {
  const sampleMovieData = {
    picture: "url_to_image.jpg",
    titleRU: "Название на русском",
    titleEN: "Title in English",
    year: 2020,
    country: "Страна",
    slogan: "Слоган фильма",
    genre: "Жанр",
    duration: "120 мин"
  };

  it('should create a movie object correctly', () => {
    const movie = new Movie(
      sampleMovieData.picture,
      sampleMovieData.titleRU,
      sampleMovieData.titleEN,
      sampleMovieData.year,
      sampleMovieData.country,
      sampleMovieData.slogan,
      sampleMovieData.genre,
      sampleMovieData.duration
    );

    expect(movie.picture).toBe(sampleMovieData.picture);
    expect(movie.titleRU).toBe(sampleMovieData.titleRU);
    expect(movie.titleEN).toBe(sampleMovieData.titleEN);
    expect(movie.year).toBe(sampleMovieData.year);
    expect(movie.country).toBe(sampleMovieData.country);
    expect(movie.slogan).toBe(sampleMovieData.slogan);
    expect(movie.genre).toBe(sampleMovieData.genre);
    expect(movie.duration).toBe(sampleMovieData.duration);
  });

  it('should add a movie to the cart correctly', () => {
    const movie = new Movie(
      sampleMovieData.picture,
      sampleMovieData.titleRU,
      sampleMovieData.titleEN,
      sampleMovieData.year,
      sampleMovieData.country,
      sampleMovieData.slogan,
      sampleMovieData.genre,
      sampleMovieData.duration
    );
    const cart: Movie[] = [];

    movie.addToCart(cart);

    expect(cart.length).toBe(1);
    expect(cart[0]).toBe(movie);
  });
});
