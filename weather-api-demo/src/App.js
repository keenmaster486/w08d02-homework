import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './LoginForm/LoginForm';
import WeatherInfo from './WeatherInfo/WeatherInfo';

class App extends Component
{
	constructor()
	{
		super();
		this.state =
		{
			loggedIn: false
		}
	}	

	handleLogin = () =>
	{
		this.setState(
		{
			loggedIn: true
		});
	}

	render()
	{
		return (
			<div className="App">
				<h1>weather-api-demo</h1>
				{
					this.state.loggedIn === true ?
					<WeatherInfo/>
					:
					<LoginForm handleLogin={this.handleLogin}></LoginForm>
				}

			</div>
		);
	}
}

export default App;
