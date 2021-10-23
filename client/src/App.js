import logo from './logo.svg';
import './App.css';

import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
