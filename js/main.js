// Add details from comments to features documentation 

// TODO:  it searches incorectly .... 
const API_KEY = '61a98510dd070c045181ea694797486a' 
const API_KEY_WEATHERAPI = '0f911882ef9d41089e7133434242210' 
const searchBtn = document.getElementById('search-btn');
const searchContainer = document.getElementById('search-container');
const cityInput = document.getElementById('search-input');
const weatherInfo = document.getElementById('weather-info');
const weatherIcon = document.getElementById('weather-icon');
const timeNow = document.getElementById('time-now');
const sunTimeField = document.querySelector('.sun-time');
const sunriseTimeField = document.getElementById('sunrise-time');
const sunsetTimeField = document.getElementById('sunset-time');
const tempToggle = document.querySelector('.temp-toggle-container');
const forecastContainerWrapper = document.querySelector('.forecast-container-wrapper');
const forecastContainer = document.getElementById('forecast-container');
const hourlyForecastContainer = document.getElementById('hourly-forecast-container');
const locationBtn = document.getElementById('location-btn');
const hourlyForecastWrapper = document.querySelector('.hourly-forecast-wrapper');

const countryNames = {
  "AD": "Andorra",
  "AE": "United Arab Emirates",
  "AF": "Afghanistan",
  "AG": "Antigua and Barbuda",
  "AI": "Anguilla",
  "AL": "Albania",
  "AM": "Armenia",
  "AO": "Angola",
  "AR": "Argentina",
  "AS": "American Samoa",
  "AT": "Austria",
  "AU": "Australia",
  "AW": "Aruba",
  "AX": "Åland Islands",
  "AZ": "Azerbaijan",
  "BA": "Bosnia and Herzegovina",
  "BB": "Barbados",
  "BD": "Bangladesh",
  "BE": "Belgium",
  "BF": "Burkina Faso",
  "BG": "Bulgaria",
  "BH": "Bahrain",
  "BI": "Burundi",
  "BJ": "Benin",
  "BL": "Saint Barthélemy",
  "BM": "Bermuda",
  "BN": "Brunei Darussalam",
  "BO": "Bolivia",
  "BQ": "Bonaire, Sint Eustatius and Saba",
  "BR": "Brazil",
  "BS": "Bahamas",
  "BT": "Bhutan",
  "BV": "Bouvet Island",
  "BW": "Botswana",
  "BY": "Belarus",
  "BZ": "Belize",
  "CA": "Canada",
  "CC": "Cocos (Keeling) Islands",
  "CD": "Congo, Democratic Republic of the",
  "CF": "Central African Republic",
  "CG": "Congo",
  "CH": "Switzerland",
  "CI": "Côte d'Ivoire",
  "CK": "Cook Islands",
  "CL": "Chile",
  "CM": "Cameroon",
  "CN": "China",
  "CO": "Colombia",
  "CR": "Costa Rica",
  "CU": "Cuba",
  "CV": "Cabo Verde",
  "CW": "Curaçao",
  "CX": "Christmas Island",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DE": "Germany",
  "DJ": "Djibouti",
  "DK": "Denmark",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "DZ": "Algeria",
  "EC": "Ecuador",
  "EE": "Estonia",
  "EG": "Egypt",
  "EH": "Western Sahara",
  "ER": "Eritrea",
  "ES": "Spain",
  "ET": "Ethiopia",
  "FI": "Finland",
  "FJ": "Fiji",
  "FM": "Micronesia",
  "FO": "Faroe Islands",
  "FR": "France",
  "GA": "Gabon",
  "GB": "United Kingdom",
  "GD": "Grenada",
  "GE": "Georgia",
  "GF": "French Guiana",
  "GG": "Guernsey",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GL": "Greenland",
  "GM": "Gambia",
  "GN": "Guinea",
  "GP": "Guadeloupe",
  "GQ": "Equatorial Guinea",
  "GR": "Greece",
  "GT": "Guatemala",
  "GU": "Guam",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HK": "Hong Kong",
  "HM": "Heard Island and McDonald Islands",
  "HN": "Honduras",
  "HR": "Croatia",
  "HT": "Haiti",
  "HU": "Hungary",
  "ID": "Indonesia",
  "IE": "Ireland",
  "IL": "Israel",
  "IM": "Isle of Man",
  "IN": "India",
  "IO": "British Indian Ocean Territory",
  "IQ": "Iraq",
  "IR": "Iran",
  "IS": "Iceland",
  "IT": "Italy",
  "JE": "Jersey",
  "JM": "Jamaica",
  "JO": "Jordan",
  "JP": "Japan",
  "KE": "Kenya",
  "KG": "Kyrgyzstan",
  "KH": "Cambodia",
  "KI": "Kiribati",
  "KM": "Comoros",
  "KN": "Saint Kitts and Nevis",
  "KP": "Korea, Democratic People's Republic of",
  "KR": "Korea, Republic of",
  "KW": "Kuwait",
  "KY": "Cayman Islands",
  "KZ": "Kazakhstan",
  "LA": "Lao People's Democratic Republic",
  "LB": "Lebanon",
  "LC": "Saint Lucia",
  "LI": "Liechtenstein",
  "LK": "Sri Lanka",
  "LR": "Liberia",
  "LS": "Lesotho",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "LV": "Latvia",
  "LY": "Libya",
  "MA": "Morocco",
  "MC": "Monaco",
  "MD": "Moldova",
  "ME": "Montenegro",
  "MF": "Saint Martin",
  "MG": "Madagascar",
  "MH": "Marshall Islands",
  "MK": "North Macedonia",
  "ML": "Mali",
  "MM": "Myanmar",
  "MN": "Mongolia",
  "MO": "Macao",
  "MP": "Northern Mariana Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MS": "Montserrat",
  "MT": "Malta",
  "MU": "Mauritius",
  "MV": "Maldives",
  "MW": "Malawi",
  "MX": "Mexico",
  "MY": "Malaysia",
  "MZ": "Mozambique",
  "NA": "Namibia",
  "NC": "New Caledonia",
  "NE": "Niger",
  "NF": "Norfolk Island",
  "NG": "Nigeria",
  "NI": "Nicaragua",
  "NL": "Netherlands",
  "NO": "Norway",
  "NP": "Nepal",
  "NR": "Nauru",
  "NU": "Niue",
  "NZ": "New Zealand",
  "OM": "Oman",
  "PA": "Panama",
  "PE": "Peru",
  "PF": "French Polynesia",
  "PG": "Papua New Guinea",
  "PH": "Philippines",
  "PK": "Pakistan",
  "PL": "Poland",
  "PM": "Saint Pierre and Miquelon",
  "PN": "Pitcairn",
  "PR": "Puerto Rico",
  "PT": "Portugal",
  "PW": "Palau",
  "PY": "Paraguay",
  "QA": "Qatar",
  "RE": "Réunion",
  "RO": "Romania",
  "RS": "Serbia",
  "RU": "Russian Federation",
  "RW": "Rwanda",
  "SA": "Saudi Arabia",
  "SB": "Solomon Islands",
  "SC": "Seychelles",
  "SD": "Sudan",
  "SE": "Sweden",
  "SG": "Singapore",
  "SH": "Saint Helena",
  "SI": "Slovenia",
  "SJ": "Svalbard and Jan Mayen",
  "SK": "Slovakia",
  "SL": "Sierra Leone",
  "SM": "San Marino",
  "SN": "Senegal",
  "SO": "Somalia",
  "SR": "Suriname",
  "SS": "South Sudan",
  "ST": "Sao Tome and Principe",
  "SV": "El Salvador",
  "SX": "Sint Maarten",
  "SY": "Syrian Arab Republic",
  "SZ": "Eswatini",
  "TC": "Turks and Caicos Islands",
  "TD": "Chad",
  "TF": "French Southern Territories",
  "TG": "Togo",
  "TH": "Thailand",
  "TJ": "Tajikistan",
  "TK": "Tokelau",
  "TL": "Timor-Leste",
  "TM": "Turkmenistan",
  "TN": "Tunisia",
  "TO": "Tonga",
  "TR": "Turkey",
  "TT": "Trinidad and Tobago",
  "TV": "Tuvalu",
  "TZ": "Tanzania, United Republic of",
  "UA": "Ukraine",
  "UG": "Uganda",
  "UM": "United States Minor Outlying Islands",
  "US": "United States",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VA": "Holy See",
  "VC": "Saint Vincent and the Grenadines",
  "VE": "Venezuela",
  "VG": "British Virgin Islands",
  "VI": "U.S. Virgin Islands",
  "VN": "Viet Nam",
  "VU": "Vanuatu",
  "WF": "Wallis and Futuna",
  "WS": "Samoa",
  "YE": "Yemen",
  "YT": "Mayotte",
  "ZA": "South Africa",
  "ZM": "Zambia",
  "ZW": "Zimbabwe"
};

