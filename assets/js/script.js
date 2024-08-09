let formulario = document.querySelector('form');

let agregar = (event) => {
    event.preventDefault();
    let propietario = document.getElementById('propietario').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;

    switch (tipo) {
        case 'perro':
            let perro = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
            mostrarDatos(perro);
            break;
        case 'gato':
            let gato = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
            mostrarDatos(gato);
            break;
        case 'conejo':
            let conejo = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
            mostrarDatos(conejo);
            break;

        default:
            break;
    }
}

let mostrarDatos = (mascota) => {
    let resultado = document.querySelector("#resultado ul");
    let mensajePropietario = `${mascota.datosPropietario()}`;
    let mensajeMascota = ` El tipo de animal es un ${mascota._tipo} , Mientras que el nombre de la mascota es ${mascota._nombreMascota} y la enfermedad es ${mascota._enfermedad}`

    let mensajeFinal = `${mensajePropietario} ${mensajeMascota}`;
    resultado.innerHTML = mensajeFinal;
}

formulario.addEventListener('submit', agregar);


class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
        this.nombrePropietario = nombrePropietario;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `El Nombre del Propietario es ${this.nombrePropietario} 
        , su dirección es ${this.direccion} ,
        su número telefónico es ${this.telefono}`;
    }

}
class Animal extends Propietario {
    constructor(nombrePropietario, direccion, telefono, tipo) {
        super(nombrePropietario, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`
    }

}

class Mascota extends Animal {
    constructor(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombrePropietario, direccion, telefono, tipo);
        this.nombreMascota = nombreMascota;
        this.enfermedad = enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }
    get enfermedad() {
        return this._enfermedad;
    }

    set nombreMascota(nombreMascotaRecibido) {
        this._nombreMascota = nombreMascotaRecibido;
    }
    set enfermedad(enfermedadRecibida) {
        this._enfermedad = enfermedadRecibida;
    }
}