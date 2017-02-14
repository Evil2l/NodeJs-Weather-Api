
// forecast.io s/k: 230c8c428ba12bbb2eee4e64743d2507
// forecat.io: https://api.darksky.net/forecast/230c8c428ba12bbb2eee4e64743d2507/37.8267,-122.4233


const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const forecast = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demanded: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.a, (err, result)=>{
    if(err){
        return console.log(`Error: ${err}`);
    }
        console.log(JSON.stringify(result, undefined, 2));

        forecast.getWeather(result.latitude, result.longitude, (err, weatherResult)=>{
            if(err){
                return console.log(`Error: ${err}`);
            }
            console.log(JSON.stringify(weatherResult, undefined, 2));
        });
});







