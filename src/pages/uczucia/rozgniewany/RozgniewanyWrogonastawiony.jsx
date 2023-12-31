import React , { useContext, useState, useEffect } from "react";
import "../write.css";
import { useHistory } from 'react-router';
import axios from "axios";
import { Context } from "../../../context/Context";
import { Slider } from "react-semantic-ui-range";
import { Label, Grid, Button, Form, TextArea, Dimmer, Loader, Image, Segment} from "semantic-ui-react";
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import Przyczyna from './../przyczyna'



export default function RozgniewanyWrogonastawiony() {
  const [title, setTitle] = useState("Rozgniewany");
  const [desc, setDesc] = useState("Agresywny/Wrogo nastawiony");
  const [opis, setOpis] = useState("");
  const { user } = useContext(Context);
  let history = useHistory();
 
  const [ratingRozgniewany, setRatingRozgniewany] = useState(2);
  const [value, setValue] = useState(5);
  const [isLoading, setIsLoading]= useState(false);
  const [isLoading1, setIsLoading1]= useState(false);
  var [bodzce, setBodzce ] = useState(["?"])



  const settings = {
    start: 2,
    min: 1,
    max: 8,
    step: 1,
    onChange: ratingRozgniewany => {
      setRatingRozgniewany(ratingRozgniewany);
    }
  };

 

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading1(true)
    const newPost = {
      username: user._id,
      title,
      desc,
      opis,
      bodzce, 
      ratingRozgniewany,
      ratingSmutny : 0,
      ratingSlaby : 0,
      ratingSzczesliwy: 0,
      ratingZaskoczony : 0,
      ratingZniesmaczony : 0,
      ratingLekliwy : 0,
      ratingRozgniewany1: 0,
      ratingSmutny1 : 0,
      ratingSlaby1 : 0,
      ratingSzczesliwy1: 0,
      ratingZaskoczony1 : 0,
      ratingZniesmaczony1 : 0,
      ratingLekliwy1 : 0,
    };

    try {
      const res = await axios.post("/posts", newPost)
      .then(() => {
        setIsLoading(true)})
      .then(() => {
     
        history.push("/")
    })
    } catch (err) {console.log(err)}
  };


  const[cats, setCats]= useState([]);

  useEffect(()=>{
   const getCats = async ()=>{
     const res = await axios.get("/categories")
     setCats(res.data)
   }
   getCats()
  },[]);

  console.log(cats);

  const klucz=  Object.keys(cats);


  console.log(klucz)

  var newData = cats.map((item)=>{
    return {
      value: 1,
      label: item.name[0],
      };

  });
  const result1 = Object.keys(newData).map((key) => newData[key]);

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
      <Grid.Column>
          <Segment textAlign='center'>
           <input
            type="text"
            className="writeInput"
            value= {title}
           />
           </Segment>
           <Segment >
            <input
            type="text"
            value={desc}
            className="writeInput writeText"
            />
           </Segment>
           <Segment   >
           <span className="etykieta">Natężenie uczucia</span>
           <Label color='red' floating>
            {ratingRozgniewany} 
           </Label>
           <br/>
           <Slider value={ratingRozgniewany} color="red" settings={settings} /> 
           </Segment>
        

           
           <AsyncCreatableSelect loadOptions={loadOptions} placeholder="Przyczyna uczucia. Wybierz bądź dodaj" 
            noOptionsMessage={() => "Wybierz lub dodaj"}
           onChange={handleChange} defaultOptions isMulti className="nizej"/>
        
       
                  <Form>
           <TextArea
           placeholder='Notatki' 
           className="notatki"
           value={opis}
           onChange={e => {
           setOpis(e.target.value);
           }}
           />
        
           </Form>
         
          <br/>
          <Button className='button-54' size="large"   color='red'  role="button" loading={isLoading} disabled={isLoading1}  onClick={handleClick}>
           {isLoading ? "Loading..." : "Dodaj" }
          </Button>
        
      </Grid.Column>
    </Grid.Row>
      </form>
 </Grid>         
 )
}





