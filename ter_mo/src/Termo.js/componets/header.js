import react from 'react'
import './styles';

export default function header(){
  return(
    <span class="header">
          <div class="logo">
            <img class="imglogo" alt="logo"></img>
          </div>
          <div class="name">
            <strong>TERMO DE CONSTATA&Ccedil;&Atilde;O</strong>
          </div>
          <div class="boxNumb">
            <div class="numberTerm">
              N&Uacute;MERO
            </div>
            <form class ="formTerm"name="formTerm">
              <input class = "InputNumb" size="16"type="text"maxlength="5"></input>
              <label>/</label>
              <input class = "inputNumber" type="text" placeholder="aaaa"maxlength="4"></input>
            </form>
          </div>
        </span>
        
  )

}