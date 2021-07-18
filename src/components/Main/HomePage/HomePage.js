import React from 'react';
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import Films from "../Films/Films";
import { Route } from 'react-router-dom';

const Homepage = ({ filmData, openFilmInfo, selectPage, handlePaginationPage, maxPage, handleFilter, isPending, selectedFilfer }) => {
    let pageNav = ('/');
    return (
        <main className='background'>
            <section className='container'>
                <Filter handleFilter={handleFilter} selectedFilfer={selectedFilfer} />
                {isPending ? <div className="loading">Please wait loading...</div> :
                    <Route path={pageNav}>
                        <Films filmData={filmData} openFilmInfo={openFilmInfo} />
                    </Route>
                }
            </section>
            <Pagination isPending={isPending} selectPage={selectPage} handlePaginationPage={handlePaginationPage} maxPage={maxPage} />
        </main>
    );
};

export default Homepage;
