const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
//configuraciones
app.set('port',process.env.PORT || 3001);

//middelwares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');

//rutas
app.use('/',require('./routes/routes'));

app.listen(app.get('port'),()=>{
    console.log(`Server on listen on port : ${app.get('port')}`);
});