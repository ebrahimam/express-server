const express = require('express');

const app = express();
//define server port Like 3000
const PORT = 3000;


//create a endpoint for send request (get request)
app.get('/', (req, res) => {
      res.status(200);
      res.send("Welcome to root URL of Server");
});


//listining port to start server
app.listen(PORT, (error) => { console.log("Error ocurred :)" + error) });