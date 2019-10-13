var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const fetchWeatherInfo = async () => {
    const weather = await fetch('https://elmasry-weather-api.herokuapp.com/');
    const data = await weather.json();
    console.log(data);
    return data;
}
//fetchWeatherInfo();

const setInfo = () => {
    const Loader=document.querySelector('.show-hide');
    const content =document.querySelector('.show-hide-content');
    fetchWeatherInfo().then(data => {
       Loader.style.display='none'
       content.style.display="block"
    console.log(data);
        const address = document.querySelector('.address');
        const dataNow = document.querySelector('.data-Now');
        const iconDisp = document.querySelector('.icon-Display');
        const temp = document.querySelector('.temp');
        const humidity = document.querySelector('.humidity');
        const windSpeed = document.querySelector('.wind-speed');
        const preProb = document.querySelector('.precip-prob');
        const desc = document.querySelector('.desc');
        const day1dat = document.querySelector('.da1-date');
        const day2dat = document.querySelector('.da2-date');
        const day3dat = document.querySelector('.da3-date');

        const day1icon = document.querySelector('.da1-icon');
        const day2icon = document.querySelector('.da2-icon');
        const day3icon = document.querySelector('.da3-icon');

        const day1desc = document.querySelector('.da1-desc');
        const day2desc = document.querySelector('.da2-desc');
        const day3desc = document.querySelector('.da3-desc');


        const day1hd = document.querySelector('.da1-high-down');
        const day2hd = document.querySelector('.da2-high-down');
        const day3hd = document.querySelector('.da3-high-down');
        //address
        address.innerHTML = `<img src="${data.weather[0].countryFlag}" width="30" height="30"/>
        ${data.weather[0].country}
        -${data.weather[0].region}
        `
        //date
        const dateMan = manipulateDate(data.weather[1].currently.date);
        dataNow.innerHTML = `${dateMan}`
        //icon
        const icon = getIcon(data.weather[1].currently.icon);
        iconDisp.innerHTML = `${icon}`

        //tempature
        const tempda = data.weather[1].currently.temperature;
        temp.innerHTML = `Tempature  ${tempda} &#8451; |`

        //humidity
        humidity.innerHTML = `Humidity  ${data.weather[1].currently.humidity * 100} % |`

        //wind speed 
        windSpeed.innerHTML = `windSpeed  ${data.weather[1].currently.windSpeed} km/h|`

        //rain
        preProb.innerHTML = `precipProbability ${data.weather[1].currently.precipProbability}`

        //Descripition
        desc.innerHTML = ` ${data.weather[1].currently.summary}`

        // First Day of predication
        var predicationDays = data.weather[2];
        //days Dates
        const day1Date = predicationDays.day1.date;
        const day2Date = predicationDays.day2.date;
        const day3Date = predicationDays.day3.date;
        //icons
        const day1Icon = predicationDays.day1.icon;
        const day2Icon = predicationDays.day2.icon;
        const day3Icon = predicationDays.day3.icon;
        //Summary
        const day1summary = predicationDays.day1.summary;
        const day2summary = predicationDays.day2.summary;
        const day3summary = predicationDays.day3.summary;
        //high
        const day1high = predicationDays.day1.high;
        const day2high = predicationDays.day2.high;
        const day3high = predicationDays.day3.high;
        //down
        const day1down = predicationDays.day1.down;
        const day2down = predicationDays.day2.down;
        const day3down = predicationDays.day3.down;
        //Day1
        day1dat.innerHTML = `${manipulateDate(day1Date)}`;
        day1icon.innerHTML = `${getIcon(day1Icon)}`;
        day1desc.innerHTML = `${day1summary}`;
        day1hd.innerHTML = `${day1high}&#8451; |${day1down}&#8451;`;
        //Day2
        day2dat.innerHTML = `${manipulateDate(day2Date)}`;
        day2icon.innerHTML = `${getIcon(day2Icon)}`;
        day2desc.innerHTML = `${day2summary}`;
        day2hd.innerHTML = `${day2high}&#8451; |${day2down}&#8451;`;
        //Day3
        day3dat.innerHTML = `${manipulateDate(day3Date)}`;
        day3icon.innerHTML = `${getIcon(day3Icon)}`;
        day3desc.innerHTML = `${day3summary}`;
        day3hd.innerHTML = `${day3high}&#8451; |${day3down}&#8451;`;

    })
        .catch(err => console.log(err))

}
setInfo();

function manipulateDate(date) {
    let dat = new Date(date * 1000);
    dat = dat.toLocaleDateString("en-US", options);
    return dat;
}
function getIcon(icon) {
    // let icon;
    if (icon == 'clear-day') {
        icon = '<i class="wi wi-day-sunny icon "></i>'
        return icon;
    }
    else if (icon == 'clear-night') {
        icon = '<i class="wi wi-night-clear icon"></i>'
        return icon;
    }
    else if (icon == 'rain') {
        icon = '<i class="wi wi-rain icon"></i>'
        return icon;
    }
    else if (icon == 'snow') {
        icon = '<i class="wi wi-snow icon"></i>'
        return icon;
    }
    else if (icon == 'sleet') {
        icon = '<i class="wi wi-sleet icon"></i>'
        return icon;
    }
    else if (icon == 'wind') {
        icon = '<i class="wi wi-strong-wind icon"></i>'
        return icon;
    } else if (icon == 'fog') {
        icon = '<i class="wi wi-fog icon"></i>'
        return icon;
    } else if (icon == 'cloudy') {
        icon = '<i class="wi wi-cloudy icon"></i>'
        return icon;
    }
    else if (icon == 'partly-cloudy-day') {
        icon = '<i class="wi wi-day-sunny-overcast icon"></i>'
        return icon;
    } else if (icon == 'partly-cloudy-night') {
        icon = '<i class="wi wi-night-alt-partly-cloudy icon"></i>'
        return icon;
    } else {
        icon = '<i class="wi wi-thermometer icon"></i>'
        return icon;
    }
}