//modal
const botaoIniciarModal= document.getElementById('btn-Bandeira')
const modal = document.getElementById('modal-Bandeira')
const logo = document.querySelector('.image')

// ações dos usuarios

botaoIniciarModal.addEventListener('click', ()=>{
  iniciaModal()
} )

logo.addEventListener('click', ()=>{
  iniciaModal()
})


function iniciaModal(){
  
  modal.classList.add('mostrar')
  
  FecharModal()
  
 
}

function FecharModal(){
  modal.addEventListener('click', (e) =>{
    if(e.target.className === 'fechar' || e.target.id === 'modal-Bandeira'){
    modal.classList.remove('mostrar')

    }
  })
}


//const Salvar=document.querySelector("#btn_salvar_modal")
//.addEventListener('click',
function Salvar(){
  
  let date1a =  new Date(document.getElementById('txtdata1a').value) 
  const datef1a= date1a.toLocaleDateString("pt-br",{timeZone:"UTC"})
  localStorage.setItem("datef1a", datef1a)

  console.log(datef1a)
}
 
 Salvar()
//fim Modal
//Bandeira1



