var express = require('express');
var hbs = require('express-handlebars');

var app = express();

var weatherData = {
    "city" : [
        {name:'New York'},
        {name: 'Boston'}
    ]
};

var portNum = process.env.PORT || 8888;
app.set('port', portNum);

function getWeatherData(){
    return {
        locations: [
            {
                name : "New York",
                tempValue : "68.72F",
                description: "Clear Sky",
                hiTemp: "72F",
                loTemp: "66F",
                speedValue : "3.4MPH",
                cloudCover : "0% Cloud Cover",
            },
            {
                name: "Boston",
                tempValue : "69.57F",
                description: "Clear Sky",
                hiTemp: "72F",
                loTemp: "66F",
                speedValue : "0.89MPH",
                cloudCover : "0% Cloud Cover",
            }
        ],
    };
};

// tell express to use handlebars
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('home', weatherData);
});

// start server
app.listen(portNum, function() {
    console.log('listening on port', portNum);
});

app.use(function(req, res, next){
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weather = getWeatherData();
    next();
});

