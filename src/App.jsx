import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Fruits from "./pages/Fruits";
import Characters from "./pages/Characters";
import MainCharacters from "./components/MainCharacters";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Header/>}>
            <Route path="/" index element={<Home/>}/>

            <Route path="characters" element={<Characters/>}/>
            <Route path="fruits" index element={<Fruits/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
