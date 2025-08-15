import { useEffect, useRef, useState } from "react"

function useData(url) {
    const effectRun = useRef(true)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=> {

        if(effectRun.current) {
            

            const getData = async () => {
                try {
                    setLoading(true)
                    console.log(loading)
                    console.log("Loading")

                    const response = await fetch(url)
                    if (!response.ok) {
                        throw new Error("Щось не так");
                    }

                    const json = await response.json()
                    setData(json)
                }
                catch (err){
                    setError(err.message)
                    console.log(error)
                }
                finally {
                    setLoading(false)
                    console.log("done")
                }
            }
            effectRun.current = false
            getData()
        }

    }, [url])

    return data
}
export default useData