import { Component } from "react";
import styles from './Footer.module.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={styles.footer}>
                <p>This project is a property of <a href="https://github.com/enrilos">github/enrilos</a>. All right reserved. &copy;</p>
            </div>
        );
    }
}

export default Footer;