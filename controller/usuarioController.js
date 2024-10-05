const db = require('../conexion/conexion');

exports.iniciarSesion = async (req, res) => {
  const { nombre, password } = req.body;

  console.log(req.body);

  const query = `
    SELECT * FROM bp_clientes
    WHERE nombre = ? AND password = ?
  `;

  try {
    const [results] = await db.query(query, [nombre, password]);

    if (results.length > 0) {
      res.status(200).json({ message: 'Inicio de sesión exitoso', user: results[0] });
    } else {
      res.status(401).json({ message: 'Nombre o contraseña incorrectos' });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).send('Error al iniciar sesión');
  }
};
