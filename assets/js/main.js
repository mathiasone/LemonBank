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
$(document).ready(misFunciones.cargarPrestamos);
$("#btnSimular").click(btnSimular);
$("#btnOpciones").click(btnVerOpciones);
$("#monto").keypress(enterMonto);
$("#cuotas").keypress(enterCuotas);
$("#monto").change(() =>{$("#btnSimular").prop("disabled", false);
                           $("#btnOpciones").prop("disabled", false);});
//$("#cuotas").change(enterCuotas);

// VALIDACIONES
function enterMonto(e){
    if(e.wich == 13 || e.keyCode == 13 ){
        console.log("presionó la tecla Enter");
        let simu1 = new Simulacion('T', parseInt($("#monto").val()),0)
        simu1.validarMonto()
    }
}

function enterCuotas(e){
    if(e.wich == 13 || e.keyCode == 13 ){
        console.log("presionó la tecla Enter");
        let simu2 = new Simulacion('T', parseInt($("#cuotas").val()),0)
        simu2.validarMeses();

    }
}


// EJECUCION CODIGO MAIN.JS

function btnSimular(){
    var p1;

    let monto = parseInt($("#monto").val());
    let cuotas = parseInt($("#cuotas").val());

    p1 = new Simulacion('T', monto, cuotas);
    let simulacionOK = p1.simular();

    if(simulacionOK){
   
        if($("#lista-opciones").children().length === 0){
            $("#lista-opciones").append("<h2>Otras Opciones</h2>");
        }
        
        misFunciones.simularOpciones(p1.monto, mesesMin, mesesMax);
        $("#lista-opciones").hide();

        $("#btnSimular").prop("disabled", true);
        $("#btnOpciones").prop("disabled", false);
    }
}

function btnVerOpciones(){
    $("#lista-opciones").fadeIn(2000);
    $("#btnOpciones").prop("disabled", true);
}