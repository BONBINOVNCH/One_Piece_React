function filter(data, query) {
    return data.filter(dataItem => dataItem.name.toLowerCase().includes(query))
}

export default filter