const axios = require('axios');
const getClima = async(lat, lng) => {
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)
    if (response.data.cod === 400) {
        throw new Error(`No hay resultado para la ciudad ${encodedURL}`);
    }
    return response.data.main.temp;
}

module.exports = {
    getClima,
}