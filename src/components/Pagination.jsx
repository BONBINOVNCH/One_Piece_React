import PaginationUi from '@mui/material/Pagination';

function Pagiantio({ totalPosts, postPerPage, setCurrentPage, currentPage}) {
let pages = []

for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
    pages.push(i)
}
    return(
        <PaginationUi className='pagiantion' color="primary" count={pages.length} page={currentPage}  shape="rounded" onChange={(event, value) => setCurrentPage(value)} />
    )
}

export default Pagiantio