let express = require('express');
const { get } = require('express/lib/response');
let session = require('express-session');
const path = require('path');
let app =express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(session({
    //genid: "111",
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    //cookie: { secure: true }
}));
app.get("/",function(request, response){
    response.send(`<html><p>Please direct to /showtimes  ${path}</p></html>`);
    console.log(path);
});



app.get("/showtimes", function(request, response){
    response.sendFile("./public/showtimes.html");
    response.send("???");
});

app.post('/search', function(request,response){
    
    console.log("Ruinining");
    console.log(request.body);

});

function myFunction(){
    console.log("location retrive")
}



app.set('port',process.env.PORT ||4500);
app.listen(app.get('port'),function(){
    console.log(`Nodejs Server is up and listing to port ${app.get('port')}`);
});