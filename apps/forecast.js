var ForecastIo = require('forecastio');
 
var forecastIo = new ForecastIo('2c5ab0e71712ba7efdfafbf78d966feb');
//Code works by putting in the longitude and latitude in here I used Nigeria's Long and Lat
forecastIo.forecast('9.0820', '8.6753').then(function(data) {
  console.log(JSON.stringify(data, null, 2));
});