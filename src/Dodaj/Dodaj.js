
import {useParams} from 'react-router-dom'
import {  Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useFetch1 } from '../useFetch1'
import './write.css'
import { useLocation } from "react-router";
import axios from "axios";
import  {MdCode , MdLens, MdMood} from 'react-icons/md';
import { Grid,Segment, Image,  Form , TextArea, Header,Table, Icon, Button } from 'semantic-ui-react';


import { Controls, Step, Wizard } from "react-decision-tree-flow";
import { useNavigate } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { Context } from '../context/Context'

import LękliwyNiewiem from "../pages/uczucia1/LękliwyNiewiem";

import SmutnyNiewiem from "../pages/uczucia1/SmutnyNiewiem";
import ZniesmaczonyNiewiem from "../pages/uczucia1/ZniesmaczonyNiewiem";
import SłabyNiewiem from "../pages/uczucia1/SłabyNiewiem";
import SzczęśliwyNiewiem from "../pages/uczucia1/SzczęśliwyNiewiem";
import ZaskoczonyNiewiem from '../pages/uczucia1/ZaskoczonyNiewiem';
import RozgniewanyNiewiem from "../pages/uczucia1/RozgniewanyNiewiem";

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
  margin-top: -20px;
 
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
const Links = styled.legend`


color:white;
margin-left:30px;


`;
const Qn1 = styled.legend`

color: #2c2d2f;
font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
font-size: 1.35rem;
font-weight: 500;
margin-left:150px;
justify-content: center;
 align-items: center;
line-height: 0.75rem;
padding: .75rem 1.65rem;
margin-top:15px;
margin-bottom: 25px;
text-align: left;
`;
const Qn2 = styled.legend`

color: #2c2d2f;
font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
font-size: 1.35rem;
font-weight: 500;
text-align: center;

padding: .25rem 10.25rem;
justify-content: center;
margin-bottom:50px;


`;

const Qn11 = styled.legend`

color: #2c2d2f;
font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
font-size: 1.55rem;
font-weight: 600;
margin-left:220px;
margin-top:20px;
justify-content: center;
 align-items: center;
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

const FormBtn1 = styled.button`
  width: 100px;
  margin-left:-470px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  background-color: rgb(153, 156, 161);
  border: none;
  margin-top: 20px;

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

