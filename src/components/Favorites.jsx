import { connect } from "react-redux"
import Card from "./Card/Card"
import { useSelector } from "react-redux"




const Favorites = (myFavorites) => {

    const favorites = useSelector((state)=> state.myFavorites)
    return(
      <div>
         {favorites.map( ({id,name,species,gender,image,onClose}) => {
            return(<Card
                key={id}
                id={id}
               name={name}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose} 
               
               /> )
            
         })}

      </div>




    
    )
}

const mapStateToProps = (state) =>{
     return{ ...state.myFavorites,
         myFavorites: state.myFavorites
     }
}


export default connect(mapStateToProps, null)(Favorites)