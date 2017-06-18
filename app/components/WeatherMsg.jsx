var React = require('react');

var WeatherMsg = ({temp, location}) => {
  return(
    <div>
      <h3 className="text-center">It's {temp} in {location}</h3>
    </div>
  )
};

module.exports = WeatherMsg;
