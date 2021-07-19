import React from 'react';
import { NavLink } from 'react-router-dom';
import noimage from '../../../assets/images/content/no-image.png';
import './Film.css';

const Film = ({ el, openFilmInfo, id }) => {
    let link
    if (el.poster_path != null) {
        link = 'https://image.tmdb.org/t/p/w500/' + el.poster_path
    } else {
        link = noimage
    }
    return (
        <li onClick={(ev) => openFilmInfo(el.id, ev.target.tagName)}>
            <NavLink to={"/" + id}>
                <div className="hover">
                    <span className="hover_date">
                        <p>Release date:<br />{el.release_date}</p>
                    </span>
                    <span className="hover_rate">
                        <p>Rating:<br />{el.vote_average}</p>
                    </span>
                    <img src={link} alt="" width="150px" height="200px" /><br />
                    <h4>{el.original_title}</h4>
                </div>
            </NavLink>
        </li>


    )
};

export default Film;
