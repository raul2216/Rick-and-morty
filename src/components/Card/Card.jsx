import React, { useState, useEffect } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import {  connect } from "react-redux";

const Card = ({
  name,
  image,
  status,
  species,
  gender,
  origin,
  onClose,
  id,
  addFav,
  removeFav,
  myFavorites
}) => {
  // const dispatch = useDispatch(); no despacho desde aqui porque de eso se encarga el middware

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      removeFav(id);
    } else if (isFav === false) {
      setIsFav(true);
        addFav({
          name,
          image,
          status,
          species,
          gender,
          origin,
          onClose,
          id,
        })
      ;
    }
    console.log(myFavorites);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
 

  return (
    <div className={style.card}>
      {<button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>}
      <button
        className={style.myButton}
        onClick={() => {
          onClose(id);
        }}
      >
        Delete
      </button>
      <Link to={`/detail/${id}`}>
        <p className={style.h2}>Name: {name}</p>
      </Link>
      <img className={style.Img} src={image} alt="imagen" />
      <p>Estado: {status}</p>
      <p>Especie: {species}</p>
      <p>Genero: {gender}</p>
      <p>Origen: {origin}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
       
     return{ ...state.myFavorites,
      myFavorites: state.myFavorites
      
     }

}



export default connect(mapStateToProps, mapDispatchToProps)(Card);
