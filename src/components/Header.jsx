import { NavLink, Outlet } from "react-router"

const Header = () => {


    return (
        <>
         <header className="header">
    <div className="logo">ONE PIECE</div>
    <nav className="nav">
      <ul>
        <NavLink to="/" className="nav_item">Головна</NavLink>
        <NavLink to="characters" className="nav_item">Персонажі</NavLink>
        <NavLink to="fruits" className="nav_item">Фрукти</NavLink>
      </ul>
    </nav>
   
  </header>
         <Outlet/>
        </>

    )
}

export default Header