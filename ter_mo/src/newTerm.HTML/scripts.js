function calculate(){       
  let iten=document.getElementById('txIten');
  let iten1= document.getElementById('txIten1');
  const res= document.getElementById('res')        
  const quantityItems= parseInt(iten.value)
  const quantityItemsAv= parseInt(iten1.value)
  if(
    quantityItemsAv > quantityItems
     ||
    quantityItemsAv + quantityItems === 0    
    )
    {
    alert("Quantidade incorreta, Digite novamente")
    res.innerHTML="Quantidade incorreta. Digite novamente"
  }else{
    const Result= (quantityItemsAv)/(quantityItems)*100
    const Resultado=Math.round(Result)
    const StringResult=(String(Resultado).replace(".",","))
  res.innerHTML= `${StringResult} % dos itens estão avariados/danificados`;
  console.log(quantityItems)
  console.log(quantityItemsAv)
  
  console.log(StringResult)
  }
  
} 
function contarCarcteres(campo_passado){
  let limite= 260
  let campo = campo_passado.value.length
  let maxLenght= document.getElementById('txtarea').setAttribute('maxlength', limite)
  let divcouter=document.getElementById('divcouter')
  let restantes= limite - campo;
  divcouter.innerHTML=`${restantes} restantes`
}
   
