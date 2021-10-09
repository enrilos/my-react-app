import { Component } from "react";
import styles from './MovieCard.module.css';

class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles['card']}>
                <p><strong>{this.props.title}</strong></p>
                <img src={this.props.coverUrl} alt="movie-cover" />
                <p><strong>{this.props.director}</strong></p>
            </div>
        )
    }
}

export default MovieCard;