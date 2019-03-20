const axios = require('axios');
const url = `https://ironhack-pokeapi.herokuapp.com/pokemon/1`;

function calculate(num) {
	return num * 2;
}

function getData() {
	return axios.get('https://dube.io/service/ping')
		.then(result => {
			if (result && result.data) {
				return JSON.stringify(result.data);
			}
		})
}

function pokemon() {
	return axios.get(url)
		.then(result => {
			if (result) {
				return result.data;
			}
		})
}

module.exports = { calculate, getData, pokemon, respondWithResult };