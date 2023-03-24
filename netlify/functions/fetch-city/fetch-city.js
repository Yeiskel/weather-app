const axios = require("axios");
// const dotenv = require("dotenv").config();

const handler = async (event) => {
	const { city } = event.queryStringParameters;
	const API_KEY = process.env.API_KEY;

	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
	try {
		const { data } = await axios.get(url);
		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error) {
		const { status, statusText, headers, data } = error.response;
		return {
			statusCode: status,
			body: JSON.stringify({ status, statusText, headers, data }),
		};
	}
};

module.exports = { handler };
