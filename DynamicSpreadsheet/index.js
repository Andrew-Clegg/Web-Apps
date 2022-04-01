let express = require('express');

let app = express();

app.get('/',function(request, response){
    response.send("Welcome to our PAge")

    response.send("<button>btn</button>")
});


app.set("port",process.env.PORT||4500);

app.listen(app.get('port'), function(){
    console.log(`Nodejs Server is up and listening to port ${app.get('port')}`)
});