const TEMPERATURE_UNITS = {
  CELSIUS: '°C',
  FAHRENHEIT: '°F',
  KELVIN: 'K'
};


let forecastCelsius = [];
let hourlyCelsius = [];
let timezoneOffset;

const fetchData = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        timezoneOffset = data.timezone

        displayWeatherData(data);
        // fetchWeatherMap(lat, lon);
        initializeMap(lat, lon)
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

const getUserLocation = (date) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchData(lat, lon);
            fetchDataFiveDayForecast(lat, lon)
            fetchDataHourlyForecast(lat, lon)
            fetchDataHourlyForecastSecond(lat, lon)

            initializeMap(coord.lat, coord.lon);
        },
        error => {
            console.error("Error fetching location:", error);
            alert("Unable to retrieve your location.");
        }
    );
} else {
    alert("Geolocation is not supported by this browser.");
}
}

const formatDate = (date) => {
  const today = new Date();  
  const isToday = date.toDateString() === today.toDateString();
  
  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  const dayText = isToday ? 'Today' : dayName;

  timeNow.innerHTML = `${dayText}, ${dayName} at ${time}`
}

const formatSunriseAndSunsetTime = (timestamp) => {
  const date = new Date(timestamp * 1000); 

  return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, 
      timeZone: 'UTC' 
  });
}


