const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
//configuraciones
app.set('port',process.env.PORT || 3001);

//middelwares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, "public")));

//rutas
app.use('/',require('./routes/routes'));
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port : ${app.get('port')}`);
});