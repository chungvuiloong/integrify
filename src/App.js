import './App.css';
import React from 'react';
import {BrowserRouter as BRouter, Switch, Route} from 'react-router-dom';
import About from './Components/About';
import Homepage from './Components/Homepage';
import ProfileCardDetails from './Components/ProfileCardDetails';


function App() {
  return (
    <BRouter>
        <div className="min-h-dvh bg-blue-200">
            <Switch>
                <Route path='/' exact component={Homepage} />
                {/* <Route path='/user' exact component={ProfileCard} /> */}
                <Route exact path='/users/:id' component={ProfileCardDetails}/>
                <Route path='/about' component={About} />
            </Switch>
        </div>
    </BRouter>
  );
}



export default App;
