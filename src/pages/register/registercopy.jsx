import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { Grid, Image, Segment } from 'semantic-ui-react';

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res) 
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
<div >
<section><div className="box1">
  <Grid columns='equal'>
    
    <Grid.Row>

 

      <Grid.Column>
      <div className="pulsator">
  <span  className="a"></span>
  <span className="b" ></span>
  <span  className="c"></span>
  <span className="d" ></span>
  <span className="e" ></span>
    
</div>
     <div className="pulsator8">
  <span  className="a8"></span>
  <span className="b8" ></span>
  <span  className="c8"></span>
  <span className="d8" ></span>
    <span  className="e8" ></span>
</div>
      </Grid.Column>
     
      <Grid.Column >
        
      <span className="registerTitle">Rejestracja</span>
             <div className="pulsator1">
  <span  className="a1"></span>
  <span className="b1" ></span>
  <span  className="c1"></span>
  <span className="d1" ></span>
    <span  className="e1" ></span>
</div>
      </Grid.Column>
    
      <Grid.Column >
        <div className="pulsator2">
  <span  className="a2"></span>
  < span className="b2" ></span>
  < span  className="c2"></span>
  < span className="d2" ></span>
  < span  className="e2"></span>
  < span className="f2" ></span>
  < span  className="g2"></span>
 
  </div>
  <div className="pulsator3">
  <span  className="a3"></span>
  <span className="b3" ></span>
  <span  className="c3"></span>
  <span className="d3" ></span>
    <span  className="e3" ></span>
</div>



 
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
      <div className="pulsator4">
  <span  className="a4"></span>
  <span className="b4" ></span>
  <span  className="c4"></span>
  <span className="d4" ></span>
  <span className="e4" ></span>
   
</div>
  <div className="pulsator55">
  <span  className="a55"></span>
  <span className="b55" ></span>
  <span  className="c55"></span>
  <span className="d55" ></span>
    <span  className="e55" ></span>
</div>

      </Grid.Column>
      <Grid.Column width={3}>
      
      <form className="registerForm"  onSubmit={handleSubmit}>
     
        <input
          type="text"
          className="registerInput"
          placeholder="Podaj nazwę użytkownika"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Podaj email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Hasło</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Wpisz hasło"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button2" type="submit">
          Zarejestruj
        </button>
      </form>
    
      {error && <span style={{color:"red", marginTop:"20px"}}>Coś poszło nie tak!</span>}
      
    
      <div className="pulsator66">
  <span  className="a66"></span>
  <span className="b66" ></span>
  <span  className="c66"></span>
  <span  className="d66"></span>
  <span  className="e66"></span>
   
</div>
      </Grid.Column>
      <Grid.Column>
         <div className="pulsator7">
  <span  className="a7"></span>
  <span className="b7" ></span>
  <span  className="c7"></span>
  <span className="d7" ></span>
  <span  className="e7"></span>
  </div>
 
      </Grid.Column>
    </Grid.Row>
  </Grid>

      </div>
     </section>
     
    </div> 
  );
}