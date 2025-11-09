class Persona{
    constructor(a,p){
        this.altura=a;
        this.peso=p;
        this.imc=0;
    }

    calcularIMC(){
        this.imc=this.peso/Math.pow(this.altura, 2);
        return this.imc.toFixed(1);
    }
    
    catalogarIMC(){
        let imgH;
        let imgM;
        if(this.imc.toFixed(1)<18.5){
            imgH="images/imc17.5H.jpg";
            imgM="images/imc17.5M.jpg";
            this.categoria="Bajo peso";
        }else if(this.imc.toFixed(1)>=18.5 && this.imc.toFixed(1)<=24.9){
            imgH="images/imc18.5H.jpg";
            imgM="images/imc18.5M.jpg";
            this.categoria="Peso normal";
        }else if(this.imc.toFixed(1)>=25.0 && this.imc.toFixed(1)<=29.9){
            imgH="images/imc22.0H.jpg";
            imgM="images/imc22.0M.jpg";
            this.categoria="Pre-obesidad o Sobrepeso";
        }else if(this.imc.toFixed(1)>=30.0 && this.imc.toFixed(1)<=34.9){
            imgH="images/imc24.9H.jpg";
            imgM="images/imc24.9M.jpg";
            this.categoria="Obesidad I";
        }else if(this.imc.toFixed(1)>=35.0 && this.imc.toFixed(1)<=39.9){
            imgH="images/imc30.0H.jpg";
            imgM="images/imc30.0M.jpg";
            this.categoria="Obesidad II";
        }else if(this.imc.toFixed(1)>=40.0){
            imgH="images/imc40.0H.jpg";
            imgM="images/imc40.0M.jpg";
            this.categoria="Obesidad III";
        }
        document.getElementById("imgM").style.backgroundImage=`url("${imgM}")`;
        document.getElementById("imgH").style.backgroundImage=`url("${imgH}")`;
        return this.categoria;
    }


}
class IMC{
    constructor(valor){
        this.imc=valor;
        this.categoria;
    }

}


document.getElementById("btnCalcular").addEventListener("click", ()=>{
    let altura=document.getElementById("altura").value;
    let peso=document.getElementById("peso").value;

    const objPersona= new Persona(altura, peso);
    const imc=objPersona.calcularIMC();
    const categoria=objPersona.catalogarIMC();
    document.getElementById("resultado").innerHTML=`IMC: ${imc} Categoria: ${categoria}`;
})