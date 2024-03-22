import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as BRouter, Switch, Route} from 'react-router-dom';


import ProfileCard from './Components/ProfileCard';
import About from './Components/About';
import Homepage from './Components/Homepage';
import ProfileCardDetails from './Components/ProfileCardDetails';


function App() {
  return (
    <BRouter>
        <div className="min-h-dvh bg-blue-200">
            <Switch>
                <Route path='/' exact component={Homepage} />
                <Route path='/ProfileCard' exact component={ProfileCard} />
                <Route exact path='/ProfileCard/:id' component={ProfileCardDetails}/>
                <Route path='/about' component={About} />
            </Switch>
        </div>
    </BRouter>
  );
}



export default App;
