import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function HelpDetail() {
    const params = useParams();
    const navigate = useNavigate();
    const [userHelp, setUserHelp] = useState({});

    useEffect(() => {
        async function fetchUserHelp() {
          const response = await axios.get(
            `https://ironrest.herokuapp.com/adicionarHelp/${params.helpId}`
          );
    
          setUserHelp(response.data);
        }
        fetchUserHelp();
      }, [params.helpId]);

      async function handleDelete() {
        await axios.delete(
          `https://ironrest.herokuapp.com/adicionarHelp/${params.helpId}`
        );
    
        navigate("/");
      }





    return ( 
        <div className="card">
						<p className="card-body"><strong>Name :   </strong>{userHelp.name} </p>
						<span className="card-body"><strong>Email:   </strong>{userHelp.email} </span>
						<div className="form-floating">
							<p
								className="form-control"
								placeholder="Leave your post here"
								id="post"
								style={{ height: "100px", width: "600px" }}
								name="post"
							><strong>Help Request:   </strong> {userHelp.text}</p>
						</div>	
                        <div>
                        <button className="btn btn-dark" onClick={handleDelete}>Delete!</button>	
                        </div>		
					</div>

     );
}

export default HelpDetail;