const displayWeatherData = (data) => {
  const { main, sys } = data;
  const temperature = Math.round(main.temp);
  const sunriseUnix = sys.sunrise;
  const sunsetUnix = sys.sunset;
  const tempFeelsLike = Math.round(main.feels_like);

  const currentUnixTime = Math.floor(Date.now() / 1000);
  const isNight = currentUnixTime < sunriseUnix || currentUnixTime > sunsetUnix;
  const weatherCondition = main;

  updateBackgroundColor(temperature, data.weather[0].main.toLowerCase(weatherCondition), isNight);

  sunTimeField.style.display = "flex";
  tempToggle.style.display = "flex";

  const sunriseTime = formatSunriseAndSunsetTime(sunriseUnix)
  const sunsetTime = formatSunriseAndSunsetTime(sunsetUnix)

  sunriseTimeField.innerHTML = `${sunriseTime}`
  sunsetTimeField.innerHTML = `${sunsetTime}`

  showcaseMainData(data, isNight);
  assignWeatherDetails(data)

  cel = temperature;
  celFeelsLike = tempFeelsLike;

  displayLocalTime(timezoneOffset)
}

const displayLocalTime = (timezoneOffset) => {
  const utcDate = new Date(); 
  const utcOffset = utcDate.getTimezoneOffset() * 60; 
  const localTime = new Date(utcDate.getTime() + (utcOffset + timezoneOffset) * 1000); 

  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(localTime);
  const time = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  
  timeNow.innerHTML = `Today, ${dayName} at ${time}`;
};

const showcaseMainData = (data, isNight) => {
  const { name, main, weather, sys } = data;
  const temperature = Math.round(main.temp);
  const description = weather[0].description;
  const mainWeatherAspect = weather[0].main;
  const country = sys.country;

  const weatherIcons = {
    Thunderstorm: "images/thunderstorm.svg",
    Drizzle: "images/drizzle.svg",
    Snow: isNight ? "images/snow-night.svg" : "images/snow.svg",
    Fog: "images/fog.svg",
    Mist: "images/mist.svg",
    Haze: "images/fog.svg",
    Clear: isNight ? "images/clear-night.svg" : "images/clear.svg",
    Clouds: isNight ? "images/clouds-night.svg" : "images/clouds.svg",
    Rain: isNight ? "images/rain-night.svg" : "images/rain.svg"
};

weatherIcon.src = weatherIcons[mainWeatherAspect] || "images/default.svg"; 

  weatherInfo.innerHTML = `<img src="${weatherIcon.src}" alt="${mainWeatherAspect}" id="weather-icon" />
  <h2>${name}, ${country}</h2>
      <p id="temp">${temperature} °C</p>
      <p>${description}</p>`;
}

