import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Homepage from "./Main/HomePage/HomePage";
import FilmInfo from "./Main/FilmInfo/FilmInfo";
import { LoginPage } from "./Main/LoginPage/LoginPage";
import { Footer } from './Footer/Footer';
import './App.css';

export default class App extends Component {
    state = {
        apiKey: '4fd6fe1cdcc728e4b3c94a5165eac180',
        maxPage: 10,
        selectedFilter: 'No filter',
        selectPage: Number(localStorage.getItem('selectedPage')),
        selectFilmId: 0,
        isPending: true,
        genres: [],
        filmData: [],
        id: [],
        isConnect: true,
    };

    openFilmInfo = (id, tagName) => {
        if (tagName !== 'BUTTON') {
            this.setState(() => {
                return { selectFilmId: id }
            })
        }
        localStorage.setItem('selectFilmId', id);
    }

    handlePaginationPage = (count) => {
        this.setState(() => {
            return { selectPage: count, isPending: true }
        })
        localStorage.setItem('selectedPage', count);

    }

    handleFilter = (item) => {
        this.setState(() => {
            return { selectedFilter: item, isPending: true }
        })
    }

    updateData = () => {
        let filter;
        switch (this.state.selectedFilter) {
            case 'No filter':
                filter = 'popularity.desc';
                break;
            case 'Descending rating':
                filter = 'vote_average.desc';
                break;
            case 'Ascending rating':
                filter = 'vote_average.asc';
                break;
            case 'Descending release date':
                filter = 'release_date.desc';
                break;
            case 'Ascending release date':
                filter = 'release_date.asc';
                break;
            default:
                alert('Error')
        }
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apiKey}&language=en-US&sort_by=${filter}&include_adult=false&include_video=false&page=${this.state.selectPage}&with_watch_monetization_types=flatrate`
        let genresUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${this.state.apiKey}`
        fetch(genresUrl)
            .then(response => { return response.json() })

            .then(data => this.setState(() => {
                return { genres: data.genres }
            }))
            .then(fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.setState(() => {
                        return { filmData: data.results, isPending: false, }
                    })
                }))
    }

    componentDidMount() {
        this.updateData();

    }

    componentDidUpdate() {
        if (this.state.isPending) {
            this.updateData()
        }
    }

    render() {
        let filmToRender = []
        let remainingFilm = this.state.filmData.filter(el => this.state.id.indexOf(el.id) === -1)
        filmToRender = remainingFilm
        localStorage.setItem('selectedFilm', JSON.stringify(filmToRender.filter(el => el.id === this.state.selectFilmId)[0]))
        return (
            <Router>
                <div className="page">
                    <Header
                        userName={this.props.userName}
                        isLoggedIn={this.props.isLoggedIn}
                        setIsLoggedIn={this.props.setIsLoggedIn}
                    />
                    <Switch>
                        <Route exact path="/">
                            <Homepage
                                filmData={filmToRender}
                                id={this.state.id}
                                selectPage={this.state.selectPage}
                                maxPage={this.state.maxPage}
                                isPending={this.state.isPending}
                                selectedFilfer={this.state.selectedFilter}
                                openFilmInfo={this.openFilmInfo}
                                handlePaginationPage={this.handlePaginationPage}
                                handleFilter={this.handleFilter} />
                        </Route>
                        <Route exact path={"/" + Number(localStorage.getItem('selectedPage'))}>
                            <Homepage
                                filmData={filmToRender}
                                id={this.state.id}
                                selectPage={this.state.selectPage}
                                maxPage={this.state.maxPage}
                                isPending={this.state.isPending}
                                selectedFilfer={this.state.selectedFilter}
                                openFilmInfo={this.openFilmInfo}
                                handlePaginationPage={this.handlePaginationPage}
                                handleFilter={this.handleFilter} />
                        </Route>
                        <Route exact path={"/" + Number(localStorage.getItem('selectFilmId'))}>
                            <FilmInfo
                                selectedFilm={filmToRender.filter(el => el.id === this.state.selectFilmId)[0]}
                                genres={this.state.genres}
                            />
                        </Route>
                        <Route
                            exact
                            path="/login"
                            render={(props) => (
                                <LoginPage
                                    {...props}
                                    setIsLoggedIn={this.props.setIsLoggedIn}
                                    setUserName={this.props.setUserName}
                                />
                            )}
                        />
                    </Switch>
                    <Footer year={new Date().getFullYear()} />
                </div>
            </Router>);
    }
}
