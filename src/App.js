import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./view/Home";
import Detail from "./view/Detail/Deatil";
import About from "./view/About/About";
import Form from "./view/Form/Form";
import Favorites from "./components/Favorites.jsx";
const App = () => {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "raulpcq22@gmail.com";
  const PASSWORD = "12345raul";
  const location = useLocation();
  const [characters, setCharacters] = useState([]);

  function login({ password, email }) {
    if (password === PASSWORD && email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }

    // else if (password !== PASSWORD){
    //   errors.password = "La contraseña es incorrecta"
    // }
  }

  function handleLogout() {
    setAccess(false);
    navigate("/");
    if (!access) {
      return {};
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onClose = (id) => {
    const filtrarPersonajes = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filtrarPersonajes);
  };

  function onSearch(id) {
    const URL_BASE = "https://rickandmortyapi.com/api/character";
    fetch(`${URL_BASE}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const characterExists = characters.find(
            (character) => character.id === data.id
          );
          if (characterExists) {
            window.alert("Este personaje ya fue agregado!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  }

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav handleLogout={handleLogout} onSearch={onSearch} />
      )}
      <Routes>
        <Route path="/about" element={<About />} />

        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />

        <Route path="/detail/:id" element={<Detail />} />

        <Route
          path="/"
          element={<Form PASSWORD={PASSWORD} EMAIL={EMAIL} login={login} />}
        />

       <Route path="/Favorites"
        element={<Favorites />}/>

      </Routes>
    </div>
  );
};

export default App;

// function filter(value) {
//    return value != id}
