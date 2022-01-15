var nome = document.querySelector("#nome");

function media() {
var notaDoPrimeiroBimestre = parseFloat(document.getElementById("primeiroBimestre").value);
var notaDoSegundoBimestre = parseFloat(document.getElementById("segundoBimestre").value);
var notaDoTerceiroBimestre = parseFloat(document.getElementById("terceiroBimestre").value); 
var notaDoQuartoBimestre = parseFloat(document.getElementById("quartoBimestre").value);

     var notaFinal = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4);

     if (notaFinal >= 6) {
        document.getElementById("media").innerHTML = ("Média: " + notaFinal + " - Você foi aprovado!");
     } else {
        document.getElementById("media").innerHTML = ("Média: " + notaFinal + " - Você foi reprovado!");
     } 
}


