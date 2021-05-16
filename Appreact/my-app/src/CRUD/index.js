var dados = [] 
function PopulaTabela(){
  if(Array.isArray(dados)){
    localStorage.setItem(__dados__, JSON.stringify(dados))
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


function Salvar(){
  dados = JSON.parse(localStorage.getItem("__dados__"))
  if(dados){
    PopulaTabela()
  }
  const btnSalvar = document.getElementById("#btnSalvar").addEventListener('click', () =>{
    //evento botao salvar na modal
    let Nome = document.getElementById('txtNome').value
    let Sobrenome = document.getElementById('txtSobrenome').value
    let DtNascimento = new Date(document.getElementById('txtDtNascimento').value).toLocaleDateString("pt-br",{timeZone: "UTC"})



    let Formacao = document.getElementById('txtFormacao').value
    let registro={}
    registro.Nome=Nome
    registro.Soberenome=Sobrenome
    registro.DtNascimento=DtNascimento
    registro.Formacao=Formacao
    registro.ID = dados.length + 1

    dados.push(registro)
    PopulaTabela()
  })
 
}