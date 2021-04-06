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

            //case 'U':        
            //case 'C':
        }
        
    }
    
    imprimir(p){

        // i.innerHTML = `${i.innerHTML} Para saldar su deuda deberá pagar ${this.meses} cuotas de: $ ${this.montoCuota.toFixed(2)} </br>`;
        // document.getElementById(p).appendChild(i);
        $("#"+p).append(`Para saldar su deuda deberá pagar ${this.meses} cuotas de: $ ${this.montoCuota.toFixed(2)} </br>`);

    }

    simular(){

        let validaciones = false;

        if(this.validarMonto() && this.validarMeses()){
            this.calcularinteres();
            this.calcularCuotas();
            
            // if(document.getElementById("simulaciones") == null){
            //     var newPar01 = document.createElement("p");
            //     newPar01.setAttribute("id", "simulaciones")
            // }else{
            //     newPar01 = document.getElementById("simulaciones");
            //     newPar01.innerHTML = "";
            // }            

            if($("#simulaciones").length === 0){
                $("#lista-simulaciones").append("<h2>Simulación ABC</h2>");
                var newPar01 = document.createElement("div");
                newPar01.setAttribute("id", "simulaciones");
                $("#lista-simulaciones").append(newPar01);
            }else{
                $("#simulaciones").html("");
            }    

            this.imprimir("simulaciones");

            validaciones = true;
        }
        return validaciones;
    }

    activarPrestamo(){
        this.activo = true;
    }
}