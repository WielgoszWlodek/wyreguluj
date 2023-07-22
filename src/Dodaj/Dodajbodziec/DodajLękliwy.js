import React, { useContext, useState } from "react";
import { useEffect } from "react";
import "./../Dodajbodziec/validacja.css";
import "./../write.css";
import { Controls, Step, Wizard } from "react-decision-tree-flow";
import styled from "styled-components";
import { useHistory } from 'react-router';
import axios from "axios";
import { Context } from "./../../context/Context";
import { useLocation } from "react-router";
import { Input } from 'semantic-ui-react'
import { Header, Label, Grid, Button, Form, TextArea, Dimmer, Loader, Image, Segment, Icon } from "semantic-ui-react";



import LękliwyNazwa from "../../pages/uczucia/lękliwy/LękliwyNazwa";


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



const tree = {

  step1: ['step42', 'step43', 'step44', 'step45', 'step46', 'step47', 'step4711', 'step4777'],





  step41: ['step42', 'step43', 'step44', 'step45', 'step46', 'step47', 'step4711'],//zmęczony zestresowany, zapracowany, 

  step42: ['step464', 'step474'],// słaby 13- wstrząśnięty, 17- skonsternowany
  step43: ['step461', 'step471'],//słaby 13- znudzony, 161 -apatyczny, 171- obojętny
  step44: ['step481', 'step491'],// słaby 14-- zapracowany, 181-pospieszany,191  pod presją
  step45: ['step441', 'step451'],// słaby 14-- zestresowany, 181-pospieszany,191  pod presją
  step46: ['step444', 'step445'], // słaby 13- wstrząśnięty, 17- skonsternowany
  step47: ['step446', 'step447'], //słaby 13- znudzony, 161 -apatyczny, 171- obojętny
  step4777: ['step4712'], //output przytłoczony





  //step21: ['step22', 'step23', 'step24','step25'],//zmęczony zestresowany, zapracowany, znudzony






  step464: [],//output Rozkojarzony
  step474: [], //output Senny
  step461: [], //outpu Zakłopotany
  step471: [], //output Rozczarowany
  step481: [], //outpu Pośpieszany
  step491: [], //output Pod presją
  step441: [],//output tracący kontrolę
  step451: [], //output przytłoczony
  step444: [], //outpu Pośpieszany
  step445: [], //output Pod presją
  step446: [],//output tracący kontrolę
  step447: [], //output przytłoczony
  step4711: [], //output przytłoczony
  step4712: [], //output przytłoczony


  step8: [],
  step9: [],
  error: ['step11'],
};

