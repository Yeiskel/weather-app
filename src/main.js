import { fetch_data } from "./fetch";

export function showWeather(data, city_name) {
	// Creates the weather card
	const card = document.createElement("div");
	card.classList.add(
		"bg-slate-200",
		"w-[11rem]",
		"rounded",
		"p-4",
		"drop-shadow-cardDropShadow",
		"hover:scale-110",
		"hover:transition-all"
	);
	const container = document.createElement("div");

	// Shows the city
	const cityName = document.createElement("h3");
	cityName.innerHTML = city_name;
	cityName.classList.add(
		"inline-block",
		"text-lg",
		"font-semibold",
		"text-slate-500"
	);
	// Shows the country
	const country = document.createElement("span");
	country.innerHTML = data.sys.country;
	country.classList.add(
		"bg-cyan-500",
		"rounded-xl",
		"px-2",
		"py-[0.1rem]",
		"align-super",
		"text-sm",
		"text-slate-200",
		"ml-1",
		"font-semibold"
	);
	container.append(cityName, country);
	// Shows temperature
	const temp = document.createElement("h2");
	temp.innerHTML = Math.round(data.main.temp);
	temp.classList.add("font-bold", "text-6xl", "inline-block");
	const celsius = document.createElement("span");
	celsius.innerHTML = "°C";
	celsius.classList.add("text-3xl", "font-bold", "align-super");
	temp.appendChild(celsius);

	// Shows the weather icon
	const weatherIcon = document.createElement("img");
	weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

	// Shows the current weather
	const weather = document.createElement("p");
	weather.innerHTML = data.weather[0].description;
	weather.classList.add(
		"uppercase",
		"tracking-wide",
		"text-slate-500",
		"font-medium"
	);

	cards_container.appendChild(card);
	card.append(container, temp, weatherIcon, weather);
}

function clearInput(element) {
	element.value = "";
}

function inputValidation() {
	if (city === "") {
		alert("Plese input a city first");
	} else {
		fetch_data();
		city_input.value = "";
		city = "";
	}
}

// HTML elements
const cards_container = document.querySelector("#card-container");
const city_input = document.querySelector("#city-input");
const submit_btn = document.querySelector("button");
export let city = city_input.value;
city_input.addEventListener("change", () => {
	city = city_input.value;
});

city_input.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		event.stopImmediatePropagation();
		inputValidation();
	}
});
submit_btn.addEventListener("click", (event) => {
	event.stopImmediatePropagation();
	inputValidation();
});
