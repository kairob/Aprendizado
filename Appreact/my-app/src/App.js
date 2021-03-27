import React,{}  from 'react'
import './App.css';

function App() { 

  return (
    <main class = "main">
      <section id="Cabeçalho">
        <div id = "logo"></div>
        <div id= "name" value="TERMO DE CONSTATAÇÃO"></div>
        <div id = "number">NÚMERO</div>
      </section>
      <section id="unidDest">
        <div id = "Dest">UNIDADE(ONDE FOI CONSTATADA A IRREGULARIDADE)</div>
        <div id= "dr">DR</div>
        <div id = "sto">CÓDIGO STO</div>
      </section>
      <section id="unidDest">
        <div id = "InputUniDest"><input type="placerouder"></input></div>
        <div id= "inputdr"><input type="placerouder"></input> </div>
        <div id = "inputsto"><input type="placerouder"></input></div>
      </section>
      <section id="unidDest">
        <div id = "post">UNIDADE DE POSTAGEM</div>
        <div id= "objeto">NÚMERO DO OBJETO</div>
        <div id = "peso">PESO</div>
      </section>
      <section id="unidPost">
        <div id = "InputUniPost"><input type="placerouder"></input></div>
        <div id= "inputObjet"><input type="placerouder"></input> </div>
        <div id = "inputPeso"><input type="placerouder"></input></div>
      </section>
      <section id="dadosImag">
      <section id="dadosRem">
        <div id = "rem">NOME DO REMETENTE</div>
        <div id = "InputRem"><input type="placerouder"></input></div>        
        <div id = "EndRem"> ENDEREÇO DO REMETENTE</div>
        <div id = "InputEndRem"><input type="placerouder"></input></div>
        <div id = "InputCEPRem"><input type="placerouder"></input></div>
      </section>
      <section>
        <div id = "dest">NOME DO DESTINATARIO</div>
        <div id = "InputDest"><input type="placerouder"></input></div>        
        <div id = "EndDest"> ENDEREÇO DO DESTINATARIO</div>
        <div id = "InputEndDest"><input type="placerouder"></input></div>
        <div id = "InputCEPDest"><input type="placerouder"></input></div>      
      </section>
        <div></div>
      </section>
      <section id="anormCarimbo">
        <div >ANORMALIDADES CONSTATADAS
          <div class="cxText">Embalagem molhada/Rasgada/
          totalmente/parcialmente;</div>
          <div ><input class="cxText" type="placehouder"></input>Etiqueta de registro danificada/Extraviada;</div>
          <div><input class="cxText" type="placehouder"></input>Falta Endereço de Destino/Remetente/Danificado;</div>
          <div><input class="cxText" type="placehouder"></input>Embalagem dilacerada e com mostra do conteúdo avariado/vazando;</div>
          <div><input class="cxText" type="placehouder"></input>Embalagem intacta, porém sem o conteúdo;</div>
          <div><input class="cxText"type="placehouder"></input>Conteúdo Avariado/Quebrado/Vazando</div>
          <div><input class="cxText" type="placehouder"></input>Embalagem dilacerada;</div>
          <div><input class="cxText" type="placehouder"></input>Embalagem intacta, porém com o conteúdo Quebrado/Vazando;</div>
          <div><input class="cxText" type="placehouder"></input>Outras (especificar):</div>
        </div>
        <div id ="fontcar">CARIMBO</div>
      </section>
      <section id="encTotal">
        <div id="encPost">Encaminhado ao destino</div>
        <div id ="blText">
        <div>Devolvido a unidade de postagem </div>         
        <div id = "bltext1">em</div>
        <div id = "bltext2">/</div>
        <div id = "bltext2">/</div>
        <div id = "bltext3">;</div>
        </div>

      </section>

      
    </main>
    
  );
}

export default App;
