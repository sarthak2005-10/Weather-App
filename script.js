const apiKey = "fa77eb754cf982df64fd4cbf4d871393";

async function getWeather(){
  const city = document.getElementById('city').value;

  if(city === ""){
    alert("Enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try{
    const res = await fetch(url);
    const data = await res.json();

    document.getElementById('temp').innerText = Math.round(data.main.temp) + "°C";
    document.getElementById('desc').innerText = data.weather[0].description;
    document.getElementById('cityName').innerText = data.name;

  }catch(err){
    alert("City not found");
  }
}
