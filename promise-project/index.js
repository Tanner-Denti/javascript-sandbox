document.addEventListener("DOMContentLoaded", () => {
    // I would never put an api key in client side code like this
    // but this is a free practice key, and I don't really care.
    const FREE_API_KEY = "YSL6KH8UDTVUL47WJJ4S4A7SC";

    const conditionsP = document.querySelector(".conditions");
    const locationP = document.querySelector(".location");
    const temperatureP = document.querySelector(".temperature");
    const feelsLikeTempSpan = document.querySelector(".feels-like-temp");
    const windSpeedSpan = document.querySelector(".wind-speed");
    const humiditySpan = document.querySelector(".humidity");
    const searchInput = document.getElementById("search-location");
    const form = document.querySelector("form");

    form.addEventListener("submit", handleFormSubmit);

    loadWeatherCard();

    function handleFormSubmit(event) {
        event.preventDefault();
        const searchText = searchInput.value;
        searchInput.value = "";

        if (searchText.trim() === "") {
            alert("Location cannot be empty");
            return;
        }

        getLocationWeatherData(searchText)
            .then(updateTextContent)
            .catch((err) => {
                alert(`Error processing this location, try another.\nErr: ${err}`);
            });
    }

    function loadWeatherCard() {
        getLocationWeatherData("dallas")
            .then(updateTextContent)
            .catch((err) => {
                alert(`Error processing this location, try another.\nErr: ${err}`);
            });
    }

    function updateTextContent(weatherData) {
        conditionsP.textContent = weatherData.conditions;
        locationP.textContent = weatherData.location;
        temperatureP.textContent = weatherData.temperature;
        feelsLikeTempSpan.textContent = weatherData.feelsLike;
        windSpeedSpan.textContent = weatherData.windSpeed;
        humiditySpan.textContent = weatherData.humidity;
    }

    function getLocationWeatherData(location) {
        return fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${FREE_API_KEY}`,
            { mode: "cors" },
        )
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => {
                const weatherData = {};
                parseOutWeatherDataDetails(responseJSON, weatherData);
                return weatherData;
            })
            .catch((err) => {
                throw new Error(err);
            });
    }

    function parseOutWeatherDataDetails(weatherJSON, weatherObject) {
        if (!weatherJSON.resolvedAddress) {
            weatherObject.location = "";
            throw Error("Empty response data for resolvedAddress");
        }

        if (!weatherJSON.currentConditions) {
            weatherObject.conditions = "";
            throw Error("Empty response data for currentConditions");
        }

        if (!weatherJSON.currentConditions.conditions) {
            weatherObject.humidity = "";
            weatherObject.temperature = "";
            weatherObject.windSpeed = "";
            throw Error("Empty response data for conditions");
        }

        if (!weatherJSON.currentConditions.feelslike) {
            weatherObject.feelslike = "";
            throw Error("Empty response data for feelslike");
        }

        if (!weatherJSON.currentConditions.humidity) {
            weatherObject.humidity = "";
            throw Error("Empty response data for humidity");
        }

        if (!weatherJSON.currentConditions.temp) {
            weatherObject.temperature = "";
            throw Error("Empty response data for temperature");
        }

        if (!weatherJSON.currentConditions.windspeed) {
            weatherObject.windSpeed = "";
            throw Error("Empty response data for wind speed");
        }

        weatherObject.location = weatherJSON.resolvedAddress;
        weatherObject.conditions = weatherJSON.currentConditions.conditions;
        weatherObject.feelsLike = weatherJSON.currentConditions.feelslike;
        weatherObject.humidity = weatherJSON.currentConditions.humidity;
        weatherObject.temperature = weatherJSON.currentConditions.temp;
        weatherObject.windSpeed = weatherJSON.currentConditions.windspeed;
    }
});
