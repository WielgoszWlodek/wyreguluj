import React , { useContext, useState, useEffect, createRef } from "react";
import "../write.css";
import { useHistory } from 'react-router';
import axios from "axios";
import { Context } from "../../../context/Context";
import { Slider } from "react-semantic-ui-range";
import { Label, Grid, Button, Form, TextArea, Dimmer, Loader, Image, Segment ,Icon } from "semantic-ui-react";
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import Przyczyna from './../przyczyna';
import { useLocation } from "react-router";




export default function LękliwyBezsilny(props) {


  const UczucieKoniec = props.nazwa;
  const Posredni = props.posredni;
  const [title, setTitle] = useState("Lękliwy");
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
        history.push("/DodajLękliwybodziec/"+path)
       
    })
    } catch (err) {console.log(err)}
  };




const handleClick = () => {
 setIsLoading(true)
}
  return (
   <Grid >
   
     <form className="writeForm" onSubmit={handleSubmit}>
    <Grid.Row stretched>
      <Grid.Column>
          <Segment  color='yellow'  size='mini'>
           <input
            type="text"
            className="writeInput2"
            value= {title}
           />
           </Segment >
           <Segment   color='olive'size='tiny'>
            <input
            type="text"
            value={Posredni}
            className="writeInput1"
            />
           </Segment>
       
           <Segment color='green' size='small'>
            <input
            type="text"
            value={desc}
            className="writeInput"
            />
           </Segment>
       
            <br/>
          <Button animated className='button-560' size="large"   color='green'  role="button" loading={isLoading} disabled={isLoading1}  onClick={handleClick}>
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









