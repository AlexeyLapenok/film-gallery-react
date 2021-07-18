import React from 'react';
import noimage from '../../../assets/images/content/no-image.png';
import './FilmInfo.css';

const FilmInfo = ({ selectedFilm, genres }) => {

    let link
    if (selectedFilm.poster_path != null) {
        link = 'https://image.tmdb.org/t/p/w500/' + selectedFilm.poster_path
    } else {
        link = noimage
    }

    let genresRender = [];
    for (let i of genres) {
        if (selectedFilm.genre_ids.indexOf(i.id) !== -1) {
            genresRender.push(i.name)
        }
    }

    return (
        <main className="background">
            <div className="container"><img className="image" src={link} alt="" width="300px" height="400px" />

                <article className="about">
                    <p>Title:<br />{selectedFilm.title}</p>
                    <p>Overview:<br />{selectedFilm.overview}</p>
                    <p>Genres:<br />{genresRender.map(el => el + ' ')}</p>
                    <p>Popularity:<br />{selectedFilm.popularity}</p>
                    <p>Release date:<br />{selectedFilm.release_date}</p>
                    <p>Vote average:<br />{selectedFilm.vote_average}</p>
                    <p>Vote count:<br />{selectedFilm.vote_count}</p>

                </article>
            </div>
        </main>



    );
};

export default FilmInfo;
