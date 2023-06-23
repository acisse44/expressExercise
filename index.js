const express = require("express"); //we are importing the express package
const app = express(); 
const PORT = 8080; //specifying the port 



//if you want to import a file from your application, create a const 
const maliRoute = require('./routes/mali');
const pakiRoute = require('./routes/pakistan');
const egyptRoute = require('./routes/egypt');


//applying the routes with what we set equal to express, for the route we want it to be
app.use('/mali', maliRoute);
app.use('/pakistan', pakiRoute);
app.use('/egypt', egyptRoute);





app.listen(PORT, () => {
    console.log(" The server is running");

});

