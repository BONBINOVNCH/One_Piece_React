import useData from "../hooks/useData"
import useSetData from "../hooks/useSetData"
import Character from "../components/Character"

const Characters = () => {

    const data = useData("https://api.api-onepiece.com/v2/characters/en")
    const characters = useSetData(data)

    
    return(
        <>
             {characters ? (
                
                characters.map((character) => <Character key={character.id} character={character}/>)

            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default Characters