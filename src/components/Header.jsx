import { Link, Outlet } from "react-router"

const Header = () => {
    return (
        <>
         <header className="header">
    <div className="logo">ONE PIECE</div>
    <nav className="nav">
      <ul>
        <Link to="/" className="nav_item">Головна</Link>
        <Link to="characters" className="nav_item">Персонажі</Link>
        <Link to="fruits" className="nav_item">Фрукти</Link>
      </ul>
    </nav>
   
  </header>
         <Outlet/>
        </>

    )
}
                    
                    {/* <div className="nav_block">
                        <Link to="/" className="nav_item">Головна</Link>
                        <Link to="characters" className="nav_item">Персонажі</Link>
                        <Link to="fruits" className="nav_item">Фрукти</Link>
                    </div> */}
export default Header