const Dodaj = () => {
    const {data1} = useFetch1()
    const {id} = useParams();
    const [pokaz, setPokaz] = useState(id);
    const location = useLocation();

    const [post1, setPost1] = useState([]);
    const [title, setTitle] = useState({});
    const [opis, setOpis] = useState({});
    const [desc, setDesc] = useState({});
    const [bodzce, setBodzce] = useState([]);
    const [ratingSlaby, setRatingSlaby] = useState([]);
    const [ratingSzczesliwy, setRatingSzczesliwy] = useState([]);
    const [ratingRozgniewany, setRatingRozgniewany] = useState([]);
    const [ratingSmutny, setRatingSmutny] = useState([]);
    const [ratingLekliwy, setRatingLekliwy] = useState([]);
    const [ratingLekliwy1, setRatingLekliwy1] = useState([]);
    const [ratingZniesmaczony, setRatingZniesmaczony] = useState([]);
    const [ratingZaskoczony, setRatingZaskoczony] = useState([]);
    const [isLoading, setIsLoading]= useState(false);
    

    




    const path = location.pathname.split("/")[2];

   console.log(path);

   const onClickWysli = async (e) => {
  const newPost = {
   ratingLekliwy1: "5"
  };

  try {
    const res = await axios.put("/posts/update/"+path, newPost)
    .then(() => { 
  
  })
    .then(() => {
   
    
  })
  } catch (err) {console.log(err)}
}



 useEffect(() => {
  const getPost1 = async () => {
    const res = await axios.get("/posts/");
    setPost1(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc); 
    setOpis(res.data.opis); 
    setBodzce(res.data.bodzce); 
    setRatingSlaby(res.data.ratingSlaby);  
    setRatingSzczesliwy(res.data.ratingSzczesliwy); 
    setRatingRozgniewany(res.data.ratingRozgniewany); 
    setRatingSmutny(res.data.ratingSmutny);  
    setRatingLekliwy(res.data.ratingLekliwy); 
    setRatingZniesmaczony(res.data.ratingZniesmaczony); 
    setRatingZaskoczony(res.data.ratingZaskoczony);  
  };
  getPost1();
}, [path]);




const tree = {
  step1: ["step2", "step3", "step22", "step33", "step222", "step333", "step2222", "step3333",
   "step22222", "step33333","step222222", "step333333","step2222222", "step3333333"],
  step2: ["step4"],
  step3: ["step4"],
  step4: ["step5"], 
  step5: ["step6"],
  step6: ["step7"],
  step7: ["step8"],
  step22: ["step4"],
  step33: ["step4"],
  step222: ["step4"],
  step333: ["step4"],
  step2222: ["step4"],
  step3333: ["step4"],
  step22222: ["step4"],
  step33333: ["step4"],
  step222222: ["step4"],
  step333333: ["step4"],
  step2222222: ["step4"],
  step3333333: ["step4"],
  step: []

};



 return (
    
  <div  className="write">
 
<Container> 
     
      <McqContainer>
      <Wizard tree={tree} first="step1">
      <Step name="step1">
        <div>
        <div>
        <Grid>
        <Grid.Column width={12} >
           { post1.filter(osoba => osoba._id === path).map(filteredPerson => (
            <article key={filteredPerson._id} className="dodaj">
                <div >

 <Header style={{ marginTop:-30, marginBottom:-30, textFont:15, marginLeft:40}}>
                 
 <Qn11>{ filteredPerson.title}</Qn11> 
                 
                  </Header>
                <Table definition style={{ marginTop:40, marginLeft:30, width:450}}  basic='very' celled collapsing>
      


    <Table.Body  >
      <Table.Row>
        <Table.Cell style={{width:100}}>Uczucie szczegółówo:</Table.Cell>
        <Table.Cell>{filteredPerson.desc}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bodziec:</Table.Cell>
        <Table.Cell>{filteredPerson.bodzce}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Stan:</Table.Cell>
        <Table.Cell>{filteredPerson.stan}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Intensywność:</Table.Cell>
        <Table.Cell> {filteredPerson.title === "Rozgniewany"  && <> {filteredPerson.ratingRozgniewany} </>}
       {filteredPerson.title === "Szczęśliwy"  && <>{filteredPerson.ratingSzczesliwy} </> }
    {filteredPerson.title === "Słaby"  && <>{filteredPerson.ratingSlaby} </>  }
    {filteredPerson.title === "Smutny"  && <> {filteredPerson.ratingSmutny} </>}
       {filteredPerson.title === "Lękliwy"  && <>{filteredPerson.ratingLekliwy} </> }
    {filteredPerson.title === "Zniesmaczony"  && <>{filteredPerson.ratingZniesmaczony} </>  }
    {filteredPerson.title === "Zaskoczony"  && <>{filteredPerson.ratingZaskoczony} </>  }</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Data:</Table.Cell>
        <Table.Cell>{new Date(filteredPerson.createdAt).toLocaleDateString()}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Notatki:</Table.Cell>
        <Table.Cell>
           <Form>
   <TextArea placeholder= {filteredPerson.opis}/>
  </Form>  
          </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>



                 

                

               
    
       
    
     
                         
      
                </div>
              
              </article>
              
          ))}
       
        </Grid.Column>
        <Grid.Column width={1} floated="right" style={{marginRight:50, marginTop:-50}}>
        {post1.filter(osoba => osoba._id === path).map(filteredPerson => (
            <article key={filteredPerson._id} className="dodaj">
                <div className='cocktail-footer'>


                {(filteredPerson.ratingLekliwy >= 1 && filteredPerson.ratingLekliwy < 2) && <> 
    
                  <section>
                  
                     <div className="pulse71">
                  
                  <MdLens className="circle7"/>
                    <span className="a71"></span>
                    <span className="b71" ></span>
                    <span  className="c71"></span>
                    <span className="d71" ></span>
                    <span  className="e71"></span>
                  </div> 
                  
                  </section>
                </>}
                
                {(filteredPerson.ratingLekliwy >= 2 && filteredPerson.ratingLekliwy < 3) && <> 
    
                  <section>
                  
                     <div className="pulse72">
                  
                  <MdLens className="circle7"/>
                    <span className="a72"></span>
                    <span className="b72" ></span>
                    <span  className="c72"></span>
                    <span className="d72" ></span>
                    <span  className="e72"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingLekliwy >= 3 && filteredPerson.ratingLekliwy < 4) && <> 
    
                  <section>
                  
                     <div className="pulse73">
                  
                  <MdLens className="circle7"/>
                    <span className="a73"></span>
                    <span className="b73" ></span>
                    <span  className="c73"></span>
                    <span className="d73" ></span>
                    <span  className="e73"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingLekliwy >= 4 && filteredPerson.ratingLekliwy < 5) && <> 
    
                  <section>
                  
                     <div className="pulse74">
                  
                  <MdLens className="circle7"/>
                    <span className="a74"></span>
                    <span className="b74" ></span>
                    <span  className="c74"></span>
                    <span className="d74" ></span>
                    <span  className="e74"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingLekliwy >= 5 && filteredPerson.ratingLekliwy < 6) && <> 
    
                  <section>
                  
                     <div className="pulse75">
                  
                  <MdLens className="circle7"/>
                    <span className="a75"></span>
                    <span className="b75" ></span>
                    <span  className="c75"></span>
                    <span className="d75" ></span>
                    <span  className="e75"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingLekliwy >= 6 && filteredPerson.ratingLekliwy < 7) && <> 
    
                  <section>
                  
                     <div className="pulse76">
                  
                  <MdLens className="circle7"/>
                    <span className="a76"></span>
                    <span className="b76" ></span>
                    <span  className="c76"></span>
                    <span className="d76"></span>
                    <span  className="e76"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingLekliwy >= 7 && filteredPerson.ratingLekliwy < 8) && <> 
    
                  <section>
                  
                     <div className="pulse77">
                  
                  <MdLens className="circle7"/>
                    <span className="a77"></span>
                    <span className="b77" ></span>
                    <span  className="c77"></span>
                    <span className="d77" ></span>
                    <span  className="e77"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingLekliwy >= 8 && filteredPerson.ratingLekliwy < 9) && <> 
    
                  <section>
                  
                     <div className="pulse78">
                  
                  <MdLens className="circle7"/>
                    <span className="a78"></span>
                    <span className="b78" ></span>
                    <span  className="c78"></span>
                    <span className="d78" ></span>
                    <span  className="e78"></span>
                  </div> 
                  
                  </section>
                </>}
              
                {(filteredPerson.ratingZniesmaczony >= 1 && filteredPerson.ratingZniesmaczony < 2) && <> 
    
                  <section>
                  
                     <div className="pulse61">
                  
                  <MdLens className="circle6"/>
                    <span className="a61"></span>
                    <span className="b61" ></span>
                    <span  className="c61"></span>
                    <span className="d61" ></span>
                    <span  className="e61"></span>
                  </div> 
                  
                  </section>
                </>}

                {(filteredPerson.ratingZniesmaczony >= 2 && filteredPerson.ratingZniesmaczony < 3) && <> 
    
                  <section>
                  
                     <div className="pulse62">
                  
                  <MdLens className="circle6"/>
                    <span className="a62"></span>
                    <span className="b62" ></span>
                    <span  className="c62"></span>
                    <span className="d62" ></span>
                    <span  className="e62"></span>
                  </div> 
                  
                  </section>
                </>}
                {(filteredPerson.ratingZniesmaczony >= 3 && filteredPerson.ratingZniesmaczony < 4) && <> 
    
                  <section>
                  
                     <div className="pulse63">
                  
                  <MdLens className="circle6"/>
                    <span className="a63"></span>
                    <span className="b63" ></span>
                    <span  className="c63"></span>
                    <span className="d63" ></span>
                    <span  className="e63"></span>
                  </div> 
                  
                  </section>
                </>}
                {(filteredPerson.ratingZniesmaczony >= 4 && filteredPerson.ratingZniesmaczony < 5) && <> 
    
                  <section>
                  
                     <div className="pulse64">
                  
                  <MdLens className="circle6"/>
                    <span className="a64"></span>
                    <span className="b64" ></span>
                    <span  className="c64"></span>
                    <span className="d64" ></span>
                    <span  className="e64"></span>
                  </div> 
                  
                  </section>
                </>}
                {(filteredPerson.ratingZniesmaczony >= 5 && filteredPerson.ratingZniesmaczony < 6) && <> 
    
                  <section>
                  
                     <div className="pulse65">
                  
                  <MdLens className="circle6"/>
                    <span className="a65"></span>
                    <span className="b65" ></span>
                    <span  className="c65"></span>
                    <span className="d65" ></span>
                    <span  className="e65"></span>
                  </div> 
                  
                  </section>
                </>}
                {(filteredPerson.ratingZniesmaczony >= 6 && filteredPerson.ratingZniesmaczony < 7) && <> 
    
                  <section>
                  
                     <div className="pulse66">
                  
                  <MdLens className="circle6"/>
                    <span className="a66"></span>
                    <span className="b66" ></span>
                    <span  className="c66"></span>
                    <span className="d66" ></span>
                    <span  className="e66"></span>
                  </div> 
                  
                  </section>
                </>}
                {(filteredPerson.ratingZniesmaczony >= 7 && filteredPerson.ratingZniesmaczony < 8) && <> 
    
                  <section>
                  
                     <div className="pulse67">
                  
                  <MdLens className="circle6"/>
                    <span className="a67"></span>
                    <span className="b67" ></span>
                    <span  className="c67"></span>
                    <span className="d67" ></span>
                    <span  className="e67"></span>
                  </div> 
                  
                  </section>
                </>}
                {(filteredPerson.ratingZniesmaczony >= 8 && filteredPerson.ratingZniesmaczony < 9) && <> 
    
                  <section>
                  
                     <div className="pulse68">
                  
                  <MdLens className="circle6"/>
                    <span className="a68"></span>
                    <span className="b68" ></span>
                    <span  className="c68"></span>
                    <span className="d68" ></span>
                    <span  className="e68"></span>
                  </div> 
                  
                  </section>
                </>}




                {(filteredPerson.ratingZaskoczony >= 1 && filteredPerson.ratingZaskoczony < 2) && <> 
    
                  <section>
                  
                     <div className="pulse51">
                  
                  <MdLens className="circle5"/>
                    <span className="a51"></span>
                    <span className="b51" ></span>
                    <span  className="c51"></span>
                    <span className="d51" ></span>
                    <span  className="e51"></span>
                  </div> 
                  
                  </section>
                </>}


                
                {(filteredPerson.ratingZaskoczony >= 2 && filteredPerson.ratingZaskoczony < 3) && <> 
    
                  <section>
                  
                     <div className="pulse52">
                  
                  <MdLens className="circle5"/>
                    <span className="a52"></span>
                    <span className="b52" ></span>
                    <span  className="c52"></span>
                    <span className="d52" ></span>
                    <span  className="e52"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingZaskoczony >= 3 && filteredPerson.ratingZaskoczony < 4) && <> 
    
                  <section>
                  
                     <div className="pulse53">
                  
                  <MdLens className="circle5"/>
                    <span className="a53"></span>
                    <span className="b53" ></span>
                    <span  className="c53"></span>
                    <span className="d53" ></span>
                    <span  className="e53"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingZaskoczony >= 4 && filteredPerson.ratingZaskoczony < 5) && <> 
    
                  <section>
                  
                     <div className="pulse54">
                  
                  <MdLens className="circle5"/>
                    <span className="a54"></span>
                    <span className="b54" ></span>
                    <span  className="c54"></span>
                    <span className="d54" ></span>
                    <span  className="e54"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingZaskoczony >= 5 && filteredPerson.ratingZaskoczony < 6) && <> 
    
                  <section>
                  
                     <div className="pulse55">
                  
                  <MdLens className="circle5"/>
                    <span className="a55"></span>
                    <span className="b55" ></span>
                    <span  className="c55"></span>
                    <span className="d55" ></span>
                    <span  className="e55"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingZaskoczony >= 6 && filteredPerson.ratingZaskoczony < 7) && <> 
    
                  <section>
                  
                     <div className="pulse56">
                  
                  <MdLens className="circle5"/>
                    <span className="a56"></span>
                    <span className="b56" ></span>
                    <span  className="c56"></span>
                    <span className="d56" ></span>
                    <span  className="e56"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingZaskoczony >= 7 && filteredPerson.ratingZaskoczony < 8) && <> 
    
                  <section>
                  
                     <div className="pulse57">
                  
                  <MdLens className="circle5"/>
                    <span className="a57"></span>
                    <span className="b57" ></span>
                    <span  className="c57"></span>
                    <span className="d57" ></span>
                    <span  className="e57"></span>
                  </div> 
                  
                  </section>
                </>}

                
                {(filteredPerson.ratingZaskoczony >= 8 && filteredPerson.ratingZaskoczony < 9) && <> 
    
                  <section>
                  
                     <div className="pulse58">
                  
                  <MdLens className="circle5"/>
                    <span className="a58"></span>
                    <span className="b58" ></span>
                    <span  className="c58"></span>
                    <span className="d58" ></span>
                    <span  className="e58"></span>
                  </div> 
                  
                  </section>
                </>}


                {(filteredPerson.ratingSlaby >= 1 && filteredPerson.ratingSlaby < 2) && <> 
    
                  <section>
                  
                     <div className="pulse41">
                  
                  <MdLens className="circle4"/>
                    <span className="a41"></span>
                    <span className="b41" ></span>
                    <span  className="c41"></span>
                    <span className="d41" ></span>
                    <span  className="e41"></span>
                  </div> 
                  
                  </section>
                  </>}

                   {(filteredPerson.ratingSlaby >= 2 && filteredPerson.ratingSlaby < 3) && <> 
    
                    <section>
                    
                       <div className="pulse42">
                    
                    <MdLens className="circle4"/>
                      <span className="a42"></span>
                      <span className="b42" ></span>
                      <span  className="c42"></span>
                      <span className="d42" ></span>
                      <span  className="e42"></span>
                    </div> 
                    
                    </section>
                    
                    
                     </>}
                     {(filteredPerson.ratingSlaby >= 3 && filteredPerson.ratingSlaby < 4) && <> 
    
                      <section>
                      
                         <div className="pulse43">
                      
                      <MdLens className="circle4"/>
                        <span className="a43"></span>
                        <span className="b43" ></span>
                        <span  className="c43"></span>
                        <span className="d43" ></span>
                        <span  className="e43"></span>
                      </div> 
                      
                      </section>
                      
                      
                       </>}
                       {(filteredPerson.ratingSlaby >= 4 && filteredPerson.ratingSlaby < 5) && <> 
    
                        <section>
                        
                           <div className="pulse44">
                        
                        <MdLens className="circle4"/>
                          <span className="a44"></span>
                          <span className="b44" ></span>
                          <span  className="c44"></span>
                          <span className="d44" ></span>
                          <span  className="e44"></span>
                        </div> 
                        
                        </section>
                        
                        
                         </>}
                         {(filteredPerson.ratingSlaby >= 5 && filteredPerson.ratingSlaby < 6) && <> 
    
                          <section>
                          
                             <div className="pulse45">
                          
                          <MdLens className="circle4"/>
                            <span className="a45"></span>
                            <span className="b45" ></span>
                            <span  className="c45"></span>
                            <span className="d45" ></span>
                            <span  className="e45"></span>
                          </div> 
                          
                          </section>
                          
                          
                           </>}
                           {(filteredPerson.ratingSlaby >= 6 && filteredPerson.ratingSlaby < 7) && <> 
    
                            <section>
                            
                               <div className="pulse46">
                            
                            <MdLens className="circle4"/>
                              <span className="a46"></span>
                              <span className="b46" ></span>
                              <span  className="c46"></span>
                              <span className="d46" ></span>
                              <span  className="e46"></span>
                            </div> 
                            
                            </section>
                            
                            
                             </>}
                             {(filteredPerson.ratingSlaby >= 7 && filteredPerson.ratingSlaby < 8) && <> 
    
                              <section>
                              
                                 <div className="pulse47">
                              
                              <MdLens className="circle4"/>
                                <span className="a47"></span>
                                <span className="b47" ></span>
                                <span  className="c47"></span>
                                <span className="d47" ></span>
                                <span  className="e47"></span>
                              </div> 
                              
                              </section>
                              
                              
                               </>}
                               {(filteredPerson.ratingSlaby >= 8 && filteredPerson.ratingSlaby < 9) && <> 
    
                                <section>
                                
                                   <div className="pulse48">
                                
                                <MdLens className="circle4"/>
                                  <span className="a48"></span>
                                  <span className="b48" ></span>
                                  <span  className="c48"></span>
                                  <span className="d48" ></span>
                                  <span  className="e48"></span>
                                </div> 
                                
                                </section>
                                
                                
                                 </>}
                                                                               
  
                {(filteredPerson.ratingRozgniewany >= 1 && filteredPerson.ratingRozgniewany < 2) && <> 
    
                  <section>
                  
                     <div className="pulse31">
                  
                  <MdLens className="circle3"/>
                    <span className="a31"></span>
                    <span className="b31" ></span>
                    <span  className="c31"></span>
                    <span className="d31" ></span>
                    <span  className="e31"></span>
                  </div> 
                  
                  </section>
                  
                  
                   </>}

                   {(filteredPerson.ratingRozgniewany >= 2 && filteredPerson.ratingRozgniewany < 3) && <> 
    
                    <section>
                    
                       <div className="pulse32">
                    
                    <MdLens className="circle3"/>
                      <span className="a32"></span>
                      <span className="b32" ></span>
                      <span  className="c32"></span>
                      <span className="d32" ></span>
                      <span  className="e32"></span>
                    </div> 
                    
                    </section>
                    
                    
                     </>}
                     {(filteredPerson.ratingRozgniewany >= 3 && filteredPerson.ratingRozgniewany < 4) && <> 
    
                      <section>
                      
                         <div className="pulse33">
                      
                      <MdLens className="circle3"/>
                        <span className="a33"></span>
                        <span className="b33" ></span>
                        <span  className="c33"></span>
                        <span className="d33" ></span>
                        <span  className="e33"></span>
                      </div> 
                      
                      </section>
                      
                      
                       </>}
                       {(filteredPerson.ratingRozgniewany >= 4 && filteredPerson.ratingRozgniewany < 5) && <> 
    
                        <section>
                        
                           <div className="pulse34">
                        
                        <MdLens className="circle3"/>
                          <span className="a34"></span>
                          <span className="b34" ></span>
                          <span  className="c34"></span>
                          <span className="d34" ></span>
                          <span  className="e34"></span>
                        </div> 
                        
                        </section>
                        
                        
                         </>}
                         {(filteredPerson.ratingRozgniewany >= 5 && filteredPerson.ratingRozgniewany < 6) && <> 
    
                          <section>
                          
                             <div className="pulse35">
                          
                          <MdLens className="circle3"/>
                            <span className="a35"></span>
                            <span className="b35" ></span>
                            <span  className="c35"></span>
                            <span className="d35" ></span>
                            <span  className="e35"></span>
                          </div> 
                          
                          </section>
                          
                          
                           </>}
                           {(filteredPerson.ratingRozgniewany >= 6 && filteredPerson.ratingRozgniewany < 7) && <> 
    
                            <section>
                            
                               <div className="pulse36">
                            
                            <MdLens className="circle3"/>
                              <span className="a36"></span>
                              <span className="b36" ></span>
                              <span  className="c36"></span>
                              <span className="d36" ></span>
                              <span  className="e36"></span>
                            </div> 
                            
                            </section>
                            
                            
                             </>}
                             {(filteredPerson.ratingRozgniewany >= 7 && filteredPerson.ratingRozgniewany < 8) && <> 
    
                              <section>
                              
                                 <div className="pulse37">
                              
                              <MdLens className="circle3"/>
                                <span className="a37"></span>
                                <span className="b37" ></span>
                                <span  className="c37"></span>
                                <span className="d37" ></span>
                                <span  className="e37"></span>
                              </div> 
                              
                              </section>
                              
                              
                               </>}
                               {(filteredPerson.ratingRozgniewany >= 8 && filteredPerson.ratingRozgniewany < 9) && <> 
    
                                <section>
                                
                                   <div className="pulse38">
                                
                                <MdLens className="circle3"/>
                                  <span className="a38"></span>
                                  <span className="b38" ></span>
                                  <span  className="c38"></span>
                                  <span className="d38" ></span>
                                  <span  className="e38"></span>
                                </div> 
                                
                                </section>
                                
                                
                                 </>}


             
             
                {(filteredPerson.ratingSzczesliwy >= 1 && filteredPerson.ratingSzczesliwy < 2) && <> 
    
    <section>
    
       <div className="pulse21">
    
    <MdLens className="circle2"/>
      <span className="a21"></span>
      <span className="b21" ></span>
      <span  className="c21"></span>
      <span className="d21" ></span>
      <span  className="e21"></span>
    </div> 
    
    </section>
    
    
     </>}

     {(filteredPerson.ratingSzczesliwy >= 2 && filteredPerson.ratingSzczesliwy < 3) && <> 
    
      <section>
      
         <div className="pulse22">
      
      <MdLens className="circle2"/>
        <span className="a22"></span>
        <span className="b22" ></span>
        <span  className="c22"></span>
        <span className="d22" ></span>
        <span  className="e22"></span>
      </div> 
      
      </section>
      
      
       </>}
       {(filteredPerson.ratingSzczesliwy >= 3 && filteredPerson.ratingSzczesliwy < 4) && <> 
    
        <section>
        
           <div className="pulse23">
        
        <MdLens className="circle2"/>
          <span className="a23"></span>
          <span className="b23" ></span>
          <span  className="c23"></span>
          <span className="d23" ></span>
          <span  className="e23"></span>
        </div> 
        
        </section>
        
        
         </>}
         {(filteredPerson.ratingSzczesliwy >= 4 && filteredPerson.ratingSzczesliwy < 5) && <> 
    
          <section>
          
             <div className="pulse24">
          
          <MdLens className="circle2"/>
            <span className="a24"></span>
            <span className="b24" ></span>
            <span  className="c24"></span>
            <span className="d24" ></span>
            <span  className="e24"></span>
          </div> 
          
          </section>
          
          
           </>}
           {(filteredPerson.ratingSzczesliwy >= 5 && filteredPerson.ratingSzczesliwy < 6) && <> 
    
            <section>
            
               <div className="pulse25">
            
            <MdLens className="circle2"/>
              <span className="a25"></span>
              <span className="b25" ></span>
              <span  className="c25"></span>
              <span className="d25" ></span>
              <span  className="e25"></span>
            </div> 
            
            </section>
            
            
             </>}
             {(filteredPerson.ratingSzczesliwy >= 6 && filteredPerson.ratingSzczesliwy < 7) && <> 
    
              <section>
              
                 <div className="pulse26">
              
              <MdLens className="circle2"/>
                <span className="a26"></span>
                <span className="b26" ></span>
                <span  className="c26"></span>
                <span className="d26" ></span>
                <span  className="e26"></span>
              </div> 
              
              </section>
              
              
               </>}
               {(filteredPerson.ratingSzczesliwy >= 7 && filteredPerson.ratingSzczesliwy < 8) && <> 
    
                <section>
                
                   <div className="pulse27">
                
                <MdLens className="circle2"/>
                  <span className="a27"></span>
                  <span className="b27" ></span>
                  <span  className="c27"></span>
                  <span className="d27" ></span>
                  <span  className="e27"></span>
                </div> 
                
                </section>
                
                
                 </>}
                 {(filteredPerson.ratingSzczesliwy >= 8 && filteredPerson.ratingSzczesliwy < 9) && <> 
    
                  <section>
                  
                     <div className="pulse28">
                  
                  <MdLens className="circle2"/>
                    <span className="a28"></span>
                    <span className="b28" ></span>
                    <span  className="c28"></span>
                    <span className="d28" ></span>
                    <span  className="e28"></span>
                  </div> 
                  
                  </section>
                  
                  
                   </>}
  
  
    {(filteredPerson.ratingSmutny >= 1 && filteredPerson.ratingSmutny < 2) && <> 
    
    <section>
    
       <div className="pulse81">
    
    <MdLens className="circle8"/>
      <span className="a81"></span>
      <span className="b81" ></span>
      <span  className="c81"></span>
      <span className="d81" ></span>
      <span  className="e81"></span>
    </div> 
    
    </section>
    
    
     </>}
     {(filteredPerson.ratingSmutny >= 2 && filteredPerson.ratingSmutny < 3) && <> 
    
    <section>
    
       <div className="pulse82">
    
    <MdLens className="circle8"/>
      <span className="a82"></span>
      <span className="b82" ></span>
      <span  className="c82"></span>
      <span className="d82" ></span>
      <span  className="e82"></span>
    </div> 
    
    </section>
    
    
     </>}
     {(filteredPerson.ratingSmutny >= 3 && filteredPerson.ratingSmutny < 4) && <> 
    
    <section>
    
       <div className="pulse83">
    
    <MdLens className="circle8"/>
      <span className="a83"></span>
      <span className="b83" ></span>
      <span  className="c83"></span>
      <span className="d83" ></span>
      <span  className="e83"></span>
    </div> 
    
    </section>
    
    
     </>}
     {(filteredPerson.ratingSmutny >= 4 && filteredPerson.ratingSmutny < 5) && <> 
    
    <section>
    
       <div className="pulse84">
    
    <MdLens className="circle8"/>
      <span className="a84"></span>
      <span className="b84" ></span>
      <span  className="c84"></span>
      <span className="d84" ></span>
      <span  className="e84"></span>
    </div> 
    
    </section>
    
    
     </>}
     
          
    {(filteredPerson.ratingSmutny >= 5 && filteredPerson.ratingSmutny < 6) && <> 
    
    <section>
    
       <div className="pulse85">
    
    <MdLens className="circle8"/>
      <span className="a85"></span>
      <span className="b85" ></span>
      <span  className="c85"></span>
      <span className="d85" ></span>
      <span  className="e85"></span>
    </div> 
    
    </section>
    
    
     </>}  
     {(filteredPerson.ratingSmutny >= 6 && filteredPerson.ratingSmutny < 7) && <> 
    
    <section>
    
       <div className="pulse86">
    
    <MdLens className="circle8"/>
      <span className="a86"></span>
      <span className="b86" ></span>
      <span  className="c86"></span>
      <span className="d86" ></span>
      <span  className="e86"></span>
    </div> 
    
    </section>
    
    
     </>}
     {(filteredPerson.ratingSmutny >= 7 && filteredPerson.ratingSmutny < 8) && <> 
    
    <section>
    
       <div className="pulse87">
    
    <MdLens className="circle8"/>
      <span className="a87"></span>
      <span className="b87" ></span>
      <span  className="c87"></span>
      <span className="d87" ></span>
      <span  className="e87"></span>
    </div> 
    
    </section>
    
    
     </>}
     {(filteredPerson.ratingSmutny >= 8 && filteredPerson.ratingSmutny < 9) && <> 
    
    <section>
    
       <div className="pulse88">
    
    <MdLens className="circle8"/>
      <span className="a88"></span>
      <span className="b88" ></span>
      <span  className="c88"></span>
      <span className="d88" ></span>
      <span  className="e88"></span>
    </div> 
    
    </section>
    
    
     </>}      
  </div>
 </article>
              
          ))}
        </Grid.Column>
      </Grid>
         </div>     
              <Controls>
                {({ back, destinations: { step2, step3, step22, step33, step222, step333,
                 step2222, step3333 , step22222, step33333, step222222, step333333, step2222222, step3333333} }) => (
                  <>



 
{ post1.filter(osoba => osoba._id === path).map(filteredPerson => (
            <article key={filteredPerson._id} className="dodaj1" >

            <Qn1>Co chcesz zrobić z uczuciem?</Qn1> 
            
            {filteredPerson.title === "Szczęśliwy"  && <> 
               
         <div className='butony'>
        <Button animated style={{width:"250px"}}  size="large"   onClick={step2222}  color='yellow'  role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible>Wzmocnić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle up' /> 
      </Button.Content>
         </Button>

         <Button animated style={{width:"250px"}} size="large"   onClick={step3333}  color='yellow'  role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible>Osłabić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle down' />
      </Button.Content>
         </Button>

   </div> 
         
              </> } 
              
           
     {filteredPerson.title === "Smutny"  && <> 
 
     <div className='butony'>
        <Button animated style={{width:"250px"}}  size="large"  onClick={step22222} color='violet'  role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible>Wzmocnić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle up' /> 
      </Button.Content>
         </Button>

         <Button animated style={{width:"250px"}} size="large" onClick={step33333} color='violet' role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible>Osłabić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle down' />
      </Button.Content>
         </Button>

   </div> 
         
    </> } 
    
   


  {filteredPerson.title === "Rozgniewany"  && <> 
 
  <div className='butony'>
        <Button animated style={{width:"250px"}}  size="large"   onClick={step222}   color='red'  role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible>Wzmocnić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle up' /> 
      </Button.Content>
         </Button>

         <Button animated style={{width:"250px"}} size="large"   onClick={step333}   color='red'  role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible>Osłabić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle down' />
      </Button.Content>
         </Button>

   </div> 
         
    </> } 

    {filteredPerson.title === "Słaby"  && <> 
 
    <div className='butony'>
    <Button animated style={{width:"250px"}}  size="large"   onClick={step22}  color='teal'  role="button" loading={isLoading} >
       {isLoading ? "" : "" }
       <Button.Content visible>Wzmocnić</Button.Content>
     
      <Button.Content hidden>
    <Icon style={{color:'#022514'}} size='large' name='angle up' /> 
  </Button.Content>
     </Button>

     <Button animated style={{width:"250px"}} size="large"   onClick={step33}    color='teal'  role="button" loading={isLoading} >
       {isLoading ? "" : "" }
       <Button.Content visible>Osłabić</Button.Content>
     
      <Button.Content hidden>
    <Icon style={{color:'#022514'}} size='large' name='angle down' />
  </Button.Content>
     </Button>
     </div>  
  </> } 

  {filteredPerson.title === "Zaskoczony"  && <> 
 
  <div className='butony'>
        <Button animated style={{width:"250px"}}  size="large"   onClick={step222222}  color='purple'  role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible>Wzmocnić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle up' /> 
      </Button.Content>
         </Button>

         <Button animated style={{width:"250px"}} size="large"   onClick={step333333}  color='purple'  role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible>Osłabić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle down' />
      </Button.Content>
         </Button>

   </div> 
     
</> } 

{filteredPerson.title === "Lękliwy"  && <> 
 
<div className='butony'>
        <Button animated style={{width:"250px"}}  size="large"   onClick={step2}  color='green'  role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible>Wzmocnić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle up' /> 
      </Button.Content>
         </Button>

         <Button animated style={{width:"250px"}} size="large"   onClick={step3}  color='green'  role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible>Osłabić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle down' />
      </Button.Content>
         </Button>

   </div> 
   
</> } 

{filteredPerson.title === "Zniesmaczony"  && <> 
 
<div className='butony'>
        <Button animated style={{width:"250px"}}  size="large"   onClick={step2222222}  color='grey'  role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible >Wzmocnić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle up' /> 
      </Button.Content>
         </Button>

         <Button animated style={{width:"250px"}} size="large"   onClick={step3333333}  color='grey'  role="button" loading={isLoading} >
           {isLoading ? "" : "" }
           <Button.Content visible >Osłabić</Button.Content>
         
          <Button.Content hidden>
        <Icon style={{color:'#022514'}} size='large' name='angle down' />
      </Button.Content>
         </Button>

   </div> 
     
   
</> } 

    
  
    </article>   
    
))}


                   
               
              </>
                )}
              </Controls>
              </div>
            </Step>
  
  
  {/*Lękliwy WSZYSTKO*/}
  <Step name="step2">
      <div>
              <Qn2>Regulator emocji</Qn2>
              <Controls>
                {({ back, destinations: { step4} }) => (
                  <>

<Grid >
   

  <Grid.Row stretched>
    <Grid.Column>
        <Segment  color='yellow'  >
       
        <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
         </Segment >
         <Segment   color='olive'>
         <p style={{color:"grey"}} >Wybierz technikę</p>
        
        
         </Segment>
     
         <Segment color='green'>
        <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
        
         </Segment>
     
          
        
    </Grid.Column>
  </Grid.Row>
   
</Grid>         



<br/>

<p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
<br/>
<button className="button-56" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>


                    <Buttons>
                      <FormBtn onClick={back}>Wróć</FormBtn>
                      {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                    </Buttons>
                  </>
                )}
              </Controls>
              </div>
      </Step>
  
  
      <Step name="step3">
      <div>
      <Qn2>Regulator emocji</Qn2>
              <Controls>
                {({ back, destinations: { step4} }) => (
                  <>

<Grid >
   

  <Grid.Row stretched>
    <Grid.Column>
        <Segment  color='yellow'  >
       
        <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
         </Segment >
         <Segment   color='olive'>
         <p style={{color:"grey"}} >Wybierz technikę</p>
        
        
         </Segment>
     
         <Segment color='green'>
        <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
        
         </Segment>
     
          
        
    </Grid.Column>
  </Grid.Row>
   
</Grid>         



<br/>

<p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
<br/>
<button className="button-56" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>

                    <Buttons>
                      <FormBtn onClick={back}>Wróć</FormBtn>
                      {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                    </Buttons>
                  </>
                )}
              </Controls>
              </div>
      </Step>




      {/*Lękliwy WSZYSTKO*/}
      <Step name="step22">
          <div>
                  <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='olive'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='green'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='teal'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-532" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>
      
      
          <Step name="step33">
          <div>
          <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='olive'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='green'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='teal'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-532" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>




          <Step name="step222">
          <div>
                  <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='yellow'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='orange'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='red'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-54" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>
      
      
          <Step name="step333">
          <div>
          <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='yellow'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='orange'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='red'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-54" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>




              <Step name="step2222">
          <div>
                  <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='red'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='orange'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='yellow'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-581" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>
      
      
          <Step name="step3333">
          <div>
          <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='red'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='orange'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='yellow'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-581" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>






          <Step name="step22222">
          <div>
                  <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='teal'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='blue'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='violet'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-57" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>
      
      
          <Step name="step33333">
          <div>
          <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='teal'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='blue'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='violet'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-57" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>





          <Step name="step222222">
          <div>
                  <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='blue'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='violet'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='purple'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-593" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>
      
      
          <Step name="step333333">
          <div>
          <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='blue'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='violet'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='purple'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-593" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>



          <Step name="step2222222">
          <div>
                  <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='pink'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='brown'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='grey'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-55" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>
      
      
          <Step name="step3333333">
          <div>
          <Qn2>Regulator emocji</Qn2>
                  <Controls>
                    {({ back, destinations: { step4} }) => (
                      <>
    
    <Grid >
       
    
      <Grid.Row stretched>
        <Grid.Column>
            <Segment  color='pink'  >
           
            <p style={{color:"grey"}} >Zdjagnozuj przyczynę </p>
             </Segment >
             <Segment   color='brown'>
             <p style={{color:"grey"}} >Wybierz technikę</p>
            
            
             </Segment>
         
             <Segment color='grey'>
            <p style={{color:"grey"}} >Wykonuj ćwiczenia </p>
            
             </Segment>
         
              
            
        </Grid.Column>
      </Grid.Row>
       
    </Grid>         
    
    
    
    <br/>
    
    <p style={{color:"black", marginTop:"15px", marginBottom:"15px"}}>Nie masz dostępu do tej części serwisu</p> 
    <br/>
    <button className="button-55" onClick={step4} role="button" style={{color:"white"}}>Dalej</button>
    
                        <Buttons>
                          <FormBtn onClick={back}>Wróć</FormBtn>
                          {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                        </Buttons>
                      </>
                    )}
                  </Controls>
                  </div>
          </Step>




      <Step name="step4">
      <div>
            
              <Controls>
                {({ back, destinations: { step12, step13, step14} }) => (
                  <>

{ post1.filter(osoba => osoba._id === path).map(filteredPerson => (
            <article key={filteredPerson._id} className="dodaj1" >

             
            
            {filteredPerson.title === "Szczęśliwy"  && <> 
               
          <SzczęśliwyNiewiem />
                 
              </> } 
              
           
     {filteredPerson.title === "Smutny"  && <> 
 
    <SmutnyNiewiem/> 
         
    </> } 
    
   


  {filteredPerson.title === "Rozgniewany"  && <> 
<RozgniewanyNiewiem />
         
    </> } 

    {filteredPerson.title === "Słaby"  && <> 
 
   <SłabyNiewiem />
       
  </> } 

  {filteredPerson.title === "Zaskoczony"  && <> 
 
 <ZaskoczonyNiewiem />
     
</> } 

{filteredPerson.title === "Lękliwy"  && <> 


               
<LękliwyNiewiem />
   
</> } 

{filteredPerson.title === "Zniesmaczony"  && <> 
 
<ZniesmaczonyNiewiem />
   
</> } 
 </article>   
    
))}



                    <Buttons>
                      <FormBtn onClick={back}>Wróć</FormBtn>
                      {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                    </Buttons>
                  </>
                )}
              </Controls>
              </div>
      </Step>
   
      </Wizard>
      </McqContainer>
    </Container>




       
        
        
   
</div>
      
    
  )
}

export default Dodaj



//albo
{/*useEffect(() => {
  const getPost1 = async () => {
    const res = await axios.get("/posts/" + path);
    setPost1(res.data);
   console.log(res)    
  };
  getPost1();
}, [path]);


{posts.map((filteredPerson) => (
        <div className='cocktail-footer'>
             
                <p>{filteredPerson.username}</p>
             
              <p >{filteredPerson.title}</p>
              <p >{filteredPerson.desc}</p>
              <Link to={`/`} className='btn btn-primary btn-details'>Powrót</Link>
            </div>
      ))}

*/}