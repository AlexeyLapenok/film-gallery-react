import React from 'react';
import Film from "../Film/Film";
import './Films.css';

const Films = ({ filmData, openFilmInfo }) => {
    return (
        <ul id='film' className="movie-list">
            {filmData.map((el) => <Film key={el.id} el={el} id={el.id} openFilmInfo={openFilmInfo}
            />)}
        </ul>
    );
};

export default Films;