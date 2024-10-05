document.getElementById('formInicioSesion').addEventListener('submit', async function(e) {
    e.preventDefault(); // Evitar que el formulario recargue la página
  
    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, password })
      });
  
      const data = await response.json();
      
      if (response.ok) {
        alert(data.message); 
        console.log('Usuario autenticado:', data.user);
      } else {
        alert(data.message); 
      }
      
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      alert('Error al intentar iniciar sesión');
    }
  });
  