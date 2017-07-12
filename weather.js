const request = require ('request')


const forecast = "https://api.darksky.net/forecast/" + "aa3a7559a952f9b3c55357e2a80b500f" + "/43.700,-79.5667"


request(forecast, function (error, response, body) {
    body = JSON.parse(body)
  // console.log('error:', error); // Print the error if one occurred 
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('temperature:' + body.currently.temperature); // Print the HTML for the Google homepage. 
});