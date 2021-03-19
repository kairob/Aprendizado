
    let num = document.getElementById("fnum")
    let lista = document.querySelector("select#fLista")
    let res = document.querySelector("div#res")
    let valores = []
    function isNumber(n){
      if(Number(n) >= 1 && Number(n)<= 100){
        return true
      }else{
        return false
      }
    }
    function inList(n,l ){
      if (l.indexOf(Number(n)) !== -1){
        return true
      }else {
        return false
      }
    }

    function adicionar(){
      let item = document.createElement('option')

      if(isNumber(num.value) && !inList(num.value,valores)){
        console.log('ok')
        valores.push(Number(num.value))
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        
      }else{
        window.alert('Valor invalido ou ja encontrado na lista')
      }
      num.value =''
      num.focus()



    }