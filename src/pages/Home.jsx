import hero from "/img/one-piece-1920x1080.jpg"

const Home = () => {
    return(
        <>
          <section className="hero">
            <div className="hero-img">
                <img src={hero} alt="" />
            </div>
    <div className="hero-text">
      <h2>Long ago...</h2>
      <p>
        The infamous Gol D. Roger was the strongest and most powerful pirate on the seas...
        <br></br>
        Monkey D. Luffy is a spirited, energetic and somewhat dim-witted young man with a very big dream.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae delectus neque suscipit. Incidunt natus assumenda repellat magni dolor nesciunt exercitationem, porro quas! In sed magnam sapiente dignissimos fugiat. Rerum, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis illum excepturi vero architecto corporis qui officiis, voluptatem consequuntur nisi rem! Laudantium inventore nesciunt optio neque hic dignissimos nisi doloribus saepe!
      </p>
      <div className="info">
        <div><strong>Studio:</strong><br /><span>Toei Animation</span></div>
        <div><strong>Episodes:</strong><br /><span>1000+</span></div>
        <div><strong>Year:</strong><br /><span>1999</span></div>
      </div>
    </div>
  </section>
        </>
    )
}

export default Home