const assignWeatherDetails = (data) => {
  const weatherDetails = document.getElementsByClassName('weather-details');
  const detailsFeelsLike = document.getElementById('details-feels-like');
  const detailsSpeed = document.getElementById('details-speed');
  const detailsClouds = document.getElementById('details-clouds');
  const detailsHumidity = document.getElementById('details-humidity');


  const { clouds, rain, wind, main } = data;
  const cloudsLevel = clouds.all;
  const rainLevel = rain && rain['1h'] ? rain['1h'] : 0;
  const windSpeed = wind.speed;
  const tempFeelsLike = Math.round(main.feels_like);
  const humidity = main.humidity;

  weatherDetails[0].style.display = "flex";

  detailsFeelsLike.innerHTML = `<p class="details-value"  id="details-feels-like-text" styles="font-size=18px">${tempFeelsLike}  °C</p>
  <p class="detail-text">Feels like</p>`;
  detailsSpeed.innerHTML = `<p class="details-value" styles="font-size=18px">${windSpeed} m/s</p>
  <p class="detail-text">Wind speed</p>`;
  detailsClouds.innerHTML = `<p class="details-value" styles="font-size=18px">${cloudsLevel} %</p>
  <p class="detail-text">Clouds level</p>`;
  detailsHumidity.innerHTML = `<p class="details-value" styles="font-size=18px">${humidity} %</p>
  <p class="detail-text">Humidity</p>`;

}

const fetchDataFiveDayForecast = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`

  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    displayForecast(data);
    
  } catch (error) {
    console.error("Error fetching 5-day forecast:", error);
    document.getElementById('forecast-container').innerText = "Error fetching weather data. Please try again later.";
  }   
  
}


const formatDateForDayForecast = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const options = { weekday: 'long', day: 'numeric', month: 'numeric' };
  return date.toLocaleDateString('en-US', options); 
};

const displayForecast = (data) => {
  forecastContainerWrapper.style.display = "block";
  forecastContainer.innerHTML = ''; 
  
  const dailyForecasts = {};
  data.list.forEach(hourly => {
      const date = formatDateForDayForecast(hourly.dt);
      if (!dailyForecasts[date]) {
          dailyForecasts[date] = [];
      }
      dailyForecasts[date].push(hourly);
  });

  forecastCelsius = [];

  for (const [date, hourlyData] of Object.entries(dailyForecasts)) {
      const forecastCard = document.createElement('div');
      forecastCard.className = 'forecast-card';


      const avgTemp = hourlyData.reduce((acc, current) => acc + current.main.temp, 0) / hourlyData.length; 

      forecastCelsius.push(avgTemp);

      const description = hourlyData[0].weather[0].description; 
      const icon = `http://openweathermap.org/img/wn/${hourlyData[0].weather[0].icon}.png`;

      forecastCard.innerHTML = `
          <div>
              <p><strong>${date}</strong></p>
              <p>${description}</p>
          </div>
          <div>
              <img src="${icon}" alt="${description}">
              <p id="each-day-temp">${avgTemp.toFixed(0)}°C</p>
          </div>
      `;
    
      forecastContainer.appendChild(forecastCard);
  }
};

let forecastSource1

const fetchDataHourlyForecast = async (lat, lon) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY_WEATHERAPI}&q=${lat},${lon}&days=2&lang=en`


  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    const array1 = data.forecast.forecastday[0].hour
    const array2 = data.forecast.forecastday[1].hour
    const combinedArray1 = array1.concat(array2);

    displayHourlyForecast(combinedArray1, timezoneOffset);


    const currentHour = new Date().getHours();

    hourlyCelsius = combinedArray1.slice(currentHour + 1, currentHour + 25).map(hour => hour.temp_c);
    console.log(hourlyCelsius)
    await fetchDataHourlyForecastSecond(lat, lon);
    
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById('hourly-forecast-container').innerText = "Error fetching weather data. Please try again later.";
  }   
}

const fetchDataHourlyForecastSecond = async (lat, lon) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&timezone=auto`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const currentHour = new Date().getHours();

    const openMeteoTemps = data.hourly.temperature_2m.slice(currentHour + 1, currentHour + 25);
    displayTemperatureGraph(openMeteoTemps, hourlyCelsius); 

  } catch (error) {
    console.error("Error fetching Open-Meteo data:", error);
  }

};


