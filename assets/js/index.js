// VARIABLES


// FUNCIONES
function cargarDolar(){

    $.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales", (res) => {
        console.log(res);
        agregarDolarAlDOM(res.filter(c => c.casa.nombre != "Bitcoin"), cargarCripto);
    });
};

function agregarDolarAlDOM(cot){
        
    $("#index-inicio").prepend(`<div class="my-4"> 
        <h3 class="text-center">DÓLAR</h3>
        <div id="index-dolar" class="d-flex flex-row flex-wrap justify-content-center"> </div>
    </div>`);

    for (let c of cot){

        $("#index-dolar").prepend(`<div style="width:300px" class="card m-2"><h4 style="background-color:green" class="p-1">${c.casa.nombre}</h4>
            <div class="bg-light">Compra: $ ${c.casa.compra}</div>
            <div class="bg-light">Venta: $ ${c.casa.venta}</div>
        </div>`);
    }
};

function cargarCripto(exchange, par, volumen){

    $.get(`https://criptoya.com/api/${exchange}/${par}/${volumen}`, (res) => {
        console.log(res);

        let moneda = par.substr(0,3);
        let color;

        switch(moneda){
            case "btc":
                moneda = "Bitcoin";
                color = "orange";
                break;
            case "eth":
                moneda = "Ethereum";    
                color = "rgba(0, 68, 255, 0.959)";
                break;
            case "lin":
                moneda = "Chainlink";    
                color = "rgba(0, 68, 255, 0.959)";
                break;
            case "usd":
                moneda = "Tether";    
                color = "green";
                break;        
        }

        agregarCriptoAlDOM(res, moneda, color);

    });
};

function agregarCriptoAlDOM(c, nombre, color){
    
    if($("#index-cripto").length === 0){
        $("#index-inicio").append(`<div class="my-4"> 
            <h3 id="h3-cripto" class="text-center">CRIPTO</h3>
            <div id="index-cripto" class="d-flex flex-row flex-wrap justify-content-center"> </div>
        </div>`);
    }

    $("#index-cripto").append(`<div style="width:300px" class="card m-2"><h4 style="background-color:${color}" class="p-1">${nombre}</h4>
        <div class="bg-light">Compra: $ ${c.totalAsk}</div>
        <div class="bg-light">Venta: $ ${c.totalBid}</div>
    </div>`);

};

$(document).ready(() => {
    $("#navmenu").css("border-left","1rem solid yellow").css("font-weight","bold").css("color","black");
    
    cargarCripto("letsbit","btc/ars", "0.2");
    cargarCripto("letsbit","eth/ars", "0.2");
    cargarCripto("letsbit","link/ars", "0.2");
    cargarCripto("letsbit","usdt/ars", "0.2");

    cargarDolar();        
    
});


