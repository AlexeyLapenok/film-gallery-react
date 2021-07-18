import React from 'react';

const Pagination = ({ selectPage, handlePaginationPage, maxPage, isPending }) => {
    let paginationItems = [];

    if (selectPage === 1) {
        paginationItems = [[1, 1], ['2', 2], ['3', 3], ['4', 4], ['...', 5], ['10', maxPage]]
    } else if (selectPage === 2) {
        paginationItems = [[1, 1], [2, 2], ['next', 3], ['10', maxPage]]
    } else if (selectPage > 2 && selectPage < maxPage - 1) {
        paginationItems = [[1, 1], ['prev', selectPage - 1], [selectPage, selectPage], ['next', selectPage + 1], ['10', maxPage]]
    } else if (selectPage === maxPage - 1) {
        paginationItems = [[1, 1], ['prev', selectPage - 1], [selectPage, selectPage], ['10', maxPage]]
    } else if (selectPage === maxPage) {
        paginationItems = [[1, 1], ['prev', maxPage - 1], [selectPage, maxPage]]
    }

    return (
        <div className="pagination" >
            {isPending ? '' : paginationItems.map(el => <button key={el[1]} onClick={() => handlePaginationPage(el[1])}>{el[0]}</button>)}

        </div>
    );
};

export default Pagination;