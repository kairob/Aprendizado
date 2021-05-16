const body = document.querySelector('body')
window.addEventListener('load', body) 

const btnSalvar=document.querySelector('#btnSalvar').addEventListener('click',()=>{


dados=[]
/////////////////////Bandeira1
let selectb1=document.getElementById('optionf1a')
const optionf1a= selectb1.options[selectb1.selectedIndex].text;
bandeira1={}
bandeira1.Data=new Date(document.getElementById('txtdate1a').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira1.Distrito=document.getElementById('txtdistrito1a').value
bandeira1.Opções=optionf1a
/////////////////////Bandeira2
let selectb2=document.getElementById('optionf1b')
const optionf1b= selectb2.options[selectb2.selectedIndex].text;
bandeira2={}
bandeira2.Data=new Date(document.getElementById('txtdate1b').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira2.Distrito=document.getElementById('txtdistrito1b').value
bandeira2.Opções=optionf1b
////////////Bandeira 3

let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
///////////Bandeira 4

let selectb4=document.getElementById('txtoption4')
const option4= selectb4.options[selectb4.selectedIndex].text;
bandeira4={}
bandeira4.Data=new Date(document.getElementById('txtdate4').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira4.Distrito=document.getElementById('txtdistrito4').value
bandeira4.Opções=option4

///////////Bandeira 5

let selectb5=document.getElementById('txtoption5')
const option5= selectb5.options[selectb5.selectedIndex].text;
bandeira5={}
bandeira5.Data=new Date(document.getElementById('txtdate5').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira5.Distrito=document.getElementById('txtdistrito5').value
bandeira5.Opções=option5

///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */
///////////Bandeira 4
/*
let selectb3=document.getElementById('txtoption3')
const option3= selectb3.options[selectb3.selectedIndex].text;
bandeira3={}
bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
bandeira3.Distrito=document.getElementById('txtdistrito3').value
bandeira3.Opções=option3
 */

dados.push(
  bandeira1,
  bandeira2,
  bandeira3,
  bandeira4,
  bandeira5
  )


 
localStorage.setItem('Dados', JSON.stringify(dados))
  console.log(dados)

})





