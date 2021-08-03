class Empleado {
  static contadorEmpleado = 0;
  constructor(nombre, apellido, edad, cargo) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._cargo = cargo;
    this._idEmpleado = ++Empleado.contadorEmpleado;
  }
  get idEmpleado() {
    return this._idEmpleado;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }
  get cargo() {
    return this._cargo;
  }
  set cargo(cargo) {
    this._cargo = cargo;
  }
  info() {
    return `<li> Nombre: ${this.nombre} ${this.apellido} Edad: ${this.edad} Cargo: ${this.cargo}</li>`;
  }
}
const empleados = [];
let contador = 0;
let agregar = () => {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let cargo = document.getElementById("cargo").value;
  let mostrar = "";
  empleados.push(new Empleado(nombre, apellido, edad, cargo));

  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("cargo").value = "";
  for (const empleado of empleados) {
    mostrar += empleado.info();
    document.getElementById("elemento").innerHTML = "";
    document.getElementById("elemento").innerHTML = mostrar;
  }
  
};
