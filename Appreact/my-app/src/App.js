import React, { useState } from 'react'
import './App.css';

function App() {
  const emptBoard= Array(9).fill("")
  const [board, setBoard] = useState(emptBoard)
  function handleCellClick(index){
    setBoard(board.map((item, itemIndex)=> itemIndex === index ? "X" : item))
  } 
  console.log(handleCellClick)

  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>
      <div className="board">
        {
          board.map((item, index)=>{
            return(
              <div key={index} className={`cell ${item}`}
                onClick= {()=> setBoard(board.map((item, itemIndex)=> itemIndex === index ? "X" : item))}
              >
                {item}
              </div>
            )
          })
        }

      </div>
    </main>
    
  );
}

export default App;
