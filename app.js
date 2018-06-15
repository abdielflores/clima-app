const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
//const axios = require('axios');
const argv = require('yargs')
    .option({
        direccion: {
            alias: 'd',
            description: 'Direccion de la ciudad para obtener el clima',
            demand: true,
        },
    })
    .argv;
let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.latitud, coors.longitud);
        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo obtener el clima de ${direccion}`;
    }
}
getInfo(argv.direccion)
    .then(response => console.log(response))
    .catch(e => console.log(e))

/*lugar.getLugarLatLng(argv.direccion)
    .then(response => {
        clima.getClima(response.latitud, response.longitud)
            .then(resp => { console.log(`La temperatura es ${resp}`) })
            .catch(err => console.log(err))
    })
    .catch(e => console.log(e))
    //console.log(argv.direccion);
*/
/*let encodedURL = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAiRO-d0Xk9nF4lrfvy54YQNZ_lr7RAVvk`)
    .then(response => {
        //console.log(JSON.stringify(response.data, undefined, 2))
        let result = response.data.results[0];
        let format1 = result.formatted_address;
        let latitud = result.geometry.location.lat;
        let longitud = result.geometry.location.lng;
        console.log(format1);
        console.log(latitud);
        console.log(longitud);
    })
    .catch(e => console.log('Error', e))*/
/*
axios.get('/user?ID=12345')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });

// Optionally the request above could also be done as
axios.get('/user', {
        params: {
            ID: 12345
        }
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });*/