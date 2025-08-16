import useData from "../hooks/useData"
import useSetData from "../hooks/useSetData"
import Fruit from "../components/Fruit"
import { useState, useRef } from "react"
import Pagiantio from "../components/Pagination"

const Fruits = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

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
                <div>
                    <input ref={input} type="text" onChange={e => handleChange(e)}/>
                    {fruits.filter(fruit => fruit.name.toLowerCase().includes(query)).slice(firstPostIndex, lastPostIndex).map((fruit) => <Fruit key={fruit.id} fruit={fruit}/>)}
                    <Pagiantio setCurrentPage={setCurrentPage} totalPosts={fruits.length} postPerPage={postsPerPage}/>
                </div>
                
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default Fruits