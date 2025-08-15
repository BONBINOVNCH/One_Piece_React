import { Link, Outlet } from "react-router"

const Header = () => {
    return (
        <header>
                <nav>
                    <img src={"img/One-Piece-Logo.png"} alt="" className="logo" />
                    
                    <div className="nav_block">
                        <Link to="/" className="nav_item">Головна</Link>
                        <Link to="characters" className="nav_item">Персонажі</Link>
                        <Link to="fruits" className="nav_item">Фрукти</Link>
                    </div>

                    <div className="search_block">
                        
                    </div>

                <Outlet/>
            </nav>
        </header>
        
    )
}

export default Header