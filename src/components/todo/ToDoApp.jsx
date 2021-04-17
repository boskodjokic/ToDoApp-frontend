import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import TodoComponent from './TodoComponent.jsx'

class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">
                <Router>
                    <div id="page-container">
                        <div id="content-wrap">
                            <HeaderComponent />
                            <Switch>
                                <Route path="/" exact component={LoginComponent} />
                                <Route path="/login" component={LoginComponent} />
                                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                                <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                                <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                                <Route path="/logout" component={LogoutComponent} />
                                <Route component={ErrorComponent} />
                            </Switch>
                        </div>
                        <FooterComponent />
                    </div>
                </Router>
            </div>
        )
    }
}

export default ToDoApp