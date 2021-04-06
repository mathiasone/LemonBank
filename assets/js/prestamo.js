import{montoMin, montoMax} from './simulacion.js';


export default class Prestamo{
    constructor(obj){
        this.tipo = obj.tipo;
        this.monto = obj.monto;
        this.montoTotal = obj.montoTotal;
        this.montoCuota = obj.montoCuota;
        this.meses = obj.meses;
        this.cuotasPagas = obj.cuotasPagas;
        this.activo = obj.activo;
        this.montoMin = montoMin;
        this.montoMax = montoMax;
    }

    imprimir(){
        //document.getElementById("prestamos").innerHTML = `${document.getElementById("prestamos").innerHTML} Para saldar su deuda deberá pagar ${this.meses} cuotas de: $ ${this.montoCuota.toFixed(2)} </br>`;
        $("#simulaciones").html = `${$("#simulaciones").html} Para saldar su deuda deberá pagar123 ${this.meses} cuotas de: $ ${this.montoCuota.toFixed(2)} </br>`;
    }
}


