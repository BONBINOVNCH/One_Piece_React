function List({data, query, firstPostIndex, lastPostIndex, functionComponent}) {
    return(
        <div className="charecters">
            {data.filter(dataItem => dataItem.name.toLowerCase().includes(query)).slice(firstPostIndex, lastPostIndex).map(functionComponent)}
            
        </div>
    )
}

export default List