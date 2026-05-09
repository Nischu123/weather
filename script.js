async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "69016a2d394826a0688b65ec57a675f6";

    const url =
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (!data.location) {
            document.getElementById("result").innerHTML =
                "❌ City not found";
            return;
        }

        const weather = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>🌡️ Temperature: ${data.current.temperature}°C</p>
      <p>🌤️ Weather: ${data.current.weather_descriptions[0]}</p>
      <p>💧 Humidity: ${data.current.humidity}%</p>
    `;

        document.getElementById("result").innerHTML = weather;

    } catch (error) {

        document.getElementById("result").innerHTML =
            "⚠️ Error fetching data";

        console.error(error);
    }
}