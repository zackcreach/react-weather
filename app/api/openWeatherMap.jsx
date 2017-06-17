var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&APPID=371040ad93154f5e388e8651550bbabf&units=imperial';

// 371040ad93154f5e388e8651550bbabf

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error('Unable to fetch weather');
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.response.data.message);
    });
  }
}
