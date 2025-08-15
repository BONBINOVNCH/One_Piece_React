import useData from "../hooks/useData"
import useSetData from "../hooks/useSetData"

const Home = () => {

    const data = useData("https://api.api-onepiece.com/v2/movies/en/2")
    const character = useSetData(data)

    return(
        <>
        <div>{character?.id}</div>
        </>
    )
}

export default Home