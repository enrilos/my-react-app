import logo from './logo.svg';
import './App.css';

import Nav from './components/nav/Nav';
import Movies from './components/movies/Movies';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
