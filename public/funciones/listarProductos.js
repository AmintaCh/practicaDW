async function listarProducto() {
    try {
      const response = await fetch('/productos');
      const producto = await response.json(); 
  
      const tbody = document.querySelector('table tbody');
      tbody.innerHTML = '';
  
      empresas.forEach((producto, index) => {
        const row = `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${producto.codigo}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio_venta}</td>
            <td>${producto.presio_oferta}</td>
            <td>${producto.presio_oferta}</td>
            <td>${producto.oferta}</td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
  
    } catch (error) {
      console.error('Error al listar los productos:', error);
    }
  }