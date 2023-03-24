import { city, showWeather } from "./main";

export function fetch_data() {
	fetch(`/.netlify/functions/fetch-city?city=${city}`)
		.then((response) => response.json())
		.then((city_data) => {
			const city_name = city_data[0].name;
			fetch(
				`/.netlify/functions/fetch-weather?lat=${city_data[0].lat}&lon=${city_data[0].lon}`
			)
				.then((response) => response.json())
				.then((weather_data) => showWeather(weather_data, city_name));
		});
}
