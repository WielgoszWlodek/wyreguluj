import React , { useContext, useState, useEffect, createRef } from "react";
import "../write.css";
import { useHistory } from 'react-router';
import axios from "axios";
import { Context } from "../../../context/Context";
import { Slider } from "react-semantic-ui-range";
import { Label, Grid, Button, Form, TextArea, Dimmer, Loader, Image, Segment ,Icon,Header } from "semantic-ui-react";
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import Przyczyna from '../przyczyna';
import { useLocation } from "react-router";
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
  margin-top: 10px;
 
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

const Qn1 = styled.div`

color: #2c2d2f;
font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
font-size: 1.35rem;
font-weight: 500;
justify-content: center;
line-height: 0.75rem;
padding: .75rem 1.65rem;
margin-bottom: 10px;


`;


export default function RozgniewanyNazwa(props) {


  const UczucieKoniec = props.nazwa;
  const Posredni = props.posredni;

  const [title, setTitle] = useState("Rozgniewany");
  const [desc, setDesc] = useState(UczucieKoniec);
  const [opis, setOpis] = useState("");
  const { user } = useContext(Context);
  let history = useHistory();
 


  const [isLoading, setIsLoading]= useState(false);
  const [isLoading1, setIsLoading1]= useState(false);

  var [bodzce, setBodzce ] = useState(["?"])

 

  const location = useLocation();
  const path = location.pathname.split("/")[2];
const buttonRef = createRef()




 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newPost = {
 
      desc: UczucieKoniec,
      
    };

    try {
      const res = await axios.put("/posts/update/"+path, newPost)
      .then(() => { 
   
    })
      .then(() => {
        history.push("/DodajRozgniewanyStan/"+path)
       
    })
    } catch (err) {console.log(err)}
  };




const handleClick = () => {
 setIsLoading(true)
}
  return (
   <Grid >
   
     <form className="writeForm" onSubmit={handleSubmit}>
  <Qn1>Nazwa twojego uczucia to:</Qn1>
    <Grid.Row stretched>
      <Grid.Column>
          <Segment  color='yellow'  size='mini'>
           <input
            type="text"
            className="writeInput2"
            value= {title}
           />
           </Segment >
           <Segment   color='orange'size='tiny'>
            <input
            type="text"
            value={Posredni}
            className="writeInput1"
            />
           </Segment>
       
           <Segment color='red' size='small'>
            <input
            type="text"
            value={desc}
            className="writeInput3"
            />
           </Segment>
       
            <br/>

        

          <Button animated className='button-540' size="large"   color='red'  role="button" loading={isLoading} disabled={isLoading1}  onClick={handleClick}>
           {isLoading ? "" : "" }
           <Button.Content visible>Dodaj</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle right' />
      </Button.Content>
         </Button>
      </Grid.Column>
    </Grid.Row>
      </form>
 </Grid>         
 )
}









