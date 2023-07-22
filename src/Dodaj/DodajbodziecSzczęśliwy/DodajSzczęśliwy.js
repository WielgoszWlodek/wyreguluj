import React, { useContext, useState } from "react";
import "./../Dodajbodziec/validacja.css";
import "./../write.css";
import { Controls, Step, Wizard } from "react-decision-tree-flow";
import styled from "styled-components";


import SzczęśliwyNazwa from "../../pages/uczucia/szczęśliwy/SzczęśliwyNazwa";

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


const tree = {
  step1: ['step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8', 'step9', 'step91', 'step10', 'step11'],
  step2: ['step12', 'step13'],
  step3: ['step14', 'step15'],
  step4: ['step16', 'step17'],
  step5: ['step18', 'step19'],
  step6: ['step20', 'step21'],
  step7: ['step22', 'step23'],
  step8: ['step24', 'step25'],
  step9: ['step26', 'step27'],
  step11:['step28'],
step91:['step266', 'step277'],
  step10: [],
  step12: [],
  step13: [],
  step14: [],
  step15: [],
  step16: [],
  step17: [],
  step18: [],
  step19: [],
  step20: [],
  step21: [],
  step22: [],
  step23: [],
  step24: [],
  step25: [],
  step26: [],
  step27: [],
  step28: [],
  step266: [],
  step277: [],
  error: ['step2'],
};

export default function DodajSzczęśliwy() {

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
                  {({ back, destinations: { step2, step3, step4, step5, step6, step7, step8, step9, step91, step10, step11 } }) => (
                    <>


                    <button className="button-581" onClick={step2} role="button">Żartobliwy</button>
                    <button className="button-581" onClick={step3} role="button">Zadowolony</button>
                    <button className="button-581" onClick={step4} role="button">Zainteresowany</button>
                    <button className="button-581" onClick={step5} role="button">Dumny</button>
                    <button className="button-581" onClick={step6} role="button">Akceptowany</button>
                    <button className="button-5811" onClick={step7} role="button">Pełen siły</button>
                    <button className="button-581" onClick={step8} role="button">Spokojny</button>
                    <button className="button-581" onClick={step9} role="button">Czujący bliskość</button>
                    <button className="button-581" onClick={step91} role="button">Optymistyczny</button>
                    <button className="button-581" onClick={step10} role="button">Nie wiem</button>
                    <button className="button-581" onClick={step11} role="button">Moja nazwa</button>
                      
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            <Step name="step2">
              <div>
                <Qn1>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step12, step13 } }) => (
                    <>
                    <button className="button-581" onClick={step12} role="button">Zuchwały</button>
                    <button className="button-581" onClick={step13} role="button">Pobudzony</button>

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
                  {({ back, destinations: { step14, step15 } }) => (
                    <>
                    <button className="button-581" onClick={step14} role="button">Wolny</button>
                    <button className="button-581" onClick={step15} role="button">Wesoły</button>

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
                  {({ back, destinations: { step16, step17 } }) => (
                    <>
                    <button className="button-581" onClick={step16} role="button">Zaciekawiony</button>
                    <button className="button-581" onClick={step17} role="button">Dociekliwy</button>

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
                  {({ back, destinations: { step18, step19 } }) => (
                    <>
                    <button className="button-581" onClick={step18} role="button">Ważny</button>
                    <button className="button-581" onClick={step19} role="button">Pewny siebie</button>

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
                <Qn1>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step20, step21 } }) => (
                    <>
                    <button className="button-581" onClick={step20} role="button">Szanowany</button>
                    <button className="button-581" onClick={step21} role="button">Doceniony</button>

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
                <Qn1>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step22, step23 } }) => (
                    <>
                    <button className="button-581" onClick={step22} role="button">Odważny</button>
                    <button className="button-581" onClick={step23} role="button">Kreatywny</button>

                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>



            <Step name="step8">
              <div>
                <Qn1>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step24, step25 } }) => (
                    <>
                    <button className="button-581" onClick={step24} role="button">Kochający</button>
                    <button className="button-581" onClick={step25} role="button">Wdzięczny</button>

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
                <Qn1>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step26, step27 } }) => (
                    <>
                    <button className="button-581" onClick={step26} role="button">Czuły</button>
                    <button className="button-581" onClick={step27} role="button">Figlarny</button>

                      <Buttons>
                        <FormBtn onClick={back}>Wróć</FormBtn>
                        {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                      </Buttons>
                    </>
                  )}
                </Controls>
              </div>
            </Step>

            
            
            <Step name="step91">
              <div>
                <Qn1>A tak dokładniej?</Qn1>
                <Controls>
                  {({ back, destinations: { step266, step277 } }) => (
                    <>
                    <button className="button-581" onClick={step266} role="button">Pełen nadziei</button>
                    <button className="button-581" onClick={step277} role="button">Zainspirowany</button>

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
                <SzczęśliwyNazwa nazwa='Zuchwały' posredni="Żartobliwy" />
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
            <Step name="step13">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Pobudzony' posredni="Żartobliwy" />
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
                <SzczęśliwyNazwa nazwa='Wolny' posredni="Zadowolony" />
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
            <Step name="step15">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Wesoły' posredni="Zadowolony" />
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



            <Step name="step16">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Zaciekawiony' posredni="Zainteresowany" />
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

            <Step name="step17">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Dociekliwy' posredni="Zainteresowany" />
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

            <Step name="step18">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Ważny' posredni="Dumny" />
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

            <Step name="step19">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Pewny siebie' posredni="Dumny" />
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

            <Step name="step20">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Szanowany' posredni="Akceptowany" />
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

            <Step name="step21">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Doceniony' posredni="Akceptowany" />
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

            <Step name="step22">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Odważny' posredni="Pełen siły" />
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

            <Step name="step23">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Kreatywny' posredni="Pełen siły" />
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

            <Step name="step24">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Kochający' posredni="Spokojny" />
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

            <Step name="step25">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Wdzięczny' posredni="Spokojny" />
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

            <Step name="step26">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Czuły' posredni="Czujący bliskość" />
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

            <Step name="step27">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Figlarny' posredni="Czujący bliskość" />
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


            <Step name="step266">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Pełen nadziei' posredni="Optymistyczny" />
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

            <Step name="step277">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa='Zainspirowany' posredni="Optymistyczny" />
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
                  <SzczęśliwyNazwa nazwa='Nie wiem'  />
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
              <Qn1 style={{ marginBottom: "80px", marginLeft: "30px" }}>Podaj nazwę uczucia </Qn1>

<form onSubmit={handleSubmit1} >
  <div className="group">
    <input required
      onChange={e => setName(e.target.value)}
      value={name}
    />
    <span className="highlight"></span>
    <span className="bar2"></span>

    {error && name.length <= 0 ?
      <label >Podaj nazwę</label> : ""}
    {error && name.length >= 20 ?
      <label >Wpis jest za długi</label> : ""}
    {error && (name.length >= 1 && name.length < 20)
      ?
      <Controls>
        {({ back, destinations: { step28 } }) => (
          <>
            <button className="button-581" style={{ width: "270px", color: "white", marginTop: "100px" }} onClick={step28} role="button">Dalej</button>
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
              <button className="button-581" style={{ width: "270px", marginTop: "100px" }} onClick={handleSubmit1} role="button">Dodaj</button>
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


            <Step name="step28">
              <div>
                <Qn>
                <SzczęśliwyNazwa nazwa={name} />
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





