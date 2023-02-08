import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Signup.css";
import Worldly from "./images/Worldly.jpg"



const Signup = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  

  //   Handle Change Function

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };


  //   Handle Click Function
  
  const handleClick = async (e) => {
  
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    
    
    try {
      
      
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/duwvvwmdg/image/upload",
        data
      );


      const { url } = uploadRes.data;

      const newUser = {
        ...info,
        img: url,
      };
      console.log(info);

      const res = await axios.post(
        "/auth/register",newUser
      );
      console.log(info);
      dispatch({ type: "REGISTER_SUCCESS", payload:    res.data.details });
      
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
    }
    navigate("/login");
    console.log(info);
      
  };
  
  return (
    <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
          <h1>Entar/Registar</h1>
          <img required className="img"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <label htmlFor="file">
                  Image:  icon
                </label>
                <form>
                <input
                  type="file"
                  id="file"
                  
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                  required
                />
                </form>
          
          <form>
            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
              required
            />
            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              required
            />

            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Phone"
              id="phone"
              onChange={handleChange}
              required
            />

            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="City"
              id="city"
              onChange={handleChange}
              required
            />
            

            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Country"
              id="country"
              onChange={handleChange}
              required
            />

            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              required
            />

            <button disabled={loading} onClick={handleClick}>
              Registar
            </button>
            {error && <span>{error.message}</span>}
          </form>
        </div>
        <div className="left">
          <h1>Olá utilizador!</h1>
          <img className="logo" src={Worldly} alt="" />
          <span style={{ padding: "20px 0" }}>Já tem conta?</span>
          <button>
            <NavLink
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Entrar
            </NavLink>
            
          </button>
        
          <button>
            <NavLink
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Principal
            </NavLink>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;