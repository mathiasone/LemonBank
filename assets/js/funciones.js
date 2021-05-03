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
        $("#opciones").html("");
    }     
 
    pso.forEach(e => e.imprimir("opciones"));
}

export function cargarPrestamos(){

    $("#a-prestamo").css("border-left","1rem solid yellow").css("font-weight","bold").css("color","black");
    $("#btnOpciones").prop("disabled", true);

    let prestamosActivos = [];

    console.log("Pre-getJSON");    
    $.getJSON('../data/prestamos.json', (respuesta, estado) => {
        if(estado === "success"){
            for (let p of respuesta){
                prestamosActivos.push(new Prestamo (p)); 
            }   
            
            $("#prestamos").html("");

            prestamosActivos.forEach(e => e.imprimir());    
                
            $("#prestamos").hide().slideDown(500, () =>{
                $(".cabecera").animate({"font-size": "20px"},1500);
                $(".fila-p").animate({"font-size": "20px"},1500)
                .animate({"font-size": "16px"},1500);
            });

        }else{
            console.log("Error en la carga de datos desde ../data/prestamos.json");
        }
    });

}

