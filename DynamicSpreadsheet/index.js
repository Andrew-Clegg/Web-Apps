let express = require('express');
let session = require('express-session');
const { get } = require('express/lib/response');
let app = express();


app.use(express.static('public'));
app.use(session({
    //genid: "111",
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    //cookie: { secure: true }
}));
app.use(express.urlencoded({extended: false}));
app.get('/',function(request, response){
        //served statically. Not recommend
    response.sendFile( __dirname +'index.html');
});


app.set("port",process.env.PORT||4500);

app.listen(app.get('port'), function(){
    console.log(`Nodejs Server is up and listening to port ${app.get('port')}`)
});