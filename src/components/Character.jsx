
function Character({ character }) {
    return (
        <div className="character_blok">
            <ul>
                <li>{character?.id}</li>
                <li>{character?.name}</li>
                <li>{character?.age}</li>
            </ul>
        </div>
    )
}

export default Character