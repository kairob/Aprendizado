/* 
  Legenda:
  date1a ... datef1a ...=data entrada de dados 1 bandeira a... E SEQUENCIA;
  datebf1a ...=data entrada de dados folha 1 bandeira a... E SEQUENCIA;
  optionB1a= opções baideira 1A...

*/


// eslint-disable-next-line no-unused-vars

//Bandeira
  
function salvar(){  
  
  
  ///////////unidade///////////////////////////////
  let unidade = document.getElementById("unidade").value
  localStorage.setItem('unidade', unidade)
  //////////////
  //bandeira 1
  //opções entrada de dados 1a
  let selectb1=document.getElementById('optionf1a')
  const optionf1a= selectb1.options[selectb1.selectedIndex].text;
  localStorage.setItem('optionf1a',optionf1a)
  


  //data entrada de dados 1a/////////////////
  let date1a =  new Date(document.getElementById('txtdate1a').value) 
  const datef1a= date1a.toLocaleDateString("pt-br",{timeZone:"UTC"})
  localStorage.setItem("datef1a", datef1a)
  
  
  //distrito entrada de dados 1a///////////////
  const distrito1a = document.getElementById('txtdistrito1a').value
  localStorage.setItem('distrito1a', distrito1a)
  

  ///////////
  //bandeira 2
  //opções entrada de dados 1b
  /*let unidadeb = document.getElementById("unidadeb").value
  localStorage.setItem('unidadeb', unidadeb)*/
  let selectb2=document.getElementById('optionf1b')
  const optionf1b= selectb2.options[selectb2.selectedIndex].text;
  localStorage.setItem('optionf1b',optionf1b)
  


  //data entrada de dados 1b/////////////////
  let date1b =  new Date(document.getElementById('txtdate1b').value) 
  const datef1b= date1b.toLocaleDateString("pt-br",{timeZone:"UTC"})
  localStorage.setItem("datef1b", datef1b)
  
  
  //distrito entrada de dados 1b///////////////
  const distrito1b = document.getElementById('txtdistrito1b').value
  localStorage.setItem('distrito1b', distrito1b)

  ///////////
  //bandeira 2
  



  

  

  
  Salvarfechar()
  

}
function Adicionar(){
  window.open("dados.html")
  window.close("Bandeiras.html")
  window.print("Bandeiras.html")
}
function Salvarfechar(){
  
  window.open("Bandeiras.html")
  window.close("dados.html")
}
////function imprimir(){
 // print()
//CELULAS
