import React, { Component } from 'react'
import SearchMovies from '../components/SearchMovies.js'

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">React Movie Search</h1>
                <SearchMovies />
            </div>
        );
    }
}
