import useData from "../hooks/useData"
import useSetData from "../hooks/useSetData"
import Character from "../components/Character"
import List from "../components/List"
import Pagiantio from "../components/Pagination"
import { useState, useRef } from "react"
import filter from "../tools/filter"

const Characters = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 20


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
                <div className="all_characters">
                    <div className="input_block">
                        <h4 className="input_title">ім'я персонажа: </h4>
                        <input ref={input} type="text" value={query} onChange={e => handleChange(e)}/>
                    </div>
                    
                    {
                        <List data={characters} 
                            query={query} 
                            firstPostIndex={firstPostIndex} 
                            lastPostIndex={lastPostIndex} 
                            functionComponent={(character) => <Character key={character.id} character={character}/>}/>
                    }

                    <Pagiantio setCurrentPage={setCurrentPage} totalPosts={filter(characters, query, "name").length} postPerPage={postsPerPage}/>
                </div>
                
            ) : (
                <p className="loading"><span>Loading...</span></p>
            )}
        </>
    )
}

export default Characters