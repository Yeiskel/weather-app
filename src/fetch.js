import { city, showWeather } from "./main";

export function fetch_data() {
	// fetch(
	// 	`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
	// )
	// 	.then((response) => response.json())
	// 	.then((city_data) => {
	// 		console.log(
	// 			`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
	// 		);
	// 		const city_name = city_data[0].name;
	// 		fetch(
	// 			`https://api.openweathermap.org/data/2.5/weather?lat=${city_data[0].lat}&lon=${city_data[0].lon}&appid=${apiKey}&units=metric`
	// 		)
	// 			.then((response) => response.json())
	// 			.then((weather_data) => showWeather(weather_data, city_name));
	// 	});
	fetch(`/.netlify/functions/fetch-city?city=${city}`)
		.then((response) => response.json())
		.then((city_data) => {
			const city_name = city_data[0].name;
			console.log(city_name);
			fetch(
				`/.netlify/functions/fetch-weather?lat=${city_data[0].lat}&lon=${city_data[0].lon}`
			)
				.then((response) => response.json())
				.then((weather_data) => showWeather(weather_data, city_name));
		});
	// 	.catch((error) => console.error(`There has been an error ${error}`));
	// fetch(`/.netlify/functions/fetch-weather?city=${city}`)
	// 	.then((response) => response.json())
	// 	.then((data) => console.log(data));
}
