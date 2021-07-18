import React from 'react';
import './Filter.css';

const Filter = ({ handleFilter, selectedFilfer }) => {
    return (
        <select className='sort-select' size="1" onChange={(el) => handleFilter(el.target.value)} value={selectedFilfer}>
            <option>No filter</option>
            <option>Descending rating</option>
            <option>Ascending rating</option>
            <option>Descending release date</option>
            <option>Ascending release date</option>
        </select>
    );
};

export default Filter;