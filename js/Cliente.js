class Cliente {
  constructor(nombre) {
    this._nombre = nombre;
    this._saldo = 0;
    this._carrito = [];
    this._compras = [];
    this._horarioEntrada = new Date();
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(saldo) {
    this._saldo = saldo;
  }

  get carrito() {
    return this._carrito;
  }

  set carrito(carrito) {
    this._carrito = carrito;
  }

  get compras() {
    return this._compras;
  }

  set compras(compras) {
    this._compras = compras;
  }

  get horarioEntrada() {
    return this._horarioEntrada;
  }

  agregarSaldo(monto) {
    this._saldo += monto;
  }

  agregarAlCarrito(estilo, cantidad) {
    const cervezaEncontrada = cervezas.find(
      (cerveza) => cerveza.estilo === estilo
    );

    if (cervezaEncontrada) {
      for (let i = 0; i < cantidad; i++) {
        this._carrito.push(cervezaEncontrada);
      }
      alert(`Se agregaron ${cantidad} cervezas al carrito.`);
    } else {
      alert("No se encontró la cerveza. Inténtalo de nuevo.");
    }
  }

  borrarDelCarrito(estilo, cantidad) {
    let contador = 0;

    for (let i = this._carrito.length - 1; i >= 0; i--) {
      if (this._carrito[i].estilo === estilo) {
        this._carrito.splice(i, 1);
        contador++;
        if (contador === cantidad) {
          break;
        }
      }
    }

    if (contador > 0) {
      alert(`Se eliminaron ${contador} cervezas del carrito.`);
    } else {
      alert(
        "No se encontraron cervezas del estilo especificado en el carrito."
      );
    }
  }

  comprar() {
    const total = this._carrito.reduce(
      (sum, cerveza) => sum + cerveza.precio,
      0
    );

    if (total > this._saldo) {
      alert("No tienes suficiente saldo para realizar la compra.");
      return;
    }

    this._saldo -= total;
    this._compras.push({
      nombre: this._nombre,
      carrito: this._carrito,
      total,
      horario: this._horarioEntrada,
    });
    this._carrito = [];

    alert(`Compra realizada. Se descontó $${total} de tu saldo.`);
  }
}
