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

    if( $("#opciones").length === 0){
        var newPar02 = document.createElement("div");
        newPar02.setAttribute("id", "opciones")
        $("#lista-opciones").append(newPar02);
    }else{
        // newPar02 = document.getElementById("opciones");
        // newPar02.innerHTML = "";
        $("#opciones").html("");
    }     
 
    pso.forEach(e => e.imprimir("opciones"));

}

export function cargarPrestamos(){
    let prestamosActivos = [];

    let listaJSON = JSON.parse(localStorage.getItem("lista"));

    for (let p of listaJSON)
        prestamosActivos.push(new Prestamo (p));    
    
    prestamosActivos.forEach(e => e.imprimir());

}