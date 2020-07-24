import React, { Component } from 'react'
import SearchMovies from '../components/SearchMovies.js'

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">Movie Search</h1>
                <p className="p-main">This app uses the TMDb API but is not endorsed or certified by:<a href="https://www.themoviedb.org/">TMDb</a></p>
                
                <SearchMovies />
            </div>
        );
    }
}
