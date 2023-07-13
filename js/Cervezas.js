class Cerveza {
    constructor(estilo, tipo, precio) {
      this._estilo = estilo;
      this._tipo = tipo;
      this._precio = precio;
    }
  
    get estilo() {
      return this._estilo;
    }
  
    get tipo() {
      return this._tipo;
    }
  
    get precio() {
      return this._precio;
    }
  }
  
  const cervezas = [
    new Cerveza("IPA", "Rubia", 350),
    new Cerveza("Stout", "Oscura", 300),
    new Cerveza("Blonde", "Rubia", 300),
  ];
  