export default function DodajLękliwy() {



  {/*const [title, setTitle] = useState("Słaby");
  const [desc, setDesc] = useState("Zaspany");

  const { user } = useContext(Context);
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user._id,
      title,
      desc,
    };

    try {
      const res = await axios.post("/posts", newPost)
      .then(() => {
        history.push("/")
    })
     
  
     window.location.replace("/post/" + res.data._id);
    } catch (err) {console.log(err)}
  };


*/}



  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState(true)


  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (name.length == 0) {
      setError(true)
    }
    if (name.length >= 10) {
      setError(true)
    }
    if (name) {
      console.log("First Name: ", name)
    }
  }


  const [desc, setDesc] = useState("Bezsilny");

  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(Context);
  const location = useLocation();
  const [sprawdz, setSprawdz] = useState("");

  const [visibleItem, setVisibleItem] = useState("");
  const [checked, setChecked] = useState(false);
  let history = useHistory();


  const path = location.pathname.split("/")[2];


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {

      desc: 'Bezsilny'

    };

    try {
      const res = await axios.put("/posts/update/" + path, newPost)
        .then(() => {

        })
        .then(() => {
          history.push("DodajLękliwybodziec/" + path)

        })
    } catch (err) { console.log(err) }
  };




  const toggleChecked = () => setChecked((value) => !value);
  const styles = {
    selected: {
      background: checked ? "#20b8be" : "gray"
      //opacity: clicked ? "1" : "0"
    }
  };

  function createHighlight(e) {
    let parent = e.target.parentElement || e.parentElement;
    let children = parent.childNodes;
    children.forEach((child) => {
      if (child.nodeName === "BUTTON") {
        child.style.backgroundColor = "";
        if (child === e.target) {
          child.style.backgroundColor = "#20b8be";
        }
      }
    });
  }

  return (
    <div className="write">


      <Container>
        <McqContainer>
          <Wizard tree={tree} first="step1">
            <Step name="step1">
              <div>



                <Qn1>Opisz uczucie dokładniej</Qn1>





                <Controls>
                  {({ back, destinations: { step42, step43, step44, step45, step46, step47, step4711, step4777 } }) => (
                    <>


                      <button className="button-56" onClick={step42} role="button">Przestraszony</button>
                      <button className="button-56" onClick={step43} role="button">Niespokojny</button>
                      <button className="button-56" onClick={step44} role="button">Niepewny</button>
                      <button className="button-56" onClick={step45} role="button">Uległy</button>
                      <button className="button-561" onClick={step46} role="button">Odrzucony</button>
                      <button className="button-56" onClick={step47} role="button">Zastraszony</button>
                      <button className="button-56" onClick={step4711} role="button">Nie wiem</button>
                      <button className="button-56" onClick={step4777} role="button">Moja nazwa </button>


                    </>
                  )}
                </Controls>
              </div>
            </Step>




            {/* LĘKLIWY WSZYSTKO POCZĄTEK*/}


            <Step name="step42">
              <div>
                <Qn1 style={{ marginBottom: "120px" }}>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step464, step474 } }) => (
                    <>



                      <button className="button-56" onClick={step464} style={{ justifyContent: "center" }} role="button">Bezislny</button>

                      <button className="button-56" onClick={step474} role="button">Zastraszony</button>

                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>
            <Step name="step43">
              <div>
                <Qn1 style={{ marginBottom: "120px" }}>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step461, step471 } }) => (
                    <>

                      <button className="button-56" onClick={step461} role="button">Przytłoczony</button>
                      <button className="button-56" onClick={step471} role="button">Zmartwiony</button>

                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            <Step name="step44">
              <div>
                <Qn1 style={{ marginBottom: "120px" }}>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step481, step491 } }) => (
                    <>

                      <button className="button-56" onClick={step481} role="button">Niewystarczający</button>
                      <button className="button-56" onClick={step491} role="button">Podrzędny</button>

                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            <Step name="step45">
              <div>
                <Qn1 style={{ marginBottom: "120px" }}>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step441, step451 } }) => (
                    <>

                      <button className="button-56" onClick={step441} role="button">Bezwartościowy</button>
                      <button className="button-56" onClick={step451} role="button">Nieistotny</button>

                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>
            <Step name="step46">
              <div>
                <Qn1 style={{ marginBottom: "120px" }}>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step444, step445 } }) => (
                    <>

                      <button className="button-56" onClick={step444} role="button">Wyobcowany</button>
                      <button className="button-56" onClick={step445} role="button">Niepasujący</button>

                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            <Step name="step47">
              <div>

                <Qn1 style={{ marginBottom: "120px" }}>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step446, step447 } }) => (
                    <>

                      <button className="button-56" onClick={step446} role="button">Nerwowy</button>
                      <button className="button-56" onClick={step447} role="button">Zdemaskowany</button>

                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            <Step name="step464">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Bezsilny' posredni="Przestraszony" />

                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>
            <Step name="step474">
              <div>
                <Qn>

                  <LękliwyNazwa nazwa='Zastraszony' posredni="Przestraszony" />
                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            {/*output słaby, znudzony, apatyczny, obojętny */}
            <Step name="step461">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Przytłoczony' posredni="Niespokojny" />


                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>
            <Step name="step471">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Zmartwiony' posredni="Niespokojny" />

                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>


            <Step name="step481">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Niewystarczający' posredni="Niepewny" />


                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>
            <Step name="step491">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Podrzędny' posredni="Niepewny" />

                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>



            {/*output słaby, zestresowany, tracący kontrolę, przytłoczony */}
            <Step name="step441">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Bezwartościowy' posredni="Uległy" />


                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>
            <Step name="step451">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Nieistotny' posredni="Uległy" />

                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>




            <Step name="step444">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Wyobcowany' posredni="Odrzucony" />

                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>
            <Step name="step445">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Niepasujący' posredni="Odrzucony" />

                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            {/*output słaby, znudzony, apatyczny, obojętny */}
            <Step name="step446">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Nerwowy' posredni="Zastraszony" />


                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>
            <Step name="step447">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Zdemaskowany' posredni="Zastraszony" />

                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>


            <Step name="step4777">
              <div>
                <Qn1 style={{ marginBottom: "80px", marginLeft: "30px" }}>Podaj nazwę uczucia </Qn1>











                <form onSubmit={handleSubmit1} >


                  <div className="group">
                    <input required
                      onChange={e => setName(e.target.value)}
                      value={name}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>

                    {error && name.length <= 0 ?
                    <label >Podaj nazwę</label> : ""}
                    {error && name.length >= 20 ?
                    <label >Wpis jest za długi</label> : ""}
                    {console.log(error)}
                    {error && (name.length >= 1 && name.length < 20)
                      ?
                      <Controls>
                        {({ back, destinations: { step4712 } }) => (
                          <>

                            <button className="button-56" style={{ width: "270px", color: "white", marginTop: "100px" }} onClick={step4712} role="button">Dalej</button>
                            <Buttons>
                              <FormBtn onClick={back}>Wróć</FormBtn>
                              {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                            </Buttons>
                          </>
                        )}
                      </Controls>
                      : <div>
                        <Controls>
                          {({ back, destinations: { step4712 } }) => (
                            <>
                           <button className="button-56" style={{ width: "270px", marginTop: "100px" }} onClick={handleSubmit1} role="button">Dodaj</button>
                              <Buttons>
                                <FormBtn onClick={back}>Wróć</FormBtn>
                                {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                              </Buttons>
                            </>
                          )}
                        </Controls>
                      </div>
                    }

                  </div>

                </form>



              </div>
            </Step>







            <Step name="step4711">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa='Nie wiem' />

                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            <Step name="step4712">
              <div>
                <Qn>
                  <LękliwyNazwa nazwa={name} />

                </Qn>
                <br />
                <Controls>
                  {({ back, destinations: { } }) => (
                    <>
                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            {/*LĘKLIWY WSZYSTKO KONIEC*/}




            {/*ROZGNIEWANY WSZYSTKO KONIEC*/}




            <Step name="error">
              <div>
                <Qn>
                  I am step 4
                </Qn>
                <br />
                <Controls>
                  {({ destinations: { step2 } }) => (
                    <button onClick={step2}>Go to Step 2</button>
                  )}
                </Controls>
              </div>
            </Step>
          </Wizard>
        </McqContainer>
      </Container>
    </div>
  );
}





