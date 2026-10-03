
// let i = prompt("Informe sua idade: ");
// if(i < 18){
//     alert("Erro");
// }else{
//   alert("Permitido");
// }

function proc(){
    // comentario de git para teste de status
    console.log("Entrou na função de processamento!");
    let n = document.getElementById("nome").value;
    console.log(n);

    // Saida de dados
    let res = document.getElementById("Resultados");
    res.innerHTML += "<li>" + n + "</li>";
}