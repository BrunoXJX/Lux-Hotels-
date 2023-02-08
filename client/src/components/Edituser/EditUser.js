import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./Edituser.css"
import Worldly from "./images/Worldly.jpg"
import { NavLink, useLocation, useNavigate } from "react-router-dom"

const EditUser=()=>{
    const { user }=useContext(AuthContext)

const [credentials1, setCredentials1] = useState({
    username:undefined,
    email:undefined,
    phone:undefined,
    country:undefined,
    city:undefined,
    password:undefined,


});

const { loading, error, dispatch } = useContext(AuthContext);

const navigate = useNavigate();

//   Handle Change Function
const handleChange = (e) => {

e.preventDefault()
setCredentials1((prev) => ({ ...prev, [e.target.id]: e.target.value }));

};


//   Handle Click Function
const handleClick = async (e) => {
e.preventDefault()
try{

    
    const res = await axios.put(
        `api/users/update/${user._id}`,
        credentials1
        );   
     
    
}catch(err){
    
}
navigate("/login")

};
console.log(credentials1);
  
    
    return(
        <div className="login2">
            
            <div className="lContainer2">
            <h1  className="sp">Bem vindo</h1>
            
                
                <img className="logol" src={Worldly} alt="" />
                <span className="sp">Olá {user.username}.<p></p> Edita o teu perfil aqui :) </span>
                
                
                 <input type="text" className="lInput" placeholder="Nome" id="username" onChange={handleChange} />
                <input type="email" className="lInput" placeholder="Novo Email" id="email" onChange={handleChange} />
                <input type="tel" className="lInput" placeholder="Novo numero" id="phone" onChange={handleChange} />
                <input type="text" className="lInput" placeholder="Novo Pais" id="country" onChange={handleChange} />
                <input type="text" className="lInput" placeholder="Nova Cidade" id="city" onChange={handleChange} />
                <input type="password" className="lInput" placeholder="Nova Password" id="password" onChange={handleChange} />
                <button disabled={loading} onClick={handleClick} className="lButton">Submeter</button>
                <button className="lButton">
            <NavLink
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Principal
            </NavLink>
            
            
          </button>

                
            </div>
        </div>
    )
}
export default EditUser