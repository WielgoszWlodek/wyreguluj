import React , { useContext, useState, useEffect, createRef } from "react";
import "./write.css";
import { useHistory } from 'react-router';
import axios from "axios";
import { Context } from "../../context/Context";
import { Slider } from "react-semantic-ui-range";
import { Label, Grid, Button, Form, TextArea, Dimmer, Loader, Image, Segment ,Icon } from "semantic-ui-react";
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import Przyczyna from './przyczyna';
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


const McqContainer = styled.div`
  flex-direction: row;
  margin: 5%;
  text-align: center;
  @media (max-width: 768px) {
   
  }
`;

const Qn = styled.legend`

color: #2c2d2f;
font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
font-size: 1.20rem;
font-weight: 250;
justify-content: center;
line-height: 0.75rem;
padding: .75rem 1.65rem;



`;

const Qn1 = styled.legend`

color: #2c2d2f;
font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
font-size: 1.75rem;
font-weight: 500;
justify-content: center;
line-height: 0.75rem;
padding: .75rem 1.65rem;
margin-bottom: 10px;


`;
const Qn2 = styled.legend`

color: #2c2d2f;
font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
font-size: 1.35rem;
font-weight: 500;
justify-content: center;
line-height: 0.4rem;
padding: .25rem 1.05rem;
text-align: center;
margin-bottom:50px;
margin-top:0px;
margin-left:80px;


`;


const FormBtn = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  background-color: rgb(153, 156, 161);
  border: none;
  margin-top: 25px;
  margin-right:auto;
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


export default function SłabyNiewiem() {
  const [title, setTitle] = useState("Słaby");
  
  const [opis, setOpis] = useState("");
  const { user } = useContext(Context);
  let history = useHistory();
 
  const [ratingSlaby1, setRatingSlaby1] = useState(2);
  const [value, setValue] = useState(5);
  const [isLoading, setIsLoading]= useState(false);
  const [isLoading1, setIsLoading1]= useState(false);
  const location = useLocation();

  var [bodzce, setBodzce ] = useState(["?"])
const buttonRef = createRef()


  const settings = {
    start: 2,
    min: 1,
    max: 8,
    step: 1,
    onChange: ratingSlaby1 => {
      setRatingSlaby1(ratingSlaby1);
    }
  };

 {/*}
  const newPost = {
    username: user._id,
    desc: "jakotako"
  };

  try {
    const res = await axios.put("/posts/"+'640c9607996fd5253a6bb8a8', newPost)
    .then(() => { 
    setIsLoading(true)
  })
    .then(() => {
   
      history.push("/")
  })
  } catch (err) {console.log(err)}

*/}


const path = location.pathname.split("/")[2];

   console.log(path);



const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading1(true)  
    const newPost = {
    
      ratingSlaby1,
    };

    try {
      const res = await axios.put("/posts/update/"+path, newPost)
      .then(() => { 
      setIsLoading(true)
    })
      .then(() => {
     
        history.push("/")
    })
    } catch (err) {console.log(err)}
  };









const loadOptions = (searchValue, callBack)=>{

setTimeout(() => {
  const filteredOptions = Przyczyna.filter(option=>option.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  callBack(filteredOptions)
}, );
}
console.log(loadOptions);

const handleChange = (selectedOptions)=>{
setBodzce(Array.isArray(selectedOptions)?selectedOptions.map(x=>x.label):[])
}


const handleClick = () => {
setIsLoading(true)
}
return (
 <Grid >
 
  <form className="writeForm" onSubmit={handleSubmit}>
  <Grid.Row stretched>
  <Qn2>Natężenie uczucia po regulacji</Qn2>
    <Grid.Column>
        <Segment textAlign='center'>
         <input
          type="text"
          className="writeInput"
          value= {title}
         />
         </Segment>
         
         <Segment   >
         <span className="etykieta">Podaj natężenie</span>
         <Label color='red' floating>
          {ratingSlaby1} 
         </Label>
         <br/>
         <Slider value={ratingSlaby1} color="red" settings={settings} /> 
         </Segment>
      

         
    
      
     
       
       
        <br/>
        <Button className='button-532' size="large"   color='teal'  role="button" loading={isLoading} disabled={isLoading1}  onClick={handleClick}>
           {isLoading ? "Loading..." : "Dodaj" }
          </Button>
        
      
    </Grid.Column>
  </Grid.Row>
    </form>
</Grid>         
)
}









