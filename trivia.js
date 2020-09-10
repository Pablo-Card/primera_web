var conta, pista1, pista2, pista3, msje;
var parrafo1 = document.createElement("p");
msje = "ATENCIÓN! Te quedan "
pista1 = "PISTA 1: Dicho club fue fundado el 06-03-1902"
pista2 = "PISTA 2: Se coronó campeón 13 veces en esta competencia"
pista3 = "PISTA 3: Sus apodos son Blancos, Merenque, Vikingos"
conta = 3;
function alerta1(){
    let resp1, rsp2, resp3;
    event.preventDefault();
    event.stopPropagation();
    resp1 = document.getElementById("resp1").value;
    if (resp1 === "Real Madrid" || resp1 === "real madrid" || resp1 === "REAL MADRID" || resp1 === "Real madrid"){
        document.getElementById("info1").style.display = "none";
        document.getElementById("alert1").style.display = "none";
        document.getElementById("resp1").style.display = "none";
        document.getElementById("correcto1").style.display = "block";
        document.getElementById("info2").style.display = "block";
        let submit1 = document.getElementById("subm1");
        submit1.remove();

    }    
    else if(conta > 0){
        document.getElementById("info1").style.display = "none";
        if (conta === 3){
            parrafo1.textContent = pista1;
            document.getElementById("alert1").textContent = msje + String(conta) + " intentos";
            document.getElementById("alert1").appendChild(parrafo1);    
        }
        else if (conta === 2){
            parrafo1.textContent = pista2;
            document.getElementById("alert1").textContent = msje + String(conta) + " intentos";
            document.getElementById("alert1").appendChild(parrafo1);    
        }
        else if (conta === 1){
            parrafo1.textContent = pista3;
            document.getElementById("alert1").textContent = msje + String(conta) + " intentos";
            document.getElementById("alert1").appendChild(parrafo1);    
        }
        
        document.getElementById("alert1").style.display = "block";
        conta -= 1;
    }
    else{
        document.getElementById("resp1").style.display = "none";
        let submit1 = document.getElementById("subm1");
        submit1.remove();
        document.getElementById("alert1").style.display = "none";
        document.getElementById("error1").style.display = "block";
        document.getElementById("subm1").remove;
    }
    
    console.log(conta);
    
}