import mysteryFruit from "/img/MysteryFruit.webp"

function Fruit({ fruit }) {
    return (
        <div className="character-card">
            <div className="character-image">
    <img src={fruit.filename !== "https://images.api-onepiece.com/fruits/" ? fruit.filename : mysteryFruit} alt=""/>
  </div>
  <div className="character-info">
    <h2>{fruit.name}</h2>
    <p><strong>Тип:</strong> {fruit.type || "немає"}</p>
    <p><strong>Опис:</strong> {fruit.description || "немає"}</p>

  </div>
</div>
    )
}

export default Fruit