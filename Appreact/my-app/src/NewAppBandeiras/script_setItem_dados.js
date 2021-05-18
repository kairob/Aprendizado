const body = document.querySelector('body')
window.addEventListener('load', body) 

// eslint-disable-next-line no-unused-vars
const btnSalvar=document.querySelector('#btnSalvar').addEventListener('click',()=>{


  const dados=[]
  const unidade={}
  unidade.Unidade=document.querySelector('#unidade').value
  /////////////////////Bandeira1
  let selectb1=document.getElementById('optionf1a')
  const optionf1a= selectb1.options[selectb1.selectedIndex].text;
  let bandeira1={}
  bandeira1.Data=new Date(document.getElementById('txtdate1a').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira1.Distrito=document.getElementById('txtdistrito1a').value
  bandeira1.Opções=optionf1a

  /////////////////////Bandeira2
  let selectb2=document.getElementById('optionf1b')
  const optionf1b= selectb2.options[selectb2.selectedIndex].text;
  let bandeira2={}
  bandeira2.Data=new Date(document.getElementById('txtdate1b').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira2.Distrito=document.getElementById('txtdistrito1b').value
  bandeira2.Opções=optionf1b
  ////////////Bandeira 3

  let selectb3=document.getElementById('txtoption3')
  const option3= selectb3.options[selectb3.selectedIndex].text;
  let bandeira3={}
  bandeira3.Data=new Date(document.getElementById('txtdate3').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira3.Distrito=document.getElementById('txtdistrito3').value
  bandeira3.Opções=option3
  ///////////Bandeira 4

  let selectb4=document.getElementById('txtoption4')
  const option4= selectb4.options[selectb4.selectedIndex].text;
  let bandeira4={}
  bandeira4.Data=new Date(document.getElementById('txtdate4').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira4.Distrito=document.getElementById('txtdistrito4').value
  bandeira4.Opções=option4

  ///////////Bandeira 5

  let selectb5=document.getElementById('txtoption5')
  const option5= selectb5.options[selectb5.selectedIndex].text;
  let bandeira5={}
  bandeira5.Data=new Date(document.getElementById('txtdate5').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira5.Distrito=document.getElementById('txtdistrito5').value
  bandeira5.Opções=option5

  ///////////Bandeira 6

  let selectb6=document.getElementById('txtoption6')
  const option6= selectb6.options[selectb6.selectedIndex].text;
  let bandeira6={}
  bandeira6.Data=new Date(document.getElementById('txtdate6').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira6.Distrito=document.getElementById('txtdistrito6').value
  bandeira6.Opções=option6
  
  ///////////Bandeira 7

  let selectb7=document.getElementById('txtoption7')
  const option7= selectb7.options[selectb7.selectedIndex].text;
  let bandeira7={}
  bandeira7.Data=new Date(document.getElementById('txtdate7').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira7.Distrito=document.getElementById('txtdistrito7').value
  bandeira7.Opções=option7
  
  ///////////Bandeira 8

  let selectb8=document.getElementById('txtoption8')
  const option8= selectb8.options[selectb8.selectedIndex].text;
  let bandeira8={}
  bandeira8.Data=new Date(document.getElementById('txtdate8').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira8.Distrito=document.getElementById('txtdistrito8').value
  bandeira8.Opções=option8

  ///////////Bandeira 9

  let selectb9=document.getElementById('txtoption9')
  const option9= selectb9.options[selectb9.selectedIndex].text;
  let bandeira9={}
  bandeira9.Data=new Date(document.getElementById('txtdate9').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira9.Distrito=document.getElementById('txtdistrito9').value
  bandeira9.Opções=option9
  
  ///////////Bandeira 10

  let selectb10=document.getElementById('txtoption10')
  const option10= selectb10.options[selectb10.selectedIndex].text;
  let bandeira10={}
  bandeira10.Data=new Date(document.getElementById('txtdate10').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira10.Distrito=document.getElementById('txtdistrito10').value
  bandeira10.Opções=option10
  
  ///////////Bandeira 11

  let selectb11=document.getElementById('txtoption11')
  const option11= selectb11.options[selectb11.selectedIndex].text;
  let bandeira11={}
  bandeira11.Data=new Date(document.getElementById('txtdate11').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira11.Distrito=document.getElementById('txtdistrito3').value
  bandeira11.Opções=option11
  
  ///////////Bandeira 12

  let selectb12=document.getElementById('txtoption12')
  const option12= selectb12.options[selectb12.selectedIndex].text;
  let bandeira12={}
  bandeira12.Data=new Date(document.getElementById('txtdate12').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira12.Distrito=document.getElementById('txtdistrito12').value
  bandeira12.Opções=option12
  
  ///////////Bandeira 13

  let selectb13=document.getElementById('txtoption13')
  const option13= selectb13.options[selectb13.selectedIndex].text;
  let bandeira13={}
  bandeira13.Data=new Date(document.getElementById('txtdate13').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira13.Distrito=document.getElementById('txtdistrito13').value
  bandeira13.Opções=option13
  
  ///////////Bandeira 14

  let selectb14=document.getElementById('txtoption14')
  const option14= selectb3.options[selectb14.selectedIndex].text;
  let bandeira14={}
  bandeira14.Data=new Date(document.getElementById('txtdate14').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira14.Distrito=document.getElementById('txtdistrito14').value
  bandeira14.Opções=option14
  
  ///////////Bandeira 15

  let selectb15=document.getElementById('txtoption15')
  const option15= selectb15.options[selectb15.selectedIndex].text;
  let bandeira15={}
  bandeira15.Data=new Date(document.getElementById('txtdate15').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira15.Distrito=document.getElementById('txtdistrito15').value
  bandeira15.Opções=option15
  
  ///////////Bandeira 16

  let selectb16=document.getElementById('txtoption16')
  const option16= selectb16.options[selectb16.selectedIndex].text;
  let bandeira16={}
  bandeira16.Data=new Date(document.getElementById('txtdate16').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira16.Distrito=document.getElementById('txtdistrito16').value
  bandeira16.Opções=option16
  
  ///////////Bandeira 17

  let selectb17=document.getElementById('txtoption17')
  const option17= selectb17.options[selectb17.selectedIndex].text;
  let bandeira17={}
  bandeira17.Data=new Date(document.getElementById('txtdate17').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira17.Distrito=document.getElementById('txtdistrito17').value
  bandeira17.Opções=option17
  
  ///////////Bandeira 18

  let selectb18=document.getElementById('txtoption18')
  const option18= selectb18.options[selectb18.selectedIndex].text;
  let bandeira18={}
  bandeira18.Data=new Date(document.getElementById('txtdate18').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira18.Distrito=document.getElementById('txtdistrito18').value
  bandeira18.Opções=option18
  
  ///////////Bandeira 19

  let selectb19=document.getElementById('txtoption19')
  const option19= selectb19.options[selectb19.selectedIndex].text;
  let bandeira19={}
  bandeira19.Data=new Date(document.getElementById('txtdate19').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira19.Distrito=document.getElementById('txtdistrito19').value
  bandeira19.Opções=option19
  
  ///////////Bandeira 20

  let selectb20=document.getElementById('txtoption20')
  const option20= selectb20.options[selectb20.selectedIndex].text;
  let bandeira20={}
  bandeira20.Data=new Date(document.getElementById('txtdate20').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira20.Distrito=document.getElementById('txtdistrito20').value
  bandeira20.Opções=option20
  
  ///////////Bandeira 21

  let selectb21=document.getElementById('txtoption21')
  const option21= selectb21.options[selectb21.selectedIndex].text;
  let bandeira21={}
  bandeira21.Data=new Date(document.getElementById('txtdate21').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira21.Distrito=document.getElementById('txtdistrito21').value
  bandeira21.Opções=option21
  
  ///////////Bandeira 22

  let selectb22=document.getElementById('txtoption22')
  const option22= selectb22.options[selectb22.selectedIndex].text;
  let bandeira22={}
  bandeira22.Data=new Date(document.getElementById('txtdate22').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira22.Distrito=document.getElementById('txtdistrito22').value
  bandeira22.Opções=option22
  
  ///////////Bandeira 23

  let selectb23=document.getElementById('txtoption23')
  const option23= selectb23.options[selectb23.selectedIndex].text;
  let bandeira23={}
  bandeira23.Data=new Date(document.getElementById('txtdate23').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira23.Distrito=document.getElementById('txtdistrito23').value
  bandeira23.Opções=option23
  
  ///////////Bandeira 24

  let selectb24=document.getElementById('txtoption24')
  const option24= selectb24.options[selectb24.selectedIndex].text;
  let bandeira24={}
  bandeira24.Data=new Date(document.getElementById('txtdate24').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira24.Distrito=document.getElementById('txtdistrito24').value
  bandeira24.Opções=option24
  
  ///////////Bandeira 25

  let selectb25=document.getElementById('txtoption25')
  const option25= selectb25.options[selectb25.selectedIndex].text;
  let bandeira25={}
  bandeira25.Data=new Date(document.getElementById('txtdate25').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira25.Distrito=document.getElementById('txtdistrito25').value
  bandeira25.Opções=option25
  
  ///////////Bandeira 26

  let selectb26=document.getElementById('txtoption26')
  const option26= selectb26.options[selectb26.selectedIndex].text;
  let bandeira26={}
  bandeira26.Data=new Date(document.getElementById('txtdate26').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira26.Distrito=document.getElementById('txtdistrito26').value
  bandeira26.Opções=option26
  
  ///////////Bandeira 27

  let selectb27=document.getElementById('txtoption27')
  const option27= selectb27.options[selectb27.selectedIndex].text;
  let bandeira27={}
  bandeira27.Data=new Date(document.getElementById('txtdate27').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira27.Distrito=document.getElementById('txtdistrito27').value
  bandeira27.Opções=option27
  
  ///////////Bandeira 28

  let selectb28=document.getElementById('txtoption28')
  const option28= selectb28.options[selectb28.selectedIndex].text;
  let bandeira28={}
  bandeira28.Data=new Date(document.getElementById('txtdate28').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira28.Distrito=document.getElementById('txtdistrito28').value
  bandeira28.Opções=option28
  
  ///////////Bandeira 29

  let selectb29=document.getElementById('txtoption29')
  const option29= selectb29.options[selectb29.selectedIndex].text;
  let bandeira29={}
  bandeira29.Data=new Date(document.getElementById('txtdate29').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira29.Distrito=document.getElementById('txtdistrito29').value
  bandeira29.Opções=option29
  
  ///////////Bandeira 0

  let selectb30=document.getElementById('txtoption30')
  const option30= selectb30.options[selectb30.selectedIndex].text;
  let bandeira30={}
  bandeira30.Data=new Date(document.getElementById('txtdate30').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira30.Distrito=document.getElementById('txtdistrito30').value
  bandeira30.Opções=option30
  
  ///////////Bandeira 31

  let selectb31=document.getElementById('txtoption31')
  const option31= selectb31.options[selectb31.selectedIndex].text;
  let bandeira31={}
  bandeira31.Data=new Date(document.getElementById('txtdate31').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira31.Distrito=document.getElementById('txtdistrito31').value
  bandeira31.Opções=option31

  //////////Bandeira 32

  let selectb32=document.getElementById('txtoption32')
  const option32= selectb31.options[selectb32.selectedIndex].text;
  let bandeira32={}
  bandeira32.Data=new Date(document.getElementById('txtdate32').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira32.Distrito=document.getElementById('txtdistrito32').value
  bandeira32.Opções=option32

  //////////Bandeira 33

  let selectb33=document.getElementById('txtoption33')
  const option33= selectb33.options[selectb33.selectedIndex].text;
  let bandeira33={}
  bandeira33.Data=new Date(document.getElementById('txtdate33').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira33.Distrito=document.getElementById('txtdistrito33').value
  bandeira33.Opções=option33
  //////////Bandeira 34

  let selectb34=document.getElementById('txtoption34')
  const option34= selectb34.options[selectb34.selectedIndex].text;
  let bandeira34={}
  bandeira34.Data=new Date(document.getElementById('txtdate34').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira34.Distrito=document.getElementById('txtdistrito34').value
  bandeira34.Opções=option34

  //////////Bandeira 35

  let selectb35=document.getElementById('txtoption35')
  const option35= selectb35.options[selectb35.selectedIndex].text;
  let bandeira35={}
  bandeira35.Data=new Date(document.getElementById('txtdate35').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira35.Distrito=document.getElementById('txtdistrito35').value
  bandeira35.Opções=option35

  //////////Bandeira 36

  let selectb36=document.getElementById('txtoption36')
  const option36= selectb36.options[selectb36.selectedIndex].text;
  let bandeira36={}
  bandeira36.Data=new Date(document.getElementById('txtdate36').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira36.Distrito=document.getElementById('txtdistrito36').value
  bandeira36.Opções=option36

  //////////Bandeira 37

  let selectb37=document.getElementById('txtoption37')
  const option37= selectb37.options[selectb37.selectedIndex].text;
  let bandeira37={}
  bandeira37.Data=new Date(document.getElementById('txtdate37').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira37.Distrito=document.getElementById('txtdistrito37').value
  bandeira37.Opções=option37

  //////////Bandeira 38

  let selectb38=document.getElementById('txtoption38')
  const option38= selectb38.options[selectb38.selectedIndex].text;
  let bandeira38={}
  bandeira38.Data=new Date(document.getElementById('txtdate38').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira38.Distrito=document.getElementById('txtdistrito38').value
  bandeira38.Opções=option38

  //////////Bandeira 39

  let selectb39=document.getElementById('txtoption39')
  const option39= selectb39.options[selectb39.selectedIndex].text;
  let bandeira39={}
  bandeira39.Data=new Date(document.getElementById('txtdate39').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira39.Distrito=document.getElementById('txtdistrito39').value
  bandeira39.Opções=option39

  //////////Bandeira 40

  let selectb40=document.getElementById('txtoption40')
  const option40= selectb40.options[selectb40.selectedIndex].text;
  let bandeira40={}
  bandeira40.Data=new Date(document.getElementById('txtdate40').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira40.Distrito=document.getElementById('txtdistrito40').value
  bandeira40.Opções=option40

  //////////Bandeira 41

  let selectb41=document.getElementById('txtoption41')
  const option41= selectb41.options[selectb41.selectedIndex].text;
  let bandeira41={}
  bandeira41.Data=new Date(document.getElementById('txtdate41').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira41.Distrito=document.getElementById('txtdistrito41').value
  bandeira41.Opções=option41

  //////////Bandeira 42

  let selectb42=document.getElementById('txtoption42')
  const option42= selectb42.options[selectb42.selectedIndex].text;
  let bandeira42={}
  bandeira42.Data=new Date(document.getElementById('txtdate42').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira42.Distrito=document.getElementById('txtdistrito42').value
  bandeira42.Opções=option42

  //////////Bandeira 43

  let selectb43=document.getElementById('txtoption43')
  const option43= selectb43.options[selectb43.selectedIndex].text;
  let bandeira43={}
  bandeira43.Data=new Date(document.getElementById('txtdate43').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira43.Distrito=document.getElementById('txtdistrito43').value
  bandeira43.Opções=option43

  //////////Bandeira 44

  let selectb44=document.getElementById('txtoption44')
  const option44= selectb44.options[selectb44.selectedIndex].text;
  let bandeira44={}
  bandeira44.Data=new Date(document.getElementById('txtdate44').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira44.Distrito=document.getElementById('txtdistrito44').value
  bandeira44.Opções=option44

  //////////Bandeira 45

  let selectb45=document.getElementById('txtoption45')
  const option45= selectb45.options[selectb45.selectedIndex].text;
  let bandeira45={}
  bandeira45.Data=new Date(document.getElementById('txtdate45').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira45.Distrito=document.getElementById('txtdistrito45').value
  bandeira45.Opções=option45

  //////////Bandeira 46

  let selectb46=document.getElementById('txtoption46')
  const option46= selectb46.options[selectb46.selectedIndex].text;
  let bandeira46={}
  bandeira46.Data=new Date(document.getElementById('txtdate46').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira46.Distrito=document.getElementById('txtdistrito46').value
  bandeira46.Opções=option46

  //////////Bandeira 47

  let selectb47=document.getElementById('txtoption47')
  const option47= selectb47.options[selectb47.selectedIndex].text;
  let bandeira47={}
  bandeira47.Data=new Date(document.getElementById('txtdate47').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira47.Distrito=document.getElementById('txtdistrito47').value
  bandeira47.Opções=option47

  //////////Bandeira 48

  let selectb48=document.getElementById('txtoption48')
  const option48= selectb48.options[selectb48.selectedIndex].text;
  let bandeira48={}
  bandeira48.Data=new Date(document.getElementById('txtdate48').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira48.Distrito=document.getElementById('txtdistrito48').value
  bandeira48.Opções=option48

  //////////Bandeira 49

  let selectb49=document.getElementById('txtoption49')
  const option49= selectb40.options[selectb49.selectedIndex].text;
  let bandeira49={}
  bandeira49.Data=new Date(document.getElementById('txtdate49').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira49.Distrito=document.getElementById('txtdistrito49').value
  bandeira49.Opções=option49

  //////////Bandeira 50

  let selectb50=document.getElementById('txtoption50')
  const option50= selectb50.options[selectb50.selectedIndex].text;
  let bandeira50={}
  bandeira50.Data=new Date(document.getElementById('txtdate50').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira50.Distrito=document.getElementById('txtdistrito50').value
  bandeira50.Opções=option50

  //////////Bandeira 51

  let selectb51=document.getElementById('txtoption51')
  const option51= selectb51.options[selectb51.selectedIndex].text;
  let bandeira51={}
  bandeira51.Data=new Date(document.getElementById('txtdate51').value).toLocaleDateString("pt-br",{timeZone: "UTC"})
  bandeira51.Distrito=document.getElementById('txtdistrito51').value
  bandeira51.Opções=option51






  dados.push(
    unidade,
    bandeira1,
    bandeira2,
    bandeira3,
    bandeira4,
    bandeira5,
    bandeira6,  
    bandeira7,
    bandeira8,
    bandeira9,
    bandeira10,
    bandeira11,
    bandeira12,  
    bandeira13,  
    bandeira14,
    bandeira15,
    bandeira16,  
    bandeira17,
    bandeira18,
    bandeira19,
    bandeira20,
    bandeira21,
    bandeira22, 
    bandeira23,
    bandeira24,  
    bandeira25,
    bandeira26,  
    bandeira27,
    bandeira28,
    bandeira29,
    bandeira30,
    bandeira31,
    bandeira32, 
    bandeira33,  
    bandeira34,
    bandeira35,
    bandeira36,  
    bandeira37,
    bandeira38,
    bandeira39,
    bandeira40,
    bandeira41,
    bandeira42, 
    bandeira43,
    bandeira44,  
    bandeira45,
    bandeira46,  
    bandeira47,
    bandeira48,
    bandeira49,
    bandeira50,
    bandeira51,

)


 
  localStorage.setItem('Dados', JSON.stringify(dados))
  console.log(dados)

})





