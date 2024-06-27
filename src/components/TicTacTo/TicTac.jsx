import { useState } from 'react'
import Board from './Board'
import { useEffect } from 'react'
const PLAYER_X = 'X'
const Player_O = 'O'
function TicTac() {
   const [tiles, setTiles] = useState(Array(9).fill(null))
   const [playerTurn,setPlayerTurn] =useState(Player_O)
   const [strikeclass,setStrikeclass] =useState('')
   const [lock,setLock] = useState(false)
   const winningCombinations=[

    {combo:[0,1,2],strikeClass:'strike-row-1'},
    {combo:[3,4,5],strikeClass:'strike-row-2'},
    {combo:[6,7,8],strikeClass:'strike-row-3'},

    {combo:[0,3,6],strikeClass:'strike-column-1'},
    {combo:[1,4,7],strikeClass:'strike-column-2'},
    {combo:[2,5,8],strikeClass:'strike-column-3'},

    {combo:[0,4,8],strikeClass:'strike-diagonal-1'},
    {combo:[2,4,6],strikeClass:'strike-diagonal-2'},
   ]
   useEffect(()=>{
     for(let i=0;i<winningCombinations.length;i++){
        const one= tiles[winningCombinations[i].combo[0]];
        const two= tiles[ winningCombinations[i].combo[1]];
        const three=  tiles[winningCombinations[i].combo[2]]
            if( one != null  && one ===two && two === three  ){
                setStrikeclass(winningCombinations[i].strikeClass)
                setLock(true)
            }
     }
   },[tiles])

  const handelTileClick= (index)=>{
    if(tiles[index] != null || lock === true){
        return
    }
     const newTiles = [...tiles];
     newTiles[index] = playerTurn;
     setTiles(newTiles);
     if(playerTurn === 'X'){
        setPlayerTurn(Player_O)
     }else{
        setPlayerTurn(PLAYER_X)
     }
  }
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <Board tiles={tiles} strikeclass={strikeclass} onTileClicked={handelTileClick}/>
        <h2 style={{display : lock ? 'none' : 'block'}}>{playerTurn}'s Turn</h2>
        <h2 style={{display  : lock ? 'block' : 'none'}}>{playerTurn =='X' ? 'O' : 'X'} is the Winner</h2>
      </>
    )
  }
  
  export default TicTac
  