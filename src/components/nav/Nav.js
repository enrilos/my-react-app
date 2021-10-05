import { Component } from "react";
import styles from './Nav.module.css';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles['nav-container']}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" />
                <nav>
                    <ul className={styles['nav-ul-config']}>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;