
import './styles.css';

function App() {
  return (
    
    <main class = "main">
      <section class="container">
        <div class="header">
          <div class="logo"><img class="imglogo" alt="logo"></img></div>
          <div class="name"><strong>TERMO DE CONSTATA&Ccedil;&Atilde;O</strong></div>
          <div class="boxNumb">
            <div class="numberTerm">N&Uacute;MERO</div>
            <form class ="formTerm"name="formTerm">
              <input class = "InputNumb" size="16"type="text"></input><p6>/</p6>
              <input class = "inputNumber" type="text" placeholder="aaaa"></input>
            </form>
          </div>
        </div>
        <form class="unid"action="" method="post">
          <label class="uniPost">Unidade:&nbsp;&nbsp;</label>
          <input class="inpUnid"type="text" placeholder="ONDE FOI CONSTATADA A IRREGULARIDADE" onFocus=""></input>&nbsp;&nbsp;&nbsp;&nbsp;
          <input class="inpDr" type="text" placeholder="DR"></input>&nbsp;&nbsp;&nbsp;&nbsp;
          <input class="inpSTO" type="text" placeholder="C&Oacute;DIGO STO"></input>
        </form>
        <form class="unidPost"action="" method="post">
          <label class ="uniPost">Unidade de Postagem:&nbsp;&nbsp;</label><br></br> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;<input class="inpUnid"type="text" ></input>&nbsp;&nbsp;&nbsp;&nbsp;
          <input class="inpSTO" type="text" placeholder="N&Uacute;MERO DO OBJETO"></input>&nbsp;&nbsp;&nbsp;&nbsp;
          <input class="inpDr" type="text" placeholder="PESO"></input>
        </form>
        <div class="DadosRemDestbox">
          <div class="RemDestbox">
            <form action="" method="post">
              <label class="uniPost" htmlFor="" >REMETENTE:</label>
                <br></br>&nbsp;
              <input class="inpCep" type="text" maxlength="9" placeholder="CEP"></input>&nbsp;
              
              <input class="inpUnid1" type="text" maxlength="32" placeholder="NOME"></input>
                <br></br>&nbsp;
              
              <input class="endRD" type="text" maxlength="34" placeholder="ENDERE&Ccedil;O DO REMETENTE">

              </input>&nbsp;&nbsp;
                
              <input class="inpNum" type="text" maxlength="5" placeholder="N&Uacute;MERO">

              </input>
            </form>
            <form class="space" action="" method="post">
              <label class="uniPost" htmlFor="" >DESTINAT&Aacute;RIO:</label>
                <br></br>&nbsp;
              <input class="inpCep" type="text" maxlength="9" placeholder="CEP"></input>&nbsp;
              
              <input class="inpUnid1" type="text" maxlength="32" placeholder="NOME"></input>
                <br></br>&nbsp;
              
              <input class="endRD" type="text" maxlength="34" placeholder="ENDERE&Ccedil;O DO REMETENTE">

              </input>&nbsp;&nbsp;
                
              <input class="inpNum" type="text" maxlength="5" placeholder="N&Uacute;MERO">

              </input>
            </form>
            <form class="formFile" action="/arquivos.php" method="post">
              <label class="labelFile" For="file">Selecionar arquivo</label>
              <input class="inputFile"type="file"id ="file" name="file"></input>
              <input class="submit"type="submit"name="enviar"></input>
              
            </form> 
            </div>
          <map>
          </map>     
        </div>

            

          

        
        <div class="anormCarimbo">
        <form class="FormCar" >&nbsp;&nbsp;&nbsp;<strong>ANORMALIDADES CONSTATADAS</strong>
          <div><input class="cxText" type="checkbox"></input>Embalagem molhada/Rasgada/totalmente/parcialmente;</div>
          <div><input class="cxText" type="checkbox"></input>Etiqueta de registro danificada/Extraviada;</div>
          <div><input class="cxText" type="checkbox"></input>Falta Endereço de Destino/Remetente/Danificado;</div>
          <div><input class="cxText" type="checkbox"></input>Embalagem dilacerada e com mostra do conteúdo avariado/vazando;</div>
          <div><input class="cxText" type="checkbox"></input>Embalagem intacta, porém sem o conteúdo;</div>
          <div><input class="cxText" type="checkbox"></input>Conteúdo Avariado/Quebrado/Vazando</div>
          <div><input class="cxText" type="checkbox"></input>Embalagem dilacerada;</div>
          <div><input class="cxText" type="checkbox"></input>Embalagem intacta, porém com o conteúdo Quebrado/Vazando;</div>
          <div><input class="cxText" type="checkbox"></input>
            <label>Quantidade de itens no inv&oacute;lucro&nbsp;?&nbsp;:</label>
            <input class="itens" type="number"placeholder="total"min="0"></input>
            <label>,e a Quantidade de itens avariados/danificados&nbsp;?&nbsp;:&nbsp;&nbsp;</label>
            <input class="itens" type="number"placeholder="total"min="0"></input>            
            <label>&nbsp;&nbsp;{} % dos itens est&atilde;o avariados ou danificados&nbsp;</label>
          </div>
          <div>
            <input class="cxText" type="checkbox"></input>
            <label>Observa&ccedil;&otilde;es complementares:&nbsp;&nbsp;&nbsp;</label>
            <input class="Obs" type="text"></input>
            
          </div>
        </form>
        <div class ="fontcar"><strong>CARIMBO</strong></div>
        </div>
      <section class="encTotal">
          <div class="encPost"><input class="cxText" type="checkbox"></input>
            <label>Encaminhado ao destino</label>
          </div>
          <div class ="blText">
          <div>
            <input class="cxText" type="checkbox"></input>
            <label>Devolvido a unidade de postagem&nbsp;</label>
            <input class = "bltext1" type="text" maxlength="41"></input>
            <label>em&nbsp;</label> 
            <input class = "bltext2"type="date"></input>
            </div>
          <div>
            <input class="cxText" type="checkbox"></input>
            <label>Auto de Irregularidade de nº&nbsp;</label>
            <input class = "bltext4" type="number"></input>
            <label>/</label>
            <input class = "bltext3"type="text"></input>
            <label>, lavrado em:&nbsp;</label>
            <input class = "bltext2"type="date"></input></div>
          <div>
            <input class="cxText" type="checkbox"></input>
            <label>Destruído. Emitido o Termo de Destruição nº&nbsp;</label>
            <input class = "bltext3" type="text"></input>
            <label>&nbsp;/&nbsp;</label>
            <input class = "bltext3"type="text"></input>
            <label>&nbsp;,conforme anexo, dado a inviabilidade de reintegrar ao tráfego postal;&nbsp;</label>
          </div>   
          <div>
            <input class="cxText" type="checkbox"></input>
            <label>Encaminhado à GINSP&nbsp;</label>
            <input class = "bltext3" type="text"></input>
            <label>&nbsp;face&nbsp;</label>
            <input class = "bltext6"type="text"></input>
          </div>  
          <div>
            <input class="cxText" type="checkbox"></input>
            <label>Outras (especificar):&nbsp;</label>
            <input class = "bltext6" type="text"></input>
          </div>     
          </div>
      </section>
      <section >
        <div class ="confer1"><strong>CONFERENTES/TESTEMUNHAS</strong></div>
        <div class="confer">
          <form class="boxMat">
            <div><input class="inputConfer" maxlength="27" placeholder="NOME"></input></div>
            <div><input class="inputConferMat" maxlength="11" placeholder="MATRICULA"></input></div>
            <div >
              <input class="boxass" value="ass:"></input>
            </div>
          </form>
          <form class="boxMat">
            <div><input class="inputConfer" maxlength="27" placeholder="NOME"></input></div>
            <div><input class="inputConferMat" maxlength="11" placeholder="MATRICULA"></input></div>
            <div >
              <input class="boxass" value="ass:"></input>
            </div>
          </form>
          <form class="boxMat">
            <div><input class="inputConfer" maxlength="27" placeholder="NOME"></input></div>
            <div><input class="inputConferMat" maxlength="11" placeholder="MATRICULA"></input></div>
            <div >
              <input class="boxass" placeholder="ass:"value="ass:"></input>
            </div>
          </form>
                
        </div>
        </section >
     
      <section class="declar">
        <div >
          <strong>DECLARAÇÃO DO DESTINATARIO OU REMETENTE</strong>
          <div>
            <input class="cxText" type="checkbox"></input>
              <label>
                Aceito o objeto  <strong>sem</strong> contestação;
              </label>
            </div>
          <div>
            <input class="cxText" type="checkbox"></input>
              <label> 
                Aceito o objeto com contestação, conforme ressalva à parte;
              </label>
            <input class = "bltext7" type="text"></input>
            </div>
          <div>
            <input class="cxText" type="checkbox"></input>
             <label>
               Recuso o objeto, face
              </label> 
            <input class = "bltext8" type="text"></input>
          </div>
          <div>
            <input class="cxText" type="checkbox"></input>
              <label>
                Outra (especificar):
              </label> 
            <input class = "bltext9" type="text"></input>
          </div>
          
        </div> 
      </section>      
      <section class = "block">
        <div class = "b1"></div>
        <div class = "b2"></div>
        <div class = "b3"></div>
        <div class = "b4"></div>
        <div class = "b5"></div>
        <div class = "b6"></div>
        <div class = "b7"></div>   
       </section>
       <section class = "block1">
        <div class = "p1"></div>
        <div class = "p2">ASSINATURA</div>
        <div class = "p3"></div>
        <div class = "p4">DOC DE IDENTIDADE</div>
        <div class = "p5"></div>
        <div class = "p6">DATA</div>
        <div class = "p7"></div>   
       </section>     
        
      
        
        
      </section>

    </main>
    
  );
}
  
      
export default App;
