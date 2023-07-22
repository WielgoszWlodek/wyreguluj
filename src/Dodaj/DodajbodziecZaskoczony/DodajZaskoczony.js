import React, { useContext, useState } from "react";
import "./../Dodajbodziec/validacja.css";
import "./../write.css";
import { Controls, Step, Wizard } from "react-decision-tree-flow";
import styled from "styled-components";
import LękliwyNazwa from "../../pages/uczucia/lękliwy/LękliwyNazwa";
import SłabyNazwa from "../../pages/uczucia/słaby/SłabyNazwa";
import ZaskoczonyNazwa from "../../pages/uczucia/zaskoczony/ZaskoczonyNazwa";

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
  step1: ['step2', 'step3', 'step4', 'step5', 'step6', 'step7'],
  step2: ['step8', 'step9'],
  step3: ['step10', 'step11'],
  step4: ['step12', 'step13'],
  step5: ['step14', 'step15'],
  step6: [], 
  step7: ['step16'], 
  step8: [],
  step9: [],
  step10: [],
  step11: [],
  step12: [],
  step13: [],
  step14: [],
  step15: [],
  step16: [],
  error: ['step2'],
};

export default function DodajZaskoczony() {

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


  

  return (
    <div className="write">
      <Container>
        <McqContainer>
          <Wizard tree={tree} first="step1">
            <Step name="step1">
              <div>
                <Qn1>Opisz uczucie dokładniej</Qn1>
                <Controls>
                  {({ back, destinations: { step2, step3, step4, step5, step6, step7 } }) => (
                    <>

                    <button className="button-59" onClick={step2} role="button">Przestraszony</button>
                   <button className="button-59" onClick={step3} role="button">Zmieszany</button>
                   <button className="button-59" onClick={step4} role="button">Zdumiony</button>
                     <button className="button-591" onClick={step5} role="button">Podekscytowany</button>
                     <button className="button-59" onClick={step6} role="button">Nie wiem</button>
                     <button className="button-59" onClick={step7} role="button">Moja nazwa</button>

                  
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            <Step name="step2">
              <div>
                <Qn1>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step8, step9 } }) => (
                    <>
                      <button className="button-59" onClick={step8} role="button">Wstrząśnięty</button>
                      <button className="button-59" onClick={step9} role="button">Skonsternowany</button>

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
                <Qn1>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step10, step11 } }) => (
                    <>
                      <button className="button-59" onClick={step10} role="button">Zakłopotany</button>
                      <button className="button-59" onClick={step11} role="button">Rozczarowany</button>

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
                <Qn1>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step12, step13 } }) => (
                    <>
                      <button className="button-59" onClick={step12} role="button">Zatrwożony</button>
                      <button className="button-59" onClick={step13} role="button">Zdziwiony</button>

                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            <Step name="step5">
              <div>
                <Qn1>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step14, step15 } }) => (
                    <>
                      <button className="button-593" onClick={step14} role="button">Ochoczy</button>
                      <button className="button-593" onClick={step15} role="button">Energiczny</button>

                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>


            <Step name="step6">
              <div>
                <Qn>
                <ZaskoczonyNazwa nazwa='Nie wiem' />
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
            <Step name="step8">
              <div>
                <Qn>
                <ZaskoczonyNazwa nazwa='Wstrząśnięty' posredni="Przestraszony" />
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
            <Step name="step9">
              <div>
                <Qn>
                <ZaskoczonyNazwa nazwa='Skonsternowany' posredni="Przestraszony" />
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

            <Step name="step10">
              <div>
                <Qn>
                <ZaskoczonyNazwa nazwa='Zakłopotany' posredni="Zmieszany" />
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
            <Step name="step11">
              <div>
                <Qn>
                <ZaskoczonyNazwa nazwa='Rozczarowany' posredni="Zmieszany" />
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

            <Step name="step12">
              <div>
                <Qn>
                <ZaskoczonyNazwa nazwa='Zatrwożony' posredni="Zdumiony" />
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
            <Step name="step13">
              <div>
                <Qn>
                <ZaskoczonyNazwa nazwa='Zdziwiony' posredni="Zdumiony" />
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

            <Step name="step14">
              <div>
                <Qn>
                <ZaskoczonyNazwa nazwa='Ochoczy' posredni="Podekscytowany" />
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
            <Step name="step15">
              <div>
                <Qn>
                <ZaskoczonyNazwa nazwa='Energiczny' posredni="Podekscytowany" />
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


           
            <Step name="step7">
              <div>
                <Qn1 style={{ marginBottom: "80px", marginLeft: "30px" }}>Podaj nazwę uczucia </Qn1>

                <form onSubmit={handleSubmit1} >
                  <div className="group">
                    <input required
                      onChange={e => setName(e.target.value)}
                      value={name}
                    />
                    <span className="highlight"></span>
                    <span className="bar3"></span>

                    {error && name.length <= 0 ?
                      <label >Podaj nazwę</label> : ""}
                    {error && name.length >= 20 ?
                      <label >Wpis jest za długi</label> : ""}
                    {error && (name.length >= 1 && name.length < 20)
                      ?
                      <Controls>
                        {({ back, destinations: { step16 } }) => (
                          <>
                            <button className="button-591" style={{ width: "270px", color: "white", marginTop: "100px" }} onClick={step16} role="button">Dalej</button>
                            <Buttons>
                              <FormBtn onClick={back}>Wróć</FormBtn>
                              {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                            </Buttons>
                          </>
                        )}
                      </Controls>
                      : <div>
                        <Controls>
                          {({ back, destinations: {  } }) => (
                            <>
                              <button className="button-591" style={{ width: "270px", marginTop: "100px" }} onClick={handleSubmit1} role="button">Dodaj</button>
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


            <Step name="step16">
              <div>
                <Qn>
                <ZaskoczonyNazwa nazwa={name} />
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





