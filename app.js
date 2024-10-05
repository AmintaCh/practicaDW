const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

const productosRoutes = require('./routes/productos');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/productos', productosRoutes);

app.get('/', (req, res) => {
  res.render('index'); 
});

app.post('/', require('./controller/usuarioController').iniciarSesion);

app.get('/productos/list', (req, res) => {
  res.render('index'); 
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});