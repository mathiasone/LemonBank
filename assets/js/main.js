import Prestamo from './prestamo.js';
import Simulacion from './simulacion.js';
import{mesesMin, mesesMax} from './simulacion.js';
import * as misFunciones from './funciones.js';

// Datos creado con formato JSON guardados en localstorage
var JSON1 = {
    "tipo": "T",
    "monto": 10000,
    "montoTotal": 13500,
    "montoCuota": 2250,
    "meses": 6,
    "cuotasPagas": 3,
    "activo":true
}

var JSON2 = {
    "tipo": "T",
    "monto": 20000,
    "montoTotal": 27000,
    "montoCuota": 4500,
    "meses": 6,
    "cuotasPagas": 3,
    "activo":true
}


let PrestamosJSON=[];
PrestamosJSON.push(JSON1);
PrestamosJSON.push(JSON2);

localStorage.setItem("lista", JSON.stringify(PrestamosJSON));

// EVENTOS
window.addEventListener('DOMContentLoaded', misFunciones.cargarPrestamos, false);
document.getElementById("btnSimular").addEventListener("click", btnSimular);
document.getElementById("monto").addEventListener("keypress", enterMonto);
document.getElementById("cuotas").addEventListener("keypress", enterCuotas);

function enterMonto(e){
    if(e.wich == 13 || e.keyCode == 13 ){
        console.log("presionó la tecla Enter");
        let simu1 = new Simulacion('T', parseInt(document.getElementById("monto").value),0)
        simu1.validarMonto()
    }
}

function enterCuotas(e){
    if(e.wich == 13 || e.keyCode == 13 ){
        console.log("presionó la tecla Enter");
        let simu2 = new Simulacion('T', parseInt(document.getElementById("monto").value),0)
        simu2.validarMeses();

    }
}



// EJECUCION CODIGO MAIN.JS
function btnSimular(){
    var p1;

    let monto = parseInt(document.getElementById("monto").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);

    p1 = new Simulacion('T', monto, cuotas);
    let simulacionOK = p1.simular();

    if(simulacionOK){
        if(! document.getElementById("lista-simulaciones").hasChildNodes()){
            let newH201 = document.createElement("h2");
            newH201.innerHTML = "Simulación";
            document.getElementById("lista-simulaciones").appendChild(newH201);
        }
    
        if(! document.getElementById("lista-opciones").hasChildNodes()){    
            let newH202 = document.createElement("h2");
            newH202.innerHTML = "Otras Opciones";
            document.getElementById("lista-opciones").appendChild(newH202);
        }
        
        misFunciones.simularOpciones(p1.monto, mesesMin, mesesMax);
    }
}