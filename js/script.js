const $ = selector => { return document.querySelector(selector) };


const goGetWeather = (lat, lon) => {

  $(`#loading`).classList.add(`show`);

  const key = `6dec5fb891e6e243c9d8c20351998e67`;
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${key}&lat=${lat}&lon=${lon}`;

  fetch( url ).then( response => {
    response.json().then( data => {
      console.log(data); 
  
      $(`#loading`).classList.remove(`show`);

      const { sys:{country, sunrise,sunset}, main:{temp}, weather, name, dt } = data;

      const { width, height } = window;

      $(`#temp`).innerHTML = `${temp}&deg;C`;
      
      const iconImg = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
      $(`#icon`).innerHTML = `<img src="${iconImg}" alt="${weather[0].main}">`;

 
      $(`#content`).style.backgroundImage = `url("https://source.unsplash.com/random/1000×1000/?${name},${weather[0].main},skyline")`

      $(`#name`).innerHTML = `<div class="city-name" id="name">${name}, ${country}</div>`

    });
  });

}



const goGetWeather1 = (lat1, lon1) => {

  $(`#loading1`).classList.add(`show`);

  const key = `6dec5fb891e6e243c9d8c20351998e67`;
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${key}&lat=${lat1}&lon=${lon1}`;

  fetch( url ).then( response => {
    response.json().then( data => {
      console.log(data); 
  
      $(`#loading`).classList.remove(`show`);

      const { sys:{country, sunrise,sunset}, main:{temp}, weather, name, dt } = data;

      const { width, height } = window;

      $(`#temp1`).innerHTML = `${temp}&deg;C`;
      
      const iconImg = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
      $(`#icon1`).innerHTML = `<img src="${iconImg}" alt="${weather[0].main}">`;

 
      $(`#content1`).style.backgroundImage = `url("https://source.unsplash.com/random/1000×1000/?${name},${weather[0].main},skyline")`

      $(`#name1`).innerHTML = `<div class="city-name" id="name">${name}, ${country}</div>`

    });
  });

}


window.onload = () => { navigator.geolocation.getCurrentPosition( 
  ( {coords: {latitude, longitude}} ) => { 
    goGetWeather(latitude, longitude);
    goGetWeather1(latitude+5, longitude+5); 
  },
  ( {code, message} ) => { // bad
    console.warn(`Woops! Error ${code}: ${message}`);
  }
)};

