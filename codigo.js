
 const claveApi ='e807e91f022e45e4851231727252204'; 
 const idioma = 'es';
 const inpCiudad = document.getElementById('input-ciudad');


async function obtenerClima() {

    const ciudad = inpCiudad.value;

    if (!ciudad) {
        alert('Por favor, ingresa una ciudad');
        return;
    }
    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
 
    const response = await fetch(apiClimaActual);
    const data = await response.json();
 
    mostrarClima(data);

    function mostrarClima(data) {
        document.querySelector('.clima-icono').src = data.current.condition.icon;
        document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
        document.querySelector('.temp').innerHTML = data.current.temp_c + 'ºC';
        document.querySelector('.ciudad').innerHTML = data.location.name;
        document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
        document.querySelector('.viento').innerHTML = data.current.wind_kph + 'km/h';
        document.querySelector('.pais').innerHTML = data.location.country;

        document.querySelector('.name').innerHTML = data.location.name;
        document.querySelector('.region').innerHTML = data.location.region;
        document.querySelector('.tz_id').innerHTML = data.location.tz_id;
        document.querySelector('.localtime').innerHTML = data.location.localtime;

    }
} 

