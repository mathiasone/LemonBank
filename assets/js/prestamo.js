import{montoMin, montoMax} from './simulacion.js';


export default class Prestamo{
    constructor(obj){
        this.id = obj.id;
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

        $("#prestamos").html(` ${$("#prestamos").html()}  
            <div class='card mx-5 my-3'>
                <div class='row mx-5 cabecera'>
                    <div class='col-3'>Préstamo Id</div>
                    <div class='col-3'>Monto otorgado</div>
                    <div class='col-3'>Cuotas pagas</div>
                    <div class='col-3'>Cuotas totales</div>
                </div>
            
                <div class='row mx-5 fila-p'> 
                    <div class='col-3'># ${this.id}</div>
                    <div class='col-3'>$ ${this.monto.toFixed(0)}</div> 
                    <div class='col-3'>${this.cuotasPagas}</div> 
                    <div class='col-3'>${this.meses}</div> 
                </div> 
            </div>`
        );
    }

}




