import React from 'react';

const Filter = () => {
    return (
        <select name="sort" id="sort" className="sort-select">
            <option className="sort-none" value="none">none</option>
            <option className="sort-rating" value="rating">rating</option>
            <option className="sort-date" value="release_date">release date</option>
        </select>
    );
};

export default Filter;