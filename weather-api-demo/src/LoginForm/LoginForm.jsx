import React, {Component} from 'react';

class LoginForm extends Component
{
	constructor()
	{
		super()
		this.state =
		{
			username: "",
			password: ""
		}
	}

	handleChange = (e) =>
	{
		e.preventDefault();
		this.setState(
		{
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) =>
	{
		e.preventDefault();
		this.props.handleLogin(this.state);
	}

	render()
	{
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input name='username' type='text' placeholder='Username'></input><br/>
					<input name='password' type='password' placeholder='Password'></input><br/>
					<button type='submit'>Log In</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;