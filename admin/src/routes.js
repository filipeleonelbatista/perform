import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CreateIssuePage from './pages/CreateIssuePage';
import ListContatos from './pages/ListContatos';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" exact component={LoginPage} />
                <Route path="/admin/contatos" exact component={ListContatos} />
                <Route path="/admin/create-issue" exact component={CreateIssuePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;