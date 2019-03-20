var request = new XMLHttpRequest();
var requestURL = 'https://swapi.co/api/films/';

request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

request.onload = () => {
    let films = request.response.results;
    console.log(films);
     films.map(film => {
        let newElement = document.createElement('film-info');
        newElement.title = film.title;
        newElement.releaseDate = film.release_date;
        newElement.episodeId = film.episode_id;
        document.getElementById('list').appendChild(newElement);
     });
}
