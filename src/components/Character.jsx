
function Character({ character }) {
    return (
        <div className="character-card">
  <div className="character-info">
    <h2>{character.name}</h2>
    <p><strong>Нагорода:</strong> {character.bounty || "немає"}</p>
    <p><strong>Команда:</strong> {character.crew?.name || "немає"}</p>
    <p><strong>Статус:</strong> {character.status || "немає"}</p>
    <p><strong>Робота:</strong> {character.job || "немає"}</p>
  </div>
</div>
    )
}

export default Character