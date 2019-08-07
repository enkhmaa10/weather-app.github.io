const key =`111b9fbce038657f7a6b299925f37d50`

const city = `Mongolia`

const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${key}&q=${city}`; 
  fetch( url ).then( response => {
    response.json().then( data => {
      console.log(data);
  });
});

