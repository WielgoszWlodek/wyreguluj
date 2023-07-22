import "./settings.css";

import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";


export default function Settings() {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
   
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };


const handleDelete = async () =>{
await axios.delete("/users/" + user._id)
dispatch({ type: "LOGOUT" });
}
  
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle1">
             <span className="settingsDeleteTitle" onClick = {handleDelete}>Usuń konto</span>
        </div>
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Edytuj konto</span>
         </div>
    
        <form className="settingsForm" onSubmit={handleSubmit}>
         
         
         {/* <label>Zdjęcie profilowe</label>
          <div className="settingsPP">
           
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
          
          </div>

  */}
          <label>Nazwa użytkownika</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>E-mail</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Hasło</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Zmień
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
                Profil został zmieniony...
            </span>
          )}
        </form>
      </div>
      
    </div>
  );
}