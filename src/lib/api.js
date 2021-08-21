export function getMovies(initialPage = 0, pageSize = 10) {
  return fetch(
    `https://lit-meadow-51266.herokuapp.com/api/movies?page=${initialPage}&size=${pageSize}`
  );
}
