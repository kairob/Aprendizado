let dados =  [];
function UserTable(){
  dados = JSON.parse(localStorage.getItem("dados"))
  if(Array.isArray(dados)){
    
    dados.forEach(function (item){
      $("#tblDados tbody").append(`<tr>
      <td>${item.ID}</td>
      <td>${item.Unidade}</td>
      <td>${item.Dr}</td>
      <td>${item.Sto}</td>
     
      
      </tr>`)
      console.log(dados)
    })
  }
  
}

const btnSalvar = document
  .getElementById("btn Salvar")
  .addEventListener("click", () => {
    registro = {};
    let Unidade = document.getElementById("Unidestxt").value;
    let DR = document.getElementById("Drtxt").value;
    let Sto = document.getElementById("stotxt").value;
    let UniPost = document.getElementById("uniPostxt").value;

    registro.Unidade = Unidade;
    registro.Dr = DR;
    registro.Sto = Sto;
    registro.UniPost = UniPost;
    dados.push(registro);
    registro.ID = dados.length;

    localStorage.setItem("dados", JSON.stringify(dados));
    UserTable()

  });


