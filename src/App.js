import './App.css';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Contact from './components/pages/Contact'


function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/' extact component={Home} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;