import React,{useState} from "react";
import Square from "./Square";
const Board=()=>{
    const [state,setstate]=useState(Array(9).fill(null));
    const [isXturn,setisXturn]=useState(true); 

    const checkWinner=()=>{
        const winners=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for(let logic of winners){
            const[a,b,c]=logic;
            if(state[a]!==null && state[a]===state[b] && state[b]===state[c] && state[a]===state[c])
            {
              return state[a];
            }
            
        }
        return false;
    }
    const isWinner=checkWinner();

    const handleClick=(ind)=>{
     const copystate=[...state];
     copystate[ind]= isXturn?"X":"O";
     setstate(copystate)
     setisXturn(!isXturn)
    }
    console.log('state',state);
    return (
       
       <div className="board-container">
        {
            isWinner?(<>{isWinner} won the game!!! <br />
            <button onClick={()=>setstate(Array(9).fill(null))}>Play Again</button></>):
            (
             <>
              <div className="board-row">
            <Square onClick={()=>handleClick(0)} value={state[0]}/>
            <Square onClick={()=>handleClick(1)} value={state[1]}/>
            <Square onClick={()=>handleClick(2)} value={state[2]}/>
           </div>
           <div className="board-row">
           <Square onClick={()=>handleClick(3)} value={state[3]}/>
           <Square onClick={()=>handleClick(4)} value={state[4]}/>
           <Square onClick={()=>handleClick(5)} value={state[5]}/>
           </div>
           <div className="board-row">
           <Square onClick={()=>handleClick(6)} value={state[6]}/>
           <Square onClick={()=>handleClick(7)} value={state[7]}/>
           <Square onClick={()=>handleClick(8)} value={state[8]}/> 
           </div>
             </>
            )
        }
        </div>
       
    );
}
export default Board;