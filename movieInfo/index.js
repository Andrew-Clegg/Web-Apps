let express = require('express');
const { get } = require('express/lib/response');
let app =express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get("/",function(request, response){
    response.sendFile("showtimes.html");
});

app.use("/showtimes", function(request,response,next){
    console.log("Retrive data from database");
    next();
});

app.post('/search', function(request,response){
    
    console.log("Ruinining");
    console.log(request.body);

});

function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

$('location').onclick(function(){
    document.getElementById("myDropdown").classList.toggle("show");

});


app.set('port',process.env.PORT ||4500);
app.listen(app.get('port'),function(){
    console.log(`Nodejs Server is up and listing to port ${app.get('port')}`);
});