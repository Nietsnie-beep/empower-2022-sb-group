const express = require("express");
const exphbs = require("express-handlebars");
const hbs = require('hbs');
const indexRoutes = require("./routes/index");
const distribuidoresRoutes = require("./routes/distribuidores");
const clienteRoutes = require("./routes/cliente");


const path = require("path");
const morgan = require('morgan');
const app = express();

app.set("views", path.join(__dirname, "views"));

// view engine setup
app.set('view engine', 'hbs');
app.engine( 'hbs', exphbs.engine( {
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
  }));

  app.use(express.static('public'));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//routes
app.use(indexRoutes);
app.use('/distribuidores', distribuidoresRoutes);
app.use('/cliente', clienteRoutes);



module.exports = app;
