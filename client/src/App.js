import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Views/Components/navbar.js';
import Footer from './Views/Components/footer.js';

import Index from './Views/index.js';
import Books from './Views/books.js';
import Error from './Views/error.js';

import './App.css';

function App() {
  return (
      <Router>
        <header class="mb-5">
          <a href="/" title="ReactApp Frontend">
            <img class="my-3 mx-3" src="logo192.png" alt="ReactApp logo" width="80px" />
          </a>
          <Navigation />
        </header>
        <main class="container mb-5">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/books" component={Books} />
            <Route component={Error} />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
}

export default App;
