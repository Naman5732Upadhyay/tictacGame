import Strike from "./Strike";
import Tile from "./Tile";

function Board({tiles,onTileClicked,strikeclass}) {
    return ( 
    <div className="board">
      <Tile value={tiles[0]} onClick={()=>onTileClicked(0)} className={`right-border bottom-border`}/>
      <Tile value={tiles[1]} onClick={()=>onTileClicked(1)} className={`right-border bottom-border`}/>
      <Tile value={tiles[2]} onClick={()=>onTileClicked(2)} className={` bottom-border`}/>
      <Tile value={tiles[3]} onClick={()=>onTileClicked(3)} className={`right-border bottom-border`}/>
      <Tile value={tiles[4]} onClick={()=>onTileClicked(4)} className={`right-border bottom-border`}/>
      <Tile value={tiles[5]} onClick={()=>onTileClicked(5)} className={` bottom-border`}/>
      <Tile value={tiles[6]} onClick={()=>onTileClicked(6)} className={`right-border `}/>
      <Tile value={tiles[7]} onClick={()=>onTileClicked(7)} className={`right-border `}/>
      <Tile value={tiles[8]} onClick={()=>onTileClicked(8)} className={``}/>
      <Strike strikeclass={strikeclass}/>
    </div> 
    );
}

export default Board;