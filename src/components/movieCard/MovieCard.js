import { Component } from "react";
import styles from './MovieCard.module.css';

class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles['card']}>
                <p><b>Title</b>: {this.props.title}</p>
                <img src={this.props.imageUrl} alt="movie-cover" />
                <p><b>Director</b>: {this.props.director}</p>
            </div>
        )
    }
}

export default MovieCard;