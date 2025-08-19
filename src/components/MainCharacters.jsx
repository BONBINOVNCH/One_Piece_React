import pirates from "/img/pirates.jpg"
import mariens from "/img/Fruits.webp"
import { Link } from "react-router"

function MainCharacters() {
    return (
        <div className="maincharacters">
            <div className="maincharacters_block pirates">
                <h2 className="maincharacters_title"><Link to={`/characters`} >Characters</Link></h2>
                <img src={pirates} alt="" className="maincharacters_img" />
            </div>
            <div className="maincharacters_block mariens">
                <img src={mariens} alt="" className="maincharacters_img" />
                <h2 className="maincharacters_title"><Link to={`/fruits`} >Fruits</Link></h2>
            </div>
            
        </div>
    )
}

export default MainCharacters