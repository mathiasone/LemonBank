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

    //setearEstadoBoton("btnOpciones", true);
    //$("#btnOpciones").prop("disabled", true);
}

export function cargarPrestamos(){

    $("#a-prestamo").css("border-left","1rem solid yellow").css("font-weight","bold").css("color","black");
    $("#btnOpciones").prop("disabled", true);

    let prestamosActivos = [];

    let listaJSON = JSON.parse(localStorage.getItem("lista"));

    for (let p of listaJSON)
        prestamosActivos.push(new Prestamo (p));    

    $("#prestamos").html("<div class='row bg-light mx-5 cabecera'> <div class='col-4'>Monto otorgado</div> <div class='col-4'>Cuotas pagas</div> <div class='col-4'>Cuotas totales</div> </div>");
    prestamosActivos.forEach(e => e.imprimir());

    $("#prestamos").hide().slideDown(1000, () =>{
        $(".cabecera").animate({"font-size": "40px"},2000);
        $(".fila-p").animate({"font-size": "40px"},2000)
        .animate({"font-size": "20px"},2000);
    });


}

