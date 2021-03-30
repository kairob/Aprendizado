import React,{}  from 'react'
import './App.css';

function App() { 

  return (
    <main class = "main">
      <section id="cabeçalho">        
        <div id = "logo" ><input src="image/logoCorreios.jpg" alt="logo" ></img></div>
        <div id= "name" value=""><strong>TERMO DE CONSTATAÇÃO</strong></div>
        <div id = "number">
          NÚMERO
            <div id = "divNumber">
            <div class = "InputNumb"><input type="placerouder"></input></div>
            <div class = "inputNumber"><input type="placerouder"></input> </div>
              
            </div>
        </div>
      </section>
      <section id="unidDest">
        <div id = "Dest">UNIDADE(ONDE FOI CONSTATADA A IRREGULARIDADE)</div>
        <div id= "dr">DR</div>
        <div id = "sto">CÓDIGO STO</div>
      </section>
      <section id="unidDest1">
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
        <div ><strong>ANORMALIDADES CONSTATADAS</strong>
          <div><input class="cxText" type="checkbox"></input>Embalagem molhada/Rasgada/totalmente/parcialmente;</div>
          <div><input class="cxText" type="checkbox"></input>Etiqueta de registro danificada/Extraviada;</div>
          <div><input class="cxText" type="checkbox"></input>Falta Endereço de Destino/Remetente/Danificado;</div>
          <div><input class="cxText" type="checkbox"></input>Embalagem dilacerada e com mostra do conteúdo avariado/vazando;</div>
          <div><input class="cxText" type="checkbox"></input>Embalagem intacta, porém sem o conteúdo;</div>
          <div><input class="cxText" type="checkbox"></input>Conteúdo Avariado/Quebrado/Vazando</div>
          <div><input class="cxText" type="checkbox"></input>Embalagem dilacerada;</div>
          <div><input class="cxText" type="checkbox"></input>Embalagem intacta, porém com o conteúdo Quebrado/Vazando;</div>
          <div><input class="cxText" type="checkbox"></input>Outras (especificar):</div>
        </div>
        <div id ="fontcar"><strong>CARIMBO</strong></div>
      </section>
      <section id="encTotal">
        <div id="encPost"><input class="cxText" type="checkbox"></input>Encaminhado ao destino</div>
        <div id ="blText">
        <div><input class="cxText" type="checkbox"></input>Devolvido a unidade de postagem <input id = "bltext1" type="text"></input> em <input id = "bltext2"type="text"></input>/<input id = "bltext2"type="text"></input>/<input id = "bltext3"type="text"></input></div>
        <div><input class="cxText" type="checkbox"></input>Auto de Irregularidade de nº <input id = "bltext4" type="text"></input>/<input id = "bltext3"type="text"></input>, lavrado em:<input id = "bltext2"type="text"></input>/<input id = "bltext2"type="text"></input>/<input id = "bltext3"type="text"></input></div>
        <div><input class="cxText" type="checkbox"></input>Destruído. Emitido o Termo de Destruição nº <input id = "bltext4" type="text"></input>/<input id = "bltext3"type="text"></input>,conforme anexo, dado a inviabilidade de reintegrar ao tráfego postal;  </div>   
        <div><input class="cxText" type="checkbox"></input>Encaminhado à GINSP <input id = "bltext3" type="text"></input>face<input id = "bltext6"type="text"></input></div>  
        <div><input class="cxText" type="checkbox"></input> Outras (especificar): <input id = "bltext6" type="text"></input></div>     
        </div>
      </section>
      <section id="confer">
      <div id ="confer1">CONFERENTES/TESTEMUNHAS</div>
        <div id ="confer2">MATRICULA</div>
        <div id ="confer1">ASSINATURA</div>
      </section >
      <section>
        <div id = "confer1"><input type="placerouder"></input></div>
        <div id= "confer2"><input type="placerouder"></input> </div>
        <div id = "confer1"><input type="placerouder"></input></div>
      </section>
      <section id="confer">
      <div id ="confer1">CONFERENTES/TESTEMUNHAS</div>
        <div id ="confer2">MATRICULA</div>
        <div id ="confer1">ASSINATURA</div>
      </section >
      <section>
        <div id = "confer1"><input type="placerouder"></input></div>
        <div id= "confer2"><input type="placerouder"></input> </div>
        <div id = "confer1"><input type="placerouder"></input></div>
      </section>
      
      <section id="confer">
      <div id ="confer1">CHEFE DA UNIDADE</div>
        <div id ="confer2">MATRICULA</div>
        <div id ="confer1">ASSINATURA</div>
      </section >
      <section>
        <div id = "confer1"><input type="placerouder"></input></div>
        <div id= "confer2"><input type="placerouder"></input> </div>
        <div id = "confer1"><input type="placerouder"></input></div>
      </section>
      <section id="DECLAR">
        <div ><strong>DECLARAÇÃO DO DESTINATARIO OU REMETENTE</strong>
          <div><input class="cxText" type="checkbox"></input>Aceito o objeto  <strong>sem</strong> contestação;</div>
          <div><input class="cxText" type="checkbox"></input>Aceito o objeto com contestação, conforme ressalva à parte;<input id = "bltext7" type="text"></input></div>
          <div><input class="cxText" type="checkbox"></input> Recuso o objeto, face <input id = "bltext8" type="text"></input></div>
          <div><input class="cxText" type="checkbox"></input>Outra (especificar): <input id = "bltext9" type="text"></input></div>
          
        </div> 
      </section>      
      <section id = "block">
        <div id = "b1"></div>
        <div id = "b2"></div>
        <div id = "b3"></div>
        <div id = "b4"></div>
        <div id = "b3"></div>
        <div id = "b5"></div>
        <div id = "b6"></div>   
       </section>
       <section id = "block1">
        <div id = "b1"></div>
        <div id = "b2">ASSINATURA</div>
        <div id = "b3"></div>
        <div id = "b4">DOC DE IDENTIDADE</div>
        <div id = "b3"></div>
        <div id = "b5">DATA</div>
        <div id = "b6"></div>   
       </section>     
    </main>
    
    
  );
}

export default App;
