import Prestamo from './prestamo.js';
import Simulacion from './simulacion.js';

// FUNCIONES
export function simularOpciones(m, min, max){

    const pso = [];
    var x;
    var i = min;

    while (i <= max) {
        x = new Simulacion("T", m, i);
        x.calcularinteres();
        x.calcularCuotas();
        pso.push(x);
        
        i = i*2;
    }

    if(document.getElementById("opciones") == null){
        var newPar02 = document.createElement("p");
        newPar02.setAttribute("id", "opciones")
    }else{
        newPar02 = document.getElementById("opciones");
        newPar02.innerHTML = "";
    }     
 
    pso.forEach(e => e.imprimir("lista-opciones", newPar02));

}

export function cargarPrestamos(){
    let prestamosActivos = [];

    let listaJSON = JSON.parse(localStorage.getItem("lista"));

    for (let p of listaJSON)
        prestamosActivos.push(new Prestamo (p));    
    
    console.log(prestamosActivos);
    prestamosActivos.forEach(e => e.imprimir());

}