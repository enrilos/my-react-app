import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../home/Home';
import Contact from "../contact/Contact";
import NotFound from "../../pages/not-found/NotFound";

const Navigator = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/index" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default Navigator;