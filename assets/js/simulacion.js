const montoMin = 10000;
const montoMax = 250000;
const mesesMin = 3;
const mesesMax = 48;

export{montoMin, montoMax, mesesMin, mesesMax};

export default class Simulacion{
    constructor(tipo, monto, meses){
        this.tipo = tipo;
        this.monto = monto;
        this.montoTotal;
        this.montoCuota;
        this.meses = meses;
        this.cuotasPagas = 0;
        this.activo = false;
        this.montoMin = montoMin;
        this.montoMax = montoMax;
    }



    validarMonto(){
        let correcto = true;

        if(this.monto < this.montoMin || this.monto > this.montoMax){
            correcto = false;
            alert('Debe ingresar un monto entre $ ' + this.montoMin +' y $ ' + this.montoMax);
        }
        return correcto;
    }

    validarMeses(){
        let correcto = true;

        if(this.meses < mesesMin || this.meses > mesesMax){
            correcto = false;
            alert('Debe ingresar una cantidad entre 3 y 48 cuotas/meses');
        }

        return correcto;
    }

    calcularCuotas(){
        let montoCuota = this.montoTotal / this.meses;
        this.montoCuota = montoCuota;

        return montoCuota;
    }

    calcularinteres(){
        switch(this.tipo){
            case 'T':
                switch(this.monto){

                    case this.meses > 24:
                        this.montoTotal = this.monto*1.85;
                        break;
                    case this.meses > 12:
                        this.montoTotal = this.monto*1.65;
                        break;     
                    case this.meses > 6:
                        this.montoTotal = this.monto*1.45;
                        break;       
                    default:
                        this.montoTotal = this.monto*1.35;
                        break;                                 
                }
                break;
        }
        
    }
    
    imprimir(p){

         $("#"+p).append(`Para saldar su deuda deberá pagar ${this.meses} cuotas de: $ ${this.montoCuota.toFixed(2)} </br>`);

    }

    simular(){

        let validaciones = false;

        if(this.validarMonto() && this.validarMeses()){
            this.calcularinteres();
            this.calcularCuotas();

            if($("#simulaciones").length === 0){
                $("#lista-simulaciones").append("<h2>Simulación</h2>");
                $("#lista-simulaciones").append("<div id='simulaciones'></div>");
            }else{
                $("#simulaciones").html("");
            }    

            $("#simulaciones").parent().hide();
            this.imprimir("simulaciones");
            $("#simulaciones").parent().fadeIn(2000);

            validaciones = true;

        }
        return validaciones;
    }

    activarPrestamo(){
        this.activo = true;
    }
}