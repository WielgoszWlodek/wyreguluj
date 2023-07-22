import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { Grid, Image, Segment } from 'semantic-ui-react';
import styled from "styled-components";

const Container = styled.div`
  color: #107896;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 500px;
  border: 1px solid #8758ff;
  border-radius: 6px;
  /* margin: 3% 20px; */
  margin: auto;
  margin-top: -30px;
 
  max-width: 700px;
  background-color: #fff;
  gap: 40px;
  box-sizing: border-box;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    margin: 3% 20px;
  }
`;
const OptionsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
//
  gap: 30px;
  @media (max-width: 768px) {
    gap: 30px;
  }
`;
const McqContainer = styled.div`
  flex-direction: row;
  margin: 5%;
  text-align: center;
  @media (max-width: 768px) {
   
  }
`;
const Qn = styled.legend`
`;
const Qn1 = styled.legend`
color: #2c2d2f;
font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
font-size: 1.35rem;
font-weight: 500;
justify-content: center;
line-height: 0.75rem;
padding: .75rem 1.65rem;
margin-bottom: 10px;
`;

const Button1 = styled.button`
  background-color: rgb(48, 128, 168);
  color: aliceblue;
  width: 200px;
  height: 50px;
  border: 2px;
  margin: 2%;
  /* &:focus {
    background: #20b8be;
    transition: 0.5s;
  } */
  @media (max-width: 768px) {
    min-width: 200px;
    width: max-content;
    height: 40px;
    font-size: 15px;
  }
`;
const FormBtn = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  background-color: rgb(153, 156, 161);
  border: none;
  margin-top: 25px;
  margin-left:-425px;
 
  border-radius: 5px;
  opacity: 0.8;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    background: #808080;
  }
`;


export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')


  const handleSubmit1 = (e) => {
    e.preventDefault();


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
       setError(false);
    if (username.length == 0) {
      setError(true)
    }
    if (username.length >= 10) {
      setError(true)
    }
    if (email.length == 0) {
      setError(true)
    }
    if (email.length >= 10) {
      setError(true)
    }
  if(!/\S+@\S+\.\S+/.test(email)){
    setError(true)
      }


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
      <section><div >
        <Grid columns='equal'>

          <Grid.Row>

            <Grid.Column width={3}>


              <form onSubmit={handleSubmit} >
                <div className="group">
                  <input required
                    onChange={e => setName(e.target.value)}
                    value={username}
                  />

                  <span className="highlight"></span>
                  <span className="bar6"></span>

                  <input required
                    onChange={e => setName(e.target.value)}
                    value={email}
                  />

                  <span className="highlight"></span>
                  <span className="bar6"></span>

                  {error && username.length <= 0 ?
                    <label >Podaj nazwę</label> : ""}
                  {error && username.length >= 20 ?
                    <label >Wpis jest za długi</label> : ""}
                  {error && email.length <= 0 ?
                    <label >Podaj email</label> : ""}
                  {error && email.length >= 10 ?
                    <label >Email jest za długi</label> : ""}
                  {error && !/\S+@\S+\.\S+/.test(email) ?
                    <label >Email jest błędny</label> : ""}

                  {error && (username.length >= 1 && username.length < 20) && (!/\S+@\S+\.\S+/.test(email))
                    ?
                    <>
                      <button className="button-57" style={{ width: "270px", color: "white", marginTop: "100px" }} role="button">Dalej</button>
                    </>
                    :
                    <div>
                      <>
                        <button className="button-57" style={{ width: "270px", marginTop: "100px" }} onClick={handleSubmit1} role="button">Dodaj</button>
                      </>
                    </div>
                  }
                </div>
              </form>


              <form onSubmit={handleSubmit}>

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

              {error && <span style={{ color: "red", marginTop: "20px" }}>Coś poszło nie tak!</span>}



            </Grid.Column>

          </Grid.Row>
        </Grid>

      </div>
      </section>

    </div>
  );
}