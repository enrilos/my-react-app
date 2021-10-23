import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from '../movies/Movies';
import Contact from "../contact/Contact";

const Navigator = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Movies />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route path="*" exact>
                    
                </Route>
            </Switch>
        </Router>
    );
}

export default Navigator;