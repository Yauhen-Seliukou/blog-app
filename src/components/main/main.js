import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from './home';
import Login from './login';

function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'> <Home /> </Route>
                <Route path='/login'> <Login /> </Route>
            </Switch>  
        </Router>
        
    );
}

export default Main;