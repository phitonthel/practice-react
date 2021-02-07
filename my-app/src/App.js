import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// pages
import Home from './pages/Home'
import CreateTask from './pages/CreateTask'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/create-task">Create Task</Link>
            <Link to="/about">About</Link>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/create-task">
              <CreateTask />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
