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

        $("#prestamos").html(`${$("#prestamos").html()} <div class='row bg-light mx-5 fila-p'> <div class='col-4'>$ ${this.monto.toFixed(0)}</div> <div class='col-4'>${this.cuotasPagas}</div> <div class='col-4'>${this.meses}</div> </div>`);
        
    }
}


