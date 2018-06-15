const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedURL = encodeURI(direccion);
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAiRO-d0Xk9nF4lrfvy54YQNZ_lr7RAVvk`)
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${encodedURL}`);
    } else {

    }
    //console.log(JSON.stringify(response.data, undefined, 2))
    let result = response.data.results[0];
    let format1 = result.formatted_address;
    let latitud = result.geometry.location.lat;
    let longitud = result.geometry.location.lng;
    return {
        direccion: format1,
        latitud,
        longitud,
    }
}
module.exports = {
    getLugarLatLng,
}