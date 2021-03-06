import Prestamo from './prestamo.js';
import Simulacion from './simulacion.js';
import{mesesMin, mesesMax} from './simulacion.js';
import * as misFunciones from './funciones.js';

// EVENTOS
//$(document).ready(misFunciones.cargarPrestamos);

// PONER TOODOS LOS EVENTOS DESDE READY (PARA EVITAR ERRORES PORQUE LA PAGINA NO TERMINO DE CARGAR)
$(document).ready(() => {
    misFunciones.cargarPrestamos();
    $("#btnSimular").click(btnSimular);
    $("#btnOpciones").click(btnVerOpciones);
    $("#monto").keypress(enterMonto);
    $("#cuotas").keypress(enterCuotas);

    //si se cambia el monto habilito los botones de nuevo
    $("#monto").change(() =>{$("#btnSimular").prop("disabled", false);
                                $("#lista-simulaciones").html("");
                                $("#lista-opciones").html("");
                            });
    //si se cambia los meses habilito los botones de nuevo17
    $("#cuotas").change(() =>{$("#btnSimular").prop("disabled", false);
                                $("#lista-simulaciones").html("");
                                $("#lista-opciones").html("");
                            });                       
});



// VALIDACIONES
function enterMonto(e){
    if(e.wich == 13 || e.keyCode == 13 ){
        console.log("presionĂ³ la tecla Enter");
        let simu1 = new Simulacion('T', parseInt($("#monto").val()),0)
        simu1.validarMonto()
    }
}

function enterCuotas(e){
    if(e.wich == 13 || e.keyCode == 13 ){
        console.log("presionĂ³ la tecla Enter");
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