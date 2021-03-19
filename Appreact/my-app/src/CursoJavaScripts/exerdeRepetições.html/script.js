function contar(){
  let init=window.document.getElementById('inicio')
  let end = window.document.getElementById('fim')
  let pass = window.document.getElementById('passo')
  if(init.value.length === 0 || end.value.length === 0 || pass.value.length === 0 ){
    window.alert('Dados incorretos')
  }


}