// Then location time is next day, it starts from 00:00
function displayHourlyForecast(data, timezoneOffset) {
  hourlyForecastContainer.innerHTML = '';
  hourlyForecastWrapper.style.display = 'block'

  const now = new Date();
  const currentHourUTC = now.getUTCHours() + Math.floor(timezoneOffset / 3600);
  const currentMinuteUTC = now.getMinutes();
  let displayedHours = 0

  let startIndex = 0;
  for (let i = 0; i < data.length; i++) {
    const hourDate = new Date(data[i].time);
    const hourUTC = hourDate.getHours();

    if (hourUTC > currentHourUTC || (hourUTC === currentHourUTC && new Date(data[i].time).getUTCMinutes() >= currentMinuteUTC)) {
      startIndex = i;
      break;
    }
  }
  
  hourlyCelsius = [];

  for (let i = startIndex; i < data.length && displayedHours < 24; i++) {
    const hour = data[i];
    const hourDate = new Date(hour.time);
    
    const hourDiv = document.createElement('div');
    hourDiv.className = 'hour';

    const dayOptions = { weekday: 'long' };
    const day = hourDate.toLocaleDateString('en-US', dayOptions);
    const month = hourDate.getMonth() + 1;
    const dayOfMonth = hourDate.getDate(); 
    const formattedDate = `${day}, ${month.toString().padStart(2, '0')}/${dayOfMonth.toString().padStart(2, '0')}`;


    const icon = document.createElement('img');
    icon.src = hour.condition.icon; 
    icon.className = 'icon';

    const hourlyTemp = document.createElement('div');
    hourlyTemp.className = 'hourly-temp';
    hourlyTemp.textContent = `${Math.round(hour.temp_c)}°C`; 

    hourlyCelsius.push(Math.round(hour.temp_c));

    const time = document.createElement('p');
    time.textContent = hourDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    const dateDiv = document.createElement('div');
    dateDiv.className = 'hourly-date';
    dateDiv.textContent = formattedDate;
    
    hourDiv.appendChild(dateDiv);
    hourDiv.appendChild(time);
    hourDiv.appendChild(icon);
    hourDiv.appendChild(hourlyTemp);
    hourlyForecastContainer.appendChild(hourDiv);
    displayedHours++;
  }
}


const getCityCoordinates = async (city) => {
  try {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      console.log(`City found: ${lat}, ${lon})`);
      return { lat, lon };
    } else {
      throw new Error('No results found for the specified city.');
    }
  } catch (error) {
    console.error('Error fetching city coordinates:', error);
  }
};


// Search events
const suggestionsContainer = document.createElement('div');
suggestionsContainer.id = 'suggestions-container';
cityInput.parentNode.insertBefore(suggestionsContainer, searchBtn.nextSibling);

cityInput.addEventListener('focus', () => {

  suggestionsContainer.style.display = 'block';
  displaySuggestions([]);
});

cityInput.addEventListener('input', async (e) => {
  e.preventDefault()
  const query = cityInput.value.trim();

  if (query.length >= 1) { 
      const suggestions = await fetchCitySuggestions(query);
      displaySuggestions(suggestions);
  } else {
      clearSuggestions();
  }
});

