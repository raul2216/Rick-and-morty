import style from "./SearchBar.module.css"
import { useState } from "react";



const SearchBar = ({onSearch}) => {
const [id , setId] = useState("")

const handleChange = (event) =>{
   
    setId(event.target.value )
   
}

   return (
      <div className={style.container}>
         <input  className={style.BotonSearch} type='search'  onChange={handleChange} />
         <button 
         className={style.Boton} onClick={()=>{onSearch(id)}}>
            Agregar
         </button>
      </div>
   );
}
export default SearchBar