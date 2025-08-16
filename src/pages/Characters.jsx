import useData from "../hooks/useData"
import useSetData from "../hooks/useSetData"
import Character from "../components/Character"
import List from "../components/List"
import Pagiantio from "../components/Pagination"
import { useState, useRef } from "react"

const Characters = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 10


    const [query, setQuery] = useState("")
    const input = useRef("")

    const data = useData("https://api.api-onepiece.com/v2/characters/en")
    const characters = useSetData(data)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }   

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage

    return(
        <>
             {characters ? (
                <div>
                    <input ref={input} type="text" value={query} onChange={e => handleChange(e)}/>
                    {
                        <List data={characters} 
                            query={query} 
                            firstPostIndex={firstPostIndex} 
                            lastPostIndex={lastPostIndex} 
                            functionComponent={(character) => <Character key={character.id} character={character}/>}/>
                    }

                    <Pagiantio setCurrentPage={setCurrentPage} totalPosts={characters.length} postPerPage={postsPerPage}/>
                </div>
                
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default Characters