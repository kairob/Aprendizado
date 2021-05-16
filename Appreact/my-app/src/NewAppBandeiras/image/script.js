/* 
  Legenda:
  date1a ... datef1a ...=data entrada de dados 1 bandeira a... E SEQUENCIA;
  datebf1a ...=data entrada de dados folha 1 bandeira a... E SEQUENCIA;
  optionB1a= opções baideira 1A...

*/


// eslint-disable-next-line no-unused-vars
function salvar(){
  

  
  
  //unidade
  let unidade = document.getElementById("unidade").value
  localStorage.setItem('unidade', unidade)
  //opções entrada de dados 1a
  let select=document.getElementById('optionf1a')
  const optionf1a= select.options[select.selectedIndex].text;
  localStorage.setItem('optionf1a',optionf1a)
  


  //data entrada de dados 1a
  let date1a =  new Date(document.getElementById('date1a').value) 
  const datef1a= date1a.toLocaleDateString("pt-br",{timeZone:"UTC"})
  localStorage.setItem("datef1a", datef1a)
  
  
  //distrito entrada de dados 1a
  let distrito1a = document.getElementById('distrito1a').value
  localStorage.setItem('distrito1a', distrito1a)




  

  
  
  

}
function executar(){
  window.open("Bandeiras.html")
}
