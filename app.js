const express = require('express');
const app = express();
const home = require('./app/routes/home');
/*app.use(bodyParser.json());
app.use(function (err, req, res) {
    res.status(415).send("Bad body Format");
});*/
app.use('/',home);
const port = 3000;
app.listen(port,()=>{
    console.log(`app  running and listening on port : ${port}`);
});