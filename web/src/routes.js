import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Profile from './pages/ProfilePage';
import UpdateProfile from './pages/UpdateProfilePage';
import Workers from './pages/ListWorkersPage';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} refresh="true" />
                <Route path="/update" component={UpdateProfile} />
                <Route path="/workers" component={Workers} />

            </Switch>
        </BrowserRouter>
    )

}