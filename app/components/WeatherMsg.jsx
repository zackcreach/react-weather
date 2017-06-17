var React = require('react');

var WeatherMsg = ({temp, location}) => {
  return(
    <div>
      <p>It's {temp} in {location}</p>
    </div>
  )
};

module.exports = WeatherMsg;
