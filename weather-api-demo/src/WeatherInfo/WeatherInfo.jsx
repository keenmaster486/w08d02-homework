import React, {Component} from 'react';

//const axios = require('axios');

class WeatherInfo extends Component
{
	constructor()
	{
		super()
		this.state =
		{
			data: {
				name: '',
				main:
				{
					temp: '',
					humidity: '',
					pressure: '',
					temp_max: '',
					temp_min: ''
				}
			}
		}
	}

	componentDidMount()
	{
		this.getData();
	}

	getData = async () =>
	{
		//const temp = fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22');
		let temp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9e3b8256143699e849b46ad5c0ae265f');
		
		temp = await(temp.json());

		console.log(await temp);

		//const thedata = JSON.parse(fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9e3b8256143699e849b46ad5c0ae265f'));

		//const thedata = JSON.parse(`{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}`);

		//JSON.parse(fetch('https://cors-anywhere.herokuapp.com/http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22'));
		
		this.setState(
		{
			data: temp
		});

		//return temp;
	}

	render()
	{

		console.log("data in render: " + this.state.data.name);
		return(
			<div>
				The current weather in {this.state.data.name}:<br/>
				Temperature in Fahrenheit: {((this.state.data.main.temp-273.15)*(9/5)+32)}<br/>
				Barometric pressure: {this.state.data.main.pressure} mb<br/>
				Humidity: {this.state.data.main.humidity}%<br/>
			</div>
		);
	}
}

export default WeatherInfo