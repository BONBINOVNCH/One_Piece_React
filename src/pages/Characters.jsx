import useData from "../hooks/useData"
import useSetData from "../hooks/useSetData"
import Character from "../components/Character"
import { useState, useRef } from "react"

const Characters = () => {


    const [query, setQuery] = useState("")
    const input = useRef("")

    const data = useData("https://api.api-onepiece.com/v2/characters/en")
    const characters = useSetData(data)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }   

    return(
        <>
             {characters ? (
                <div>
                    <input ref={input} type="text" value={query} onChange={e => handleChange(e)}/>
                    {characters.filter(character => character.name.includes(query)).map((character) => <Character key={character.id} character={character}/>)}
                </div>
                
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default Characters