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
    
    render() {
        return (
            <div className={styles['movies-div']}>
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