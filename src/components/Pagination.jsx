function Pagiantio({ totalPosts, postPerPage, setCurrentPage}) {
let pages = []

for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
    pages.push(i)
}
    return(
        <div>
            {pages.map((page, index) => {
                return <button onClick={() => setCurrentPage(page)} key={index}>{page}</button>
            })}
        </div>
    )
}

export default Pagiantio