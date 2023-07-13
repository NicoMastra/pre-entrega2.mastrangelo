
  
 
  function mostrarCervezas(cliente) {
    let cervezasDisponibles = "Cervezas disponibles:\n";
  
    cervezas.forEach((cerveza) => {
      cervezasDisponibles += `${cerveza.estilo} - ${cerveza.tipo} ($${cerveza.precio})\n`;
    });
  
    alert(cervezasDisponibles);
  }
  
  function mostrarSaldo(cliente) {
    alert(`Tu saldo actual es: $${cliente.saldo}`);
  }
  
  function mostrarCarrito(cliente) {
    let carrito = "Carrito:\n";
  
    cliente.carrito.forEach((cerveza, index) => {
      carrito += `${index + 1}. ${cerveza.estilo} - ${cerveza.tipo} ($${cerveza.precio})\n`;
    });
  
    alert(carrito);
  }
  
  function agregarCervezaAlCarrito(cliente) {
    const estilo = prompt("Ingrese el estilo de la cerveza:");
    const cantidad = parseInt(prompt("Ingrese la cantidad de cervezas a agregar:"));
  
    cliente.agregarAlCarrito(estilo, cantidad);
  }
  
  function borrarCervezaDelCarrito(cliente) {
    const estilo = prompt("Ingrese el estilo de la cerveza a borrar:");
    const cantidad = parseInt(prompt("Ingrese la cantidad de cervezas a borrar:"));
  
    cliente.borrarDelCarrito(estilo, cantidad);
  }
  
  function mostrarResumenCompra(cliente) {
    let resumen = `Resumen de la compra de ${cliente.nombre}:\n\n`;
  
    cliente.compras.forEach((compra, index) => {
      resumen += `Compra ${index + 1}:\n`;
      resumen += `Cliente: ${compra.nombre}\n`;
      resumen += `Horario de entrada: ${compra.horario}\n`;
      resumen += "Carrito:\n";
  
      compra.carrito.forEach((cerveza) => {
        resumen += `${cerveza.estilo} - ${cerveza.tipo} ($${cerveza.precio})\n`;
      });
  
      resumen += `Total: $${compra.total}\n\n`;
    });
  
    alert(resumen);
  }
  
  function mostrarMenu(cliente) {
    let opcion;
  
    do {
      opcion = prompt(
        `Bienvenido, ${cliente.nombre}!\n\nElija una opción:\n1. Mostrar cervezas disponibles\n2. Mostrar saldo\n3. Mostrar carrito\n4. Agregar saldo\n5. Agregar cerveza al carrito\n6. Borrar cerveza del carrito\n7. Comprar\n8. Mostrar resumen de compras\n9. Cerrar sesión`
      );
  
      switch (opcion) {
        case "1":
          mostrarCervezas(cliente);
          break;
        case "2":
          mostrarSaldo(cliente);
          break;
        case "3":
          mostrarCarrito(cliente);
          break;
        case "4":
          const monto = parseInt(prompt("Ingrese el monto a agregar:"));
          cliente.agregarSaldo(monto);
          alert(`Se agregó $${monto} a tu saldo actual.`);
          break;
        case "5":
          agregarCervezaAlCarrito(cliente);
          break;
        case "6":
          borrarCervezaDelCarrito(cliente);
          break;
        case "7":
          cliente.comprar();
          break;
        case "8":
          mostrarResumenCompra(cliente);
          break;
        case "9":
          alert("Sesión cerrada. ¡Hasta luego!");
          return; // Salir del programa
        default:
          alert("Opción inválida. Inténtalo de nuevo.");
      }
    } while (true);
  }
  
  function iniciarSesion() {
    const nombre = prompt("Ingrese su nombre:");
    const cliente = new Cliente(nombre);
  
    mostrarMenu(cliente);
  }
  
  iniciarSesion();
  
  