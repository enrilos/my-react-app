import { Component } from "react";
import movieService from "../../services/movieService";
import styles from './Movies.module.css';

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Movies;