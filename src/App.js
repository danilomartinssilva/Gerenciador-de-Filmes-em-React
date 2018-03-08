import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Series from './Series';
import NewSeries from './NewSeries';
const About = ()=> <section className="intro-section"><h1>ABOUT</h1></section>;

class App extends Component {


  render() {
  
    return (
      <Router>
      <div className="App">
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header page-scroll">
        <a className="navbar-brand page-scroll" href="#page-top">
            <img src="images/logo.png" height="30" />
        </a>
      </div>

      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav">
          
          <li><Link to="/">Home </Link></li>
          <li><Link to="/about">About </Link></li>
          <li><Link to="/newseries">New Series </Link></li>
          
        </ul>
      </div>

    </div>
  </nav>
              <Route exact path="/" component = {Home}/>
              <Route exact path="/home" component = {Home}/>
              <Route exact path="/about" component = {About}/>
              <Route exact path="/newseries" component = {NewSeries}/>
              <Route  path="/series/:genre" component = {Series}/>
      </div>
      
      </Router>
    );
  }
}

export default App;
