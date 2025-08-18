function filter(data, query, what) {
    return data.filter(dataItem => dataItem[`${what}`].toLowerCase().includes(query))
}

export default filter