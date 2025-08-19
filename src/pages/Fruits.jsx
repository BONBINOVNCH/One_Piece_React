import useData from "../hooks/useData"
import useSetData from "../hooks/useSetData"
import Fruit from "../components/Fruit"
import { useState, useRef } from "react"
import Pagiantio from "../components/Pagination"
import List from "../components/List"
import filter from "../tools/filter"

const Fruits = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 10

    const [query, setQuery] = useState("")
    const input = useRef("")

    const data = useData("https://api.api-onepiece.com/v2/fruits/en")
    const fruits = useSetData(data)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }   

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    

    return(
        <>
             {fruits ? (
                <div className="all_characters">
                    <div className="input_block">
                        <h4 className="input_title">ім'я Фрукта: </h4>
                        <input ref={input} type="text" value={query} onChange={e => handleChange(e)}/>
                    </div>

                        {   
                            <List data={fruits} 
                            query={query} 
                            firstPostIndex={firstPostIndex} 
                            lastPostIndex={lastPostIndex} 
                            functionComponent={(fruit) => <Fruit key={fruit.id} fruit={fruit}/>}/>
                        }

                    <Pagiantio currentPage={currentPage} setCurrentPage={setCurrentPage} totalPosts={filter(fruits, query, "name").length} postPerPage={postsPerPage}/>
                </div>
                
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default Fruits