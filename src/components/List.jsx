function List({data, query, firstPostIndex, lastPostIndex, functionComponent}) {
    return(
        <>
            {data.filter(dataItem => dataItem.name.toLowerCase().includes(query)).slice(firstPostIndex, lastPostIndex).map(functionComponent)}
            
        </>
    )
}

export default List