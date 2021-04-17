import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSucessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(this.state)
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {

            AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then(
                (response) => {
                    AuthenticationService.registerSucessfulLoginForJwt(this.state.username, response.data.token);
                    this.props.history.push(`/welcome/${this.state.username}`)
                }
            ).catch(
                () => {
                    this.setState({ showSucessMessage: false })
                    this.setState({ hasLoginFailed: true })
                }

            )
    }



    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSucessMessage && <div>Login Sucessfull</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} id="login"/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="login"/>
                    <button id="button" className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>

        )
    }

}
export default LoginComponent