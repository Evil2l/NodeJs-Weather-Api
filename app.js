

const request = require('request');
const yargs = require('yargs');
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

console.log(argv);
let encodedAddress = encodeURIComponent(argv.a);
console.log(encodedAddress);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=+${encodedAddress}`,
    json: true
}, (err, response, body) => {
    if(err){
        console.error(`${err}`);
    }else if(body.status === 'ZERO_RESULTS'){
        console.error(`Unable to find that address`);
    }
    else if(body.status === 'OK'){
        console.log(`Address: ${body.results[0].geometry.location.lat}`);
    }
});
