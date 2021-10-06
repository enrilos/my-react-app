import { Component } from "react";
import styles from './Footer.module.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <footer className={styles.footer}>
                <p>&copy; This project is a property of <a href="https://github.com/enrilos">github/enrilos</a>. All rights reserved.</p>
            </footer>
        );
    }
}

export default Footer;