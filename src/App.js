import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import ProfileCard from './Components/ProfileCard';
import About from './Components/About';
import Homepage from './Components/Homepage';
import ProfileCardDetails from './Components/ProfileCardDetails';


function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path='/' exact component={Homepage} />
                <Route path='/ProfileCard' exact component={ProfileCard} />

                <Route exact path='/ProfileCard/:id' component={ProfileCardDetails}/>

                {/* Testin testing */}
                <Route path='/about' component={About} />
                
            </Switch>
        </div>
    </Router>
  );
}



export default App;
