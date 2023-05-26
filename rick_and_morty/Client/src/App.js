import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

// const email = "andruss@gmail.com";
// const password = "1234asd";

function App() {
  const location = useLocation();                                          
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const login = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`)
    .then(({ data }) => {
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    });
 }
  
  useEffect(() => {   
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const characterFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(characterFiltered);
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} access={access} setAccess={setAccess}/>}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
