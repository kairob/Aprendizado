var dados = [] 
function PopulaTabela(){
  if(Array.isArray(dados)){
    
    $("#tbldados tbody").html("") /*Limpando a tabela no html - formula JQuery*/
    dados.forEach(function(item){
       /*Abaixo : seleciona a tabela pelo id e a tag tbody => 
       o .append adiciona conteudo html na tbody*/
    
      $("#tbldados tbody").append(`<tr>
        <td>${item.ID}</td>
        <td>${item.Nome}</td>
        <td>${item.Sobrenome}</td>
        <td>${item.DtNascimento}</td>
        <td>${item.Formação}</td>

       </tr>`)
    })
  }
}


$(function(){
  dados = JSON.parse(localStorage.getItem("__dados__"))
  if(dados){
    PopulaTabela()
  }
  console.log(PopulaTabela())
})