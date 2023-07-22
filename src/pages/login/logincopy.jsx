import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { Grid, Image, Segment } from 'semantic-ui-react'

import "./login.css";

export default function Login() {

  
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res.data)
      res.data && window.location.replace("/write");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    
   


/*<div className="container">
  <div className="box1"></div>


  <div className="box2"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>

</div>*/
 
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
        
        <span className="loginTitle">Logowanie</span>
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


      </Grid.Column>
      <Grid.Column width={3}>
      
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Nazwa użytkownika</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Podaj nazwę użytkowinika..."
          ref={userRef}
        />
        <label>Hasło</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Wpisz hasło..."
          ref={passwordRef}
        />
        <button className="button1" type="submit" disabled={isFetching}>
          Zaloguj
        </button>
        
      </form> 

      
      <div className="pulsator5">
  <span  className="a5"></span>
  <span className="b5" ></span>
  <span  className="c5"></span>
  <span className="d5" ></span>
    <span  className="e5" ></span>
</div>
      <div className="pulsator6">
  <span  className="a6"></span>
  <span className="b5" ></span>
  <span  className="c6"></span>
  <span  className="d7"></span>
   
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