const db = require('../conexion/conexion')

exports.getProductos = async (req, res) => {
    const query = 'SELECT * FROM '
    try {
      const [productos] = await db.query(query);
      res.json(productos);
    } catch (error) {
      console.error('Error al obtener las productos:', error);
      res.status(500).send('Error al obtener las productos');
    }
  };
  