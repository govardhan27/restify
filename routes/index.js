/*jslint node: true, stupid: true */
'use strict';
var fs = require('fs');
const helper = require('../common/helper');


module.exports = function (server) {
	//   fs.readdirSync('./routes').forEach(function (file) {
	//     if (file.substr(-3, 3) === '.js' && file !== 'index.js') {
	//       require('./' + file.replace('.js', ''))(server);
	//     }
	//   });
	server.get('/', (req, res) => {
		const value = helper.calculate(3);
		return helper.getData()
			.then(result => {
				res.json({message:`Hello your value is ${value} and your api response ${result}`})
			})
	});

	server.get('/pokemonList', (req, res) => {
		return helper.pokemon()
			.then(result => {
				res.json({result})
			})
	});
};
