import SearchBar from  "../SearchBar/SearchBar";
import style from "../Nav/Nav.module.css"
import { Link } from "react-router-dom";
const Nav = ({onSearch, handleLogout}) =>{
    return(
        <div className={style.Container}>
        <SearchBar onSearch={onSearch} />
    
        <Link  to={'/about'}                  > 
      <button>About</button>
      </Link> 
      
      <Link to={'/home'}> 
      <button>Home</button>
      </Link> 

      <Link to={'/favorites'}> 
      <button>Favoritos</button>
      </Link> 

      
      <button onClick={handleLogout}>Log out</button>
    
        </div>
        
    )
}





export default Nav