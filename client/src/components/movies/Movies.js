import { Component } from "react";
import movieService from "../../services/movieService";
import MovieCard from "../movieCard/MovieCard";
import styles from './Movies.module.css';

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    async componentDidMount() {
        const movies = await movieService.getAll();

        this.setState(() => ({ movies }));
    }

    async searchBarChange(e) {
        const title = e.target.value;
        let movies = null;

        if(!title) {
            movies = await movieService.getAll();
        } else {
            movies = await movieService.getMoviesByTitle(title.toLowerCase().trim())
        }

        this.setState(() => ({ movies }));
    }

    render() {
        return (
            <div className={styles['movies-div']}>
                <div className={styles['container-search']}>
                    <input type="text" name="movieSearch" placeholder="Search movie..." onChange={(e) => this.searchBarChange(e)} />
                </div>
                {this.state.movies.map((x) =>
                    <MovieCard
                        key={x.id}
                        title={x.title}
                        director={typeof x.director === 'object' ? x.director.join(', ') : x.director}
                        coverUrl={x.coverUrl}
                    />
                )}
            </div>
        )
    }
}

export default Movies;