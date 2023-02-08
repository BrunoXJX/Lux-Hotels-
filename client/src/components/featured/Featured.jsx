import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured=()=>{
    const navigate=useNavigate();
    const {data,loading,error}=useFetch("/hotels/countByCity?cities=Lisboa,Viseu,Porto")

    const handleclick=()=>{
        navigate("/hotels/Viseu")

    }
    const handleclick1=()=>{
        navigate("/hotels/Porto")
        
    }
    const handleclick2=()=>{
        navigate("/hotels/Lisboa")
        
    }
    
    return(
        <div className="featured">   

<div className="featuredItem">
                <img src="https://cdn.visitportugal.com/sites/www.visitportugal.com/files/mediateca/TAP_PracaComercio_01e_CL-co.jpg" alt="" className="featuredImg" onClick={handleclick2} />
                <div className="featureTitles">
                    <h1>Lisboa</h1>
                    <h2>{data[2]} Hotel</h2>

                </div>
            </div>

                <div className="featuredItem">
                <img src="https://www.nacionalidadeportuguesa.com.br/wp-content/uploads/2021/02/4.jpg" alt="" className="featuredImg"onClick={handleclick}/>
                <div className="featureTitles">
                    <h1>Viseu</h1>
                    <h2>{data[0]} Hotel</h2>

                </div>       
            </div>

   
            <div className="featuredItem">
                <img src="https://wallpaperaccess.com/full/1332062.jpg" alt="" className="featuredImg"onClick={handleclick1} />
                <div className="featureTitles">
                    <h1>Porto</h1>
                    <h2>{data[1]} Hotel</h2>

                </div>
            </div>
            
        </div>
    )
}
export default Featured