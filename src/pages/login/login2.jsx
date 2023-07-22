import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { Button, Form, Grid, Header, Image, Message, Segment, Icon, Input } from 'semantic-ui-react';
import './formularz/SignedupForm.css';
import "./login.css";


export default function Login() {
  const [error, setError] = useState(false);
  const [username, setUserName] = useState('')

  const [password, setPassword] = useState('')
 

  
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
       if (username.length == 0) {
      setError(true)
    }

    if (password.length == 0) {
      setError(true)
    }
   
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      
      res.data && window.location.replace("/write");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    
    <div className="register" style={{marginTop:"-44px"}}>
       <div className="pulsator">
  <span  className="a"></span>
  <span className="b" ></span>
  <span  className="c"></span>
  <span className="d" ></span>
  <span className="e" ></span>
    </div>

   
   <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>

  
  
    

    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center' style={{width:"300px"}}>
      <Image style={{width:"170px", height:"80px", marginLeft:"-10px", marginBottom:"-12px"}} src = 'logo.png'/>Logowanie
      </Header>
     
    
    
        <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked >
        <div className="group">
        
        <input style={{marginTop:"-2x"}}
         value={username}
         onChange={e => setUserName(e.target.value)}
        
          placeholder="Nazwę użytkowinika..."
          ref={userRef}
        
        />


{error && username.length <= 0 ?
 <label style={{color:"#e62929", fontSize:"13px",  marginTop:"60px", marginLeft:"90px"}}> Podaj nazwę</label> : ""}
        
        <input style={{marginTop:"20px"}}
         value={password}
         onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Hasło..."
            ref={passwordRef}
             
        />
       
{error && password.length <= 0 ?
  <label  style={{color:"#e62929", fontSize:"13px",  marginTop:"120px",  marginLeft:"90px"}}>Podaj hasło</label> : ""}
        <Button style={{marginTop:"27px"}} type="submit" className="button-teal" color='teal' fluid size='large'>
          Zaloguj się
        </Button>
        </div>
        </Segment>
        </Form>
      <Message>
        Nie masz konta?   <Link to={`/register`}>Zarejestruj się </Link>
      </Message>
    </Grid.Column>
  </Grid>


    
     
    </div> 
  );
}