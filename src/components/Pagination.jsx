import PaginationUi from '@mui/material/Pagination';

function Pagiantio({ totalPosts, postPerPage, setCurrentPage, currentPage}) {
let pages = []

for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
    pages.push(i)
}
    return(
        <PaginationUi count={pages.length} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
    )
}

export default Pagiantio