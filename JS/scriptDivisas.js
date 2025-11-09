class Conversor{

    constructor(c, tc, so, sd){
        this.cantidad=c;
        this.tasaCambio=tc;
        this.simboloMonedaOrigen=so;
        this.simboloMonedaDestino=sd;
        this.resultado=0;
    }

    convertir(){
        this.resultado=this.cantidad*this.tasaCambio;
        return this.resultado.toFixed(2);
    }

}

document.getElementById("btnConversor").addEventListener("click", ()=>{
    let monedaOrigen=document.getElementById("monedaOrigen").value;
    let monedaDestino=document.getElementById("monedaDestino").value;
    let tasaCambio;
    let resultado;
    let simboloMonedaOrigen;
    let simboloMonedaDestino;
    let cantidad=document.getElementById("cantidad").value;

    if(monedaDestino==monedaOrigen){
        document.getElementById("resultado").innerHTML="Elija monedas diferentes";
    }else{
        switch(monedaOrigen){
            case "1":
                simboloMonedaOrigen="&#36; USD ";
                if(monedaDestino==2){
                    tasaCambio=0.86;
                    simboloMonedaDestino="&#8364;";
                }else if(monedaDestino==3){
                    tasaCambio=18.45;
                    simboloMonedaDestino="&#36; MXN ";
                }else if(monedaDestino==4){
                    tasaCambio=153.54
                    simboloMonedaDestino="&#165;";
                }
            break;
            case "2":
                simboloMonedaOrigen="&#8364;";
                if(monedaDestino==1){
                    tasaCambio=1.16;
                    simboloMonedaDestino="&#36; USD ";
                }else if(monedaDestino==3){
                    tasaCambio=21.32;
                    simboloMonedaDestino="&#36; MXN ";
                }else if(monedaDestino==4){
                    tasaCambio=177.41;
                    simboloMonedaDestino="&#165;";
                }
            break;
            case "3":
                simboloMonedaOrigen="&#36; MXN ";  
                if(monedaDestino==1){
                    tasaCambio=0.054;
                    simboloMonedaDestino="&#36; USD ";
                }else if(monedaDestino==2){
                    tasaCambio=0.047;
                    simboloMonedaDestino="&#8364;";
                }else if(monedaDestino==4){
                    simboloMonedaDestino="&#165;";
                    tasaCambio=8.30;
                }
            break;
            case "4":
                simboloMonedaOrigen="&#165;";
                if(monedaDestino==1){
                    simboloMonedaDestino="&#36; USD ";
                    tasaCambio=0.0065;
                }else if(monedaDestino==2){
                    simboloMonedaDestino="&#8364;";
                    tasaCambio=0.0056;
                }else if(monedaDestino==3){
                    simboloMonedaDestino="&#36; MXN ";
                    tasaCambio=0.12;
            }
           
        }
        const objConversor= new Conversor(cantidad, tasaCambio, simboloMonedaOrigen, simboloMonedaDestino);
        resultado=objConversor.convertir();
        document.getElementById("resultado").innerHTML=`${simboloMonedaOrigen}${cantidad} equivale a ${simboloMonedaDestino}${resultado}`;
    } 
})