const fetchCitySuggestions = async (query) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}&lang=en`;
  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error fetching city suggestions');
      const data = await response.json()
      return data;
  } catch (error) {
      console.error("Error fetching suggestions:", error);
      return [];
  }
};

searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (city !== "") {

      const coord = await getCityCoordinates(city)
      console.log(coord)
      if (coord) {
        fetchData(coord.lat, coord.lon);
        fetchDataFiveDayForecast(coord.lat, coord.lon)
        fetchDataHourlyForecast(coord.lat, coord.lon)
        initializeMap(coord.lat, coord.lon); 
      }
    }
    clearSuggestions();
});


let highlightedIndex = -1; 

const navigateSuggestions = (direction) => {
  const suggestionItems = document.querySelectorAll('.suggestion-item');
  if (suggestionItems.length === 0) return;

  if (highlightedIndex >= 0) {
    suggestionItems[highlightedIndex].classList.remove('highlighted');
  }
  if (direction === 'down') {
    highlightedIndex = (highlightedIndex + 1) % suggestionItems.length; 
  } else if (direction === 'up') {
    highlightedIndex = (highlightedIndex - 1 + suggestionItems.length) % suggestionItems.length; 
  }

  if (highlightedIndex >= 0) {
    suggestionItems[highlightedIndex].classList.add('highlighted');
  }
};


cityInput.addEventListener('keyup', (e) => {
  if (e.key === "ArrowDown") {
    e.preventDefault();
    navigateSuggestions('down');
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    navigateSuggestions('up');
  } else if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("search-btn").click();
    if (highlightedIndex >= 0) {
      const selectedSuggestion = document.querySelectorAll('.suggestion-item')[highlightedIndex];
        selectedSuggestion.click();
      }
    }
});


// Location events
locationBtn.addEventListener('click', () => {
  cityInput.value = '';
  getUserLocation();
});


// Function to convert temperature based on selected unit
const celsiusBtn = document.getElementById('celsius-btn');
const fahrenheitBtn = document.getElementById('fahrenheit-btn');
const kelvinBtn = document.getElementById('kelvin-btn');

let currentUnit = TEMPERATURE_UNITS.CELSIUS;

const updateTemperatureUnit = (unit) => {
  currentUnit = unit; 
  const tempConverted = convertTemperature(cel, unit);
  const feelsLikeConverted = convertTemperature(celFeelsLike, unit);

  document.getElementById("temp").innerHTML = `${tempConverted} ${unit}`;
  document.getElementById("details-feels-like-text").innerHTML = `${feelsLikeConverted} ${unit}`;

  const forecastCards = document.querySelectorAll('.forecast-card');
  forecastCards.forEach((card, index) => {
      const tempConverted = convertTemperature(forecastCelsius[index], unit);
      card.querySelector('#each-day-temp').innerHTML = `${tempConverted} ${unit}`;
  });

  const hourlyElements = document.querySelectorAll('.hour');
  hourlyElements.forEach((hourDiv, index) => {
      const tempConverted = convertTemperature(hourlyCelsius[index], unit);
      hourDiv.querySelector('.hourly-temp').innerHTML = `${tempConverted} ${unit}`;
  });
};

const convertTemperature = (tempInCelsius, unit) => {
  if (unit === TEMPERATURE_UNITS.FAHRENHEIT) {
      return Math.round(tempInCelsius * 1.8 + 32);
  } else if (unit === TEMPERATURE_UNITS.KELVIN) {
      return (tempInCelsius + 273.15).toFixed(2); 
  }
  return Math.round(tempInCelsius); 
};

const initializeTemperatures = () => {
  const forecastCards = document.querySelectorAll('.forecast-card');
  forecastCards.forEach((card) => {
      const tempCelsius = parseFloat(card.querySelector('#each-day-temp').textContent); 
      forecastCelsius.push(tempCelsius); 
  });

  const hourlyElements = document.querySelectorAll('.hour');
  hourlyElements.forEach((hourDiv) => {
      const tempCelsius = parseFloat(hourDiv.querySelector('.hourly-temp').textContent); 
      hourlyCelsius.push(tempCelsius); 
  });
};

celsiusBtn.addEventListener('click', () => {
  celsiusBtn.classList.add('active');
  fahrenheitBtn.classList.remove('active');
  kelvinBtn.classList.remove('active');
  updateTemperatureUnit(TEMPERATURE_UNITS.CELSIUS);
});

fahrenheitBtn.addEventListener('click', () => {
  fahrenheitBtn.classList.add('active');
  celsiusBtn.classList.remove('active');
  kelvinBtn.classList.remove('active');

  if (cel !== undefined) {
    let fer = cel * 1.8 + 32;
    let ferFeelsLike = celFeelsLike * 1.8 + 32;
    document.getElementById("temp").innerHTML = fer + "°F";
    document.getElementById("details-feels-like-text").innerHTML = ferFeelsLike + "°F";
  }

  const forecastCards = document.querySelectorAll('.forecast-card');
  forecastCards.forEach((card, index) => {
      const tempElement = card.querySelector('#each-day-temp');
      const tempCelsius = forecastCelsius[index];
      const tempFahrenheit = tempCelsius * 1.8 + 32;
      tempElement.innerHTML = `${tempFahrenheit.toFixed(0)}°F`;
  });

  const hourlyElements = document.querySelectorAll('.hour');
  hourlyElements.forEach((hourDiv, index) => {
      const tempElement = hourDiv.querySelector('.hourly-temp');
      const tempCelsius = hourlyCelsius[index];
      const tempFahrenheit = tempCelsius * 1.8 + 32;
      tempElement.innerHTML = `${tempFahrenheit.toFixed(0)}°F`;
  });
});

kelvinBtn.addEventListener('click', () => {
  kelvinBtn.classList.add('active');
  celsiusBtn.classList.remove('active');
  fahrenheitBtn.classList.remove('active');
  updateTemperatureUnit(TEMPERATURE_UNITS.KELVIN);
});

initializeTemperatures();


forecastContainer.addEventListener('wheel', (e) => {
  if (e.deltaY !== 0) {
    e.preventDefault();
    forecastContainer.scrollBy({
      left: e.deltaY < 0 ? -200 : 200,
      behavior: 'smooth'
    });
  }
});

hourlyForecastContainer.addEventListener('wheel', (e) => {
  if (e.deltaY !== 0) {
    e.preventDefault();
    hourlyForecastContainer.scrollBy({
      left: e.deltaY < 0 ? -200 : 200,
      behavior: 'smooth'
    });
  }
});

const currentDate = new Date();
formatDate(currentDate);


const updateBackgroundColor = (temperature, condition, isNight) => {
  const body = document.body;
  const mainWrapper = document.querySelector('.main-wrapper');

  mainWrapper.classList.remove(
    'weather-clear', 'weather-cloudy', 'weather-rainy', 'weather-snowy',
    'weather-clear-night', 'weather-cloudy-night', 'weather-rainy-night', 'weather-snowy-night'
);
body.classList.remove(
    'weather-clear', 'weather-cloudy', 'weather-rainy', 'weather-snowy',
    'weather-clear-night', 'weather-cloudy-night', 'weather-rainy-night', 'weather-snowy-night'
);
  
  if (condition.includes('clear')) {
    mainWrapper.classList.add(isNight ? 'weather-clear-night' : 'weather-clear');
    body.classList.add(isNight ? 'weather-clear-night' : 'weather-clear');
  } else if (condition.includes('cloud')) {
    mainWrapper.classList.add(isNight ? 'weather-cloudy-night' : 'weather-cloudy');
    body.classList.add(isNight ? 'weather-cloudy-night' : 'weather-cloudy');
  } else if (condition.includes('rain')) {
    mainWrapper.classList.add(isNight ? 'weather-rainy-night' : 'weather-rainy');
    body.classList.add(isNight ? 'weather-rainy-night' : 'weather-rainy');
  } else if (condition.includes('snow')) {
    mainWrapper.classList.add(isNight ? 'weather-snowy-night' : 'weather-snowy');
    body.classList.add(isNight ? 'weather-snowy-night' : 'weather-snowy');
  }
};

const isNightTime = (currentUnixTime, sunriseUnix, sunsetUnix) => {
  return currentUnixTime < sunriseUnix || currentUnixTime > sunsetUnix;
};



// Grapth for the next 24 hours from two sources  
let temperatureChart;

const displayTemperatureGraph = (openMeteoTemps, weatherApiTemps) => {
  const ctx = document.getElementById('temperatureChart')
  const canvas = ctx.getContext('2d');

  ctx.style.display = 'block';
  
  if (temperatureChart) {
    temperatureChart.destroy();
  }

  const currentHour = new Date().getHours();
  const labels = Array.from({ length: 24 }, (_, i) => {
    const nextHour = (currentHour + i + 1) % 24; // Calculate next hour
    return `${nextHour}:00`; // Create hour label
  });

  temperatureChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: labels, 
      datasets: [
        {
          label: 'WeatherAPI',
          data: weatherApiTemps,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
          tension: 0.4,
        },
        {
          label: 'Open-Meteo',
          data: openMeteoTemps,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
          tension: 0.4,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Temperature Forecast Comparison (Next 24 Hours)',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Hours',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Temperature (°C)',
          },
          beginAtZero: false,
        },
      },
    }
  });
};


// Add to favorite 
let favoriteLocations = [];

const displaySuggestions = (suggestions) => {
    clearSuggestions(); 
    suggestionsContainer.style.display = 'block';

    // Show favorite locations first
    favoriteLocations.forEach(location => {
        const favoriteItem = createSuggestionItem(location, true);
        suggestionsContainer.appendChild(favoriteItem);
    });

    highlightedIndex = -1;

    suggestions.forEach(suggestion => {
        const suggestionItem = createSuggestionItem(suggestion);
        suggestionsContainer.appendChild(suggestionItem);
    });
};

const createSuggestionItem = (suggestion, isFavorite = false) => {
    const suggestionItem = document.createElement('div');
    suggestionItem.className = 'suggestion-item';
    const countryFullName = countryNames[suggestion.country] || suggestion.country; 
    suggestionItem.textContent = `${suggestion.name}, ${countryFullName}`;

    const heartIcon = document.createElement('img');
    heartIcon.className = isFavorite ? 'heart-icon favorited' : 'heart-icon';
    heartIcon.src = isFavorite ? '/images/red-heart.svg' : '/images/heart.svg';

    heartIcon.addEventListener('click', (e) => {
        e.stopPropagation(); 
        toggleFavorite(suggestion);
        heartIcon.src = isFavorite ? '/images/heart.svg' : '/images/red-heart.svg';
    }); 

    suggestionItem.appendChild(heartIcon);
    suggestionItem.addEventListener('click', async () => {
        cityInput.value = suggestion.name;
        const coord = { lat: suggestion.lat, lon: suggestion.lon };
        if (coord) {
            await fetchData(coord.lat, coord.lon);
            await fetchDataFiveDayForecast(coord.lat, coord.lon);
            await fetchDataHourlyForecast(coord.lat, coord.lon);
            initializeMap(coord.lat, coord.lon); 
        }
        clearSuggestions(); 
    });

    return suggestionItem;
};

const toggleFavorite = (location) => {
    const index = favoriteLocations.findIndex(fav => fav.lat === location.lat && fav.lon === location.lon);
    if (index > -1) {
        favoriteLocations.splice(index, 1); 
    } else {
        favoriteLocations.push(location); 
    }
};

const clearSuggestions = () => {
    suggestionsContainer.style.display = 'none';
    suggestionsContainer.innerHTML = '';
};



// Create map with weather
let map; 

const initializeMap = (lat, lon) => {
  const mapContainer = document.getElementById('map'); 
  if (map) {
    map.remove();
  }
    
  map = L.map(mapContainer).setView([lat, lon], 7);
    
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  
  const weatherLayer = L.tileLayer(`https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${API_KEY}`, {
    layer: 'temp',
    maxZoom: 19,
    opacity: 0.5,
    attribution: 'Map data &copy; <a href="https://openweathermap.org">OpenWeatherMap</a>'
  });
  
  setTimeout(() => {
    const owmControls = document.querySelectorAll('.leaflet-control-layers-toggle'); // Example selector
    owmControls.forEach((control, index) => {
        control.id = `owm-control-${index}`;
        control.classList.add('custom-owm-control'); 
    });
  }, 500);

  const updateWeatherLayer = (layer) => {
    map.removeLayer(weatherLayer);
    weatherLayer.setUrl(`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${API_KEY}`);
    weatherLayer.addTo(map);
  };
  
  weatherLayer.addTo(map);
  
  const weatherOptions = ['temp', 'precipitation', 'clouds', 'wind'];
  let currentLayer = 'temp';
  
  weatherOptions.forEach(layer => {
    const button = document.createElement('button');
    button.innerText = `Show ${layer}`;
    button.onclick = () => {
      currentLayer = layer;
      updateWeatherLayer(layer);
    };
    document.body.appendChild(button);
  });
}
