
function Fruit({ fruit }) {
    return (
        <div className="character_blok">
            <ul>
                <li>{fruit?.id}</li>
                <li>{fruit?.name}</li>
                <li>{fruit?.type}</li>
            </ul>
        </div>
    )
}

export default Fruit