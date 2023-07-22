import React , { useContext, useState } from "react";
import "./write.css";
import { Controls, Step, Wizard } from "react-decision-tree-flow";
import styled from "styled-components";
import { useHistory } from 'react-router';
import axios from "axios";
import { Context } from "../../context/Context";
import SłabySenny from "../uczucia/słaby/SłabySenny";
import SłabyRozkojarzony from "../uczucia/słaby/SłabyRozkojarzony";
import SłabyObojętny from "../uczucia/słaby/SłabyObojętny";
import SłabyApatyczny from "../uczucia/słaby/SłabyApatyczny"
import SłabyPospieszany from "../uczucia/słaby/SłabyPospieszany";
import SłabyPodpresją from "../uczucia/słaby/SłabyPodpresją";
import SłabyTracącyKontrolę from "../uczucia/słaby/SłabyTracącyKontrolę";
import SłabyPrzytłoczony from "../uczucia/słaby/SłabyPrzytłoczony";
import SłabyNiewiem from "../uczucia/słaby/słabyNiewiem";


import ZaskoczonyWstrząśnięty from "../uczucia/zaskoczony/ZaskoczonyWstrząśnięty";
import ZaskoczonySkonsternowany from "../uczucia/zaskoczony/ZaskoczonySkonsternowany";
import ZaskoczonyEnergiczny from "../uczucia/zaskoczony/ZaskoczonyEnergiczny";
import ZaskoczonyOchoczy from "../uczucia/zaskoczony/ZaskoczonyOchoczy";
import ZaskoczonyZakłopotany from "../uczucia/zaskoczony/ZaskoczonyZakłopotany";
import ZaskoczonyRozczarowany from "../uczucia/zaskoczony/ZaskoczonyRozczarowany";
import ZaskoczonyZatrwożony from "../uczucia/zaskoczony/ZaskoczonyZatrwożony";
import ZaskoczonyZdziwiony from "../uczucia/zaskoczony/ZaskoczonyZdziwiony";
import ZaskoczonyNiewiem from "../uczucia/zaskoczony/ZaskoczonyNiewiem";

import ZniesmaczonyNiechętny from "../uczucia/zniesmaczony/ZniesmaczonyNiechętny";
import ZniesmaczonyKrytykancki from "../uczucia/zniesmaczony/ZniesmaczonyKrytykancki";
import  ZniesmaczonyZbuntowany from "../uczucia/zniesmaczony/ZniesmaczonyZbuntowany";
import  ZniesmaczonyAntypatyczny from "../uczucia/zniesmaczony/ZniesmaczonyAntypatyczny";
import  ZniesmaczonyPodburzony from "../uczucia/zniesmaczony/ZniesmaczonyPodburzony";
import  ZniesmaczonyObrzydzony from "../uczucia/zniesmaczony/ZniesmaczonyObrzydzony";
import  ZniesmaczonyCzującyOdrazę from "../uczucia/zniesmaczony/ZniesmaczonyCzującyOdrazę";
import  ZniesmaczonyNiepewny from "../uczucia/zniesmaczony/ZniesmaczonyNiepewny";
import ZniesmaczonyNiewiem from "../uczucia/zniesmaczony/ZniesmaczonyNiewiem";

import LękliwyBezsilny from "../uczucia/lękliwy/LękliwyBezsilny";
import LękliwyZastraszony from "../uczucia/lękliwy/LękliwyZastraszony";
import LękliwyPrzytłoczony from "../uczucia/lękliwy/LękliwyPrzytłoczony";
import LękliwyZmartwiony from "../uczucia/lękliwy/LękliwyZmartwiony";
import LękliwyZdemaskowany from "../uczucia/lękliwy/LękliwyZdemaskowany";
import LękliwyWyobcowany from "../uczucia/lękliwy/LękliwyWyobcowany";
import LękliwyPodrzędny from "../uczucia/lękliwy/LękliwyPodrzędny";
import LękliwyNiewystarczający from "../uczucia/lękliwy/LękliwyNiewystarczający";
import LękliwyNiepasujący from "../uczucia/lękliwy/LękliwyNiepasujący";
import LękliwyBezwartościowy from "../uczucia/lękliwy/LękliwyBezwartościowy";
import LękliwyNerwowy from "../uczucia/lękliwy/LękliwyNerwowy";
import LękliwyNieistotny from "../uczucia/lękliwy/LękliwyNieistotny";
import LękliwyNiewiem from "../uczucia/lękliwy/LękliwyNiewiem";

import SmutnyBezsilny from "../uczucia/smutny/SmutnyBezsilny";
import SmutnyGorszyodinnych from "../uczucia/smutny/SmutnyGorszyodinnych";
import SmutnyOdizolowany from "../uczucia/smutny/SmutnyOdizolowany";
import SmutnyPorzucony from "../uczucia/smutny/SmutnyPorzucony";
import SmutnyPrześladowany from "../uczucia/smutny/SmutnyPrześladowany";
import SmutnyRozczarowany from "../uczucia/smutny/SmutnyRozczarowany";
import SmutnySkruszony from "../uczucia/smutny/SmutnySkruszony";
import SmutnySłabowity from "../uczucia/smutny/SmutnySłabowity";
import SmutnyWbólu from "../uczucia/smutny/SmutnyWbólu";
import SmutnyWyczerpany from "../uczucia/smutny/SmutnyWyczerpany";
import SmutnyZawstydzony from "../uczucia/smutny/SmutnyZawstydzony";
import SmutnyZlekceważony from "../uczucia/smutny/SmutnyZlekceważony";
import SmutnyNiewiem from "../uczucia/smutny/SmutnyNiewiem";



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
display: flex;
justify-content: space-around;



`;

const Button = styled.button`
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



const tree = { 
  step1: ['step11', 'step21','step31', 'step41', 'step51','step61', 'step71'],

    step11: ['step12', 'step13', 'step14','step15', 'step1511'],//zmęczony zestresowany, zapracowany, znudzony

    step12: ['step16', 'step17'],// słaby 13- rozkojarzony, 17- senny
    step13: ['step161', 'step171'],//słaby 13- znudzony, 161 -apatyczny, 171- obojętny
    step14: ['step181', 'step191'],// słaby 14-- zapracowany, 181-pospieszany,191  pod presją
    step15: ['step141', 'step151'],// słaby 14-- zestresowany, 181-pospieszany,191  pod presją
    

    step21: ['step22', 'step23', 'step24','step25', 'step2511'],//zmęczony zestresowany, zapracowany, znudzony

    step22: ['step26', 'step27'],// słaby 13- wstrząśnięty, 17- skonsternowany
    step23: ['step261', 'step271'],//słaby 13- znudzony, 161 -apatyczny, 171- obojętny
    step24: ['step281', 'step291'],// słaby 14-- zapracowany, 181-pospieszany,191  pod presją
    step25: ['step241', 'step251'],// słaby 14-- zestresowany, 181-pospieszany,191  pod presją



    step31: ['step32', 'step33', 'step34','step35', 'step3511'],//zmęczony zestresowany, zapracowany, znudzony

    step32: ['step36', 'step37'],// słaby 13- wstrząśnięty, 17- skonsternowany
    step33: ['step361', 'step371'],//słaby 13- znudzony, 161 -apatyczny, 171- obojętny
    step34: ['step381', 'step391'],// słaby 14-- zapracowany, 181-pospieszany,191  pod presją
    step35: ['step341', 'step351'],// słaby 14-- zestresowany, 181-pospieszany,191  pod presją


    step41: ['step42', 'step43', 'step44','step45', 'step46','step47', 'step4711'],//zmęczony zestresowany, zapracowany, 
    
    step42: ['step464', 'step474'],// słaby 13- wstrząśnięty, 17- skonsternowany
    step43: ['step461', 'step471'],//słaby 13- znudzony, 161 -apatyczny, 171- obojętny
    step44: ['step481', 'step491'],// słaby 14-- zapracowany, 181-pospieszany,191  pod presją
    step45: ['step441', 'step451'],// słaby 14-- zestresowany, 181-pospieszany,191  pod presją
    step46: ['step444', 'step445'], // słaby 13- wstrząśnięty, 17- skonsternowany
    step47: ['step446', 'step447'], //słaby 13- znudzony, 161 -apatyczny, 171- obojętny
  
    

    step51: ['step52', 'step53', 'step54','step55', 'step56','step57', 'step5711'],//zmęczony zestresowany, zapracowany, 
    
    step52: ['step564', 'step574'],// słaby 13- wstrząśnięty, 17- skonsternowany
    step53: ['step561', 'step571'],//słaby 13- znudzony, 161 -apatyczny, 171- obojętny
    step54: ['step581', 'step591'],// słaby 14-- zapracowany, 181-pospieszany,191  pod presją
    step55: ['step541', 'step551'],// słaby 14-- zestresowany, 181-pospieszany,191  pod presją
    step56: ['step544', 'step545'], // słaby 13- wstrząśnięty, 17- skonsternowany
    step57: ['step546', 'step547'], //słaby 13- znudzony, 161 -apatyczny, 171- obojętny
  

    
    //step21: ['step22', 'step23', 'step24','step25'],//zmęczony zestresowany, zapracowany, znudzony

    step16: [],//output Rozkojarzony
    step17: [], //output Senny
    step161: [], //outpu Apatyczny
    step171: [], //output Obojętny
    step181: [], //outpu Pośpieszany
    step191: [], //output Pod presją
    step141: [],//output tracący kontrolę
    step151: [], //output przytłoczony
    step1511: [], //nie wiem


    step26: [],//output Rozkojarzony
    step27: [], //output Senny
    step261: [], //outpu Zakłopotany
    step271: [], //output Rozczarowany
    step281: [], //outpu Pośpieszany
    step291: [], //output Pod presją
    step241: [],//output tracący kontrolę
    step251: [], //output przytłoczony
    step2511: [], //nie wiem

    step36: [],//output Rozkojarzony
    step37: [], //output Senny
    step361: [], //outpu Zakłopotany
    step371: [], //output Rozczarowany
    step381: [], //outpu Pośpieszany
    step391: [], //output Pod presją
    step341: [],//output tracący kontrolę
    step351: [], //output przytłoczony
    step3511: [], //output przytłoczony

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

    step564: [],//output Rozkojarzony
    step574: [], //output Senny
    step561: [], //outpu Zakłopotany
    step571: [], //output Rozczarowany
    step581: [], //outpu Pośpieszany
    step591: [], //output Pod presją
    step541: [],//output tracący kontrolę
    step551: [], //output przytłoczony
     step544: [], //outpu Pośpieszany
    step545: [], //output Pod presją
    step546: [],//output tracący kontrolę
    step547: [], //output przytłoczony
    step5711: [], //output przytłoczony

    step8: [],
    step9: [],
    error: ['step11'],
  };

export default function Write() {
{/*const [title, setTitle] = useState("Słaby");
  const [desc, setDesc] = useState("Zaspany");
  const { user } = useContext(Context);
  let history = useHistory();

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
  const [visibleItem, setVisibleItem] = useState("");
  const [checked, setChecked] = useState(false);
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
            <Qn>Jak się teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step11, step21, step31, step41, step51, step61, step71} }) => (
                <>
                  <Button onClick={step11}>Słaby</Button>
                  <Button onClick={step21}>Zaskoczony</Button>
                  <Button onClick={step31}>Zniesmaczony</Button>
                  <Button onClick={step41}>Lękliwy</Button>
                   <Button onClick={step51}>Smutny</Button>
                  <Button onClick={step71}>Szczęśliwy</Button>
                  <Button onClick={step61}>Rozgniewany</Button>
                  
                
                </>
              )}
            </Controls>
            </div>
          </Step>


{/*SŁABY WSZYSTKO*/}


    <Step name="step11">
    <div>
            <Qn>A tak dokłaniej?</Qn>
            <Controls>
              {({ back, destinations: { step12, step13, step14, step15, step1511} }) => (
                <>
                <Button onClick={step12}>Zmęczony</Button>
                  <Button onClick={step13}>Znudzony</Button>
                  <Button onClick={step14}>Zapracowany</Button>
                   <Button onClick={step15}>Zestresowany</Button>
                   <Button onClick={step1511}>Nie wiem</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step12">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step16, step17} }) => (
                <>
                  <Button onClick={step16}>Rozkojarzony</Button>
                  <Button onClick={step17}>Senny</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step13">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step161, step171} }) => (
                <>
                  <Button onClick={step161}>Apatyczny</Button>
                  <Button onClick={step171}>Obojętny</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step14">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step181, step191} }) => (
                <>
                  <Button onClick={step181}>Pośpieszany</Button>
                  <Button onClick={step191}>Pod presją</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step15">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step141, step151} }) => (
                <>
                  <Button onClick={step141}>Tracący kontrolę</Button>
                  <Button onClick={step151}>Przytłoczony</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    {/*output słaby, zmęczony, rozkojarzony, senny */}
    <Step name="step16">
      <div>
      <Qn>
    <SłabyRozkojarzony/>
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
      
      <SłabySenny/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Wstecz</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>

 {/*output słaby, znudzony, apatyczny, obojętny */}
    <Step name="step161">
      <div>
      <Qn>
         <SłabyApatyczny/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step171">
      <div>
      <Qn>
      
      <SłabyObojętny/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>



 {/*output słaby, zapracowany, pospieszany, pod presją */}
 <Step name="step181">
      <div>
      <Qn>
         <SłabyPospieszany/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step191">
      <div>
      <Qn>
      
      <SłabyPodpresją/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>



    {/*output słaby, zestresowany, tracący kontrolę, przytłoczony */}
 <Step name="step141">
      <div>
      <Qn>
         <SłabyTracącyKontrolę/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step151">
      <div>
      <Qn>
      
      <SłabyPrzytłoczony/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>
    <Step name="step1511">
    <div>
    <Qn>
    
    <SłabyNiewiem/>
     </Qn>
      <br />
      <Controls>
            {({ back, destinations: { } }) => (
              <>
               <Buttons>
                  <FormBtn onClick={back}>Back</FormBtn>
                  {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                </Buttons>
              </>
            )}
          </Controls>
    </div>
  </Step>


    {/*SŁABY WSZYSTKO KONIEC*/}

    {/*SŁABY WSZYSTKO POCZĄTEK*/}

    <Step name="step21">
    <div>
            <Qn>A tak dokłaniej?</Qn>
            <Controls>
              {({ back, destinations: { step22, step23, step24, step25, step2511} }) => (
                <>
                <Button onClick={step22}>Przestraszony</Button>
                  <Button onClick={step23}>Zmieszany</Button>
                  <Button onClick={step24}>Zdumiony</Button>
                   <Button onClick={step25}>Podekscytowany</Button>
                   <Button onClick={step2511}>Nie wiem</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step22">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step26, step27} }) => (
                <>
                  <Button onClick={step26}>Wstrząśnięty</Button>
                  <Button onClick={step27}>Skonsternowany</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step23">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step261, step271} }) => (
                <>
                  <Button onClick={step261}>Zakłopotany</Button>
                  <Button onClick={step271}>Rozczarowany</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step24">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step281, step291} }) => (
                <>
                  <Button onClick={step281}>Zatrwożony</Button>
                  <Button onClick={step291}>Zdziwiony</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step25">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step241, step251} }) => (
                <>
                  <Button onClick={step241}>Ochoczy</Button>
                  <Button onClick={step251}>Energiczny</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    {/*output słaby, zmęczony, rozkojarzony, senny */}
    <Step name="step26">
      <div>
      <Qn>
    <ZaskoczonyWstrząśnięty />
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
      
      <ZaskoczonySkonsternowany/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Wstecz</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>

 {/*output słaby, znudzony, apatyczny, obojętny */}
    <Step name="step261">
      <div>
      <Qn>
         <ZaskoczonyZakłopotany/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step271">
      <div>
      <Qn>
      
      <ZaskoczonyRozczarowany/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>



 {/*output słaby, zapracowany, pospieszany, pod presją */}
 <Step name="step281">
      <div>
      <Qn>
         <ZaskoczonyZatrwożony/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step291">
      <div>
      <Qn>
      
      <ZaskoczonyZdziwiony/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>



    {/*output słaby, zestresowany, tracący kontrolę, przytłoczony */}
 <Step name="step241">
      <div>
      <Qn>
         <ZaskoczonyOchoczy/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step251">
      <div>
      <Qn>
      
      <ZaskoczonyEnergiczny/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>
    <Step name="step2511">
    <div>
    <Qn>
    
    <ZaskoczonyNiewiem/>
     </Qn>
      <br />
      <Controls>
            {({ back, destinations: { } }) => (
              <>
               <Buttons>
                  <FormBtn onClick={back}>Back</FormBtn>
                  {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                </Buttons>
              </>
            )}
          </Controls>
    </div>
  </Step>

    {/*ZASKOCZONY WSZYSTKO KONIEC*/}

      {/*ZNIESMACZONY WSZYSTKO POCZĄTEK*/}

      <Step name="step31">
    <div>
            <Qn>A tak dokłaniej?</Qn>
            <Controls>
              {({ back, destinations: { step32, step33, step34, step35, step3511} }) => (
                <>
                <Button onClick={step32}>Nieprzychylny</Button>
                  <Button onClick={step33}>Rozczarowany</Button>
                  <Button onClick={step34}>Czujący się podle</Button>
                   <Button onClick={step35}>Stroniący</Button>
                   <Button onClick={step3511}>Nie wiem</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step32">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step36, step37} }) => (
                <>
                  <Button onClick={step36}>Niechętny</Button>
                  <Button onClick={step37}>Krytykancki</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step33">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step361, step371} }) => (
                <>
                  <Button onClick={step361}>Zbuntowany</Button>
                  <Button onClick={step371}>Antypatyczny</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step34">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step381, step391} }) => (
                <>
                  <Button onClick={step381}>Podburzony</Button>
                  <Button onClick={step391}>Obrzydzony</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step35">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step341, step351} }) => (
                <>
                  <Button onClick={step341}>Czujący odrazę</Button>
                  <Button onClick={step351}>Niepewny</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    {/*output słaby, zmęczony, rozkojarzony, senny */}
    <Step name="step36">
      <div>
      <Qn>
    <ZniesmaczonyNiechętny />
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step37">
      <div>
      <Qn>
      
      <ZniesmaczonyKrytykancki/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Wstecz</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>

 {/*output słaby, znudzony, apatyczny, obojętny */}
    <Step name="step361">
      <div>
      <Qn>
         <ZniesmaczonyZbuntowany/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step371">
      <div>
      <Qn>
      
      <ZniesmaczonyAntypatyczny/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>



 {/*output słaby, zapracowany, pospieszany, pod presją */}
 <Step name="step381">
      <div>
      <Qn>
         <ZniesmaczonyPodburzony/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step391">
      <div>
      <Qn>
      
      <ZniesmaczonyObrzydzony/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>



    {/*output słaby, zestresowany, tracący kontrolę, przytłoczony */}
 <Step name="step341">
      <div>
      <Qn>
         <ZniesmaczonyCzującyOdrazę/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step351">
      <div>
      <Qn>
      
      <ZniesmaczonyNiepewny />
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>
    <Step name="step3511">
    <div>
    <Qn>
    
    <ZniesmaczonyNiewiem/>
     </Qn>
      <br />
      <Controls>
            {({ back, destinations: { } }) => (
              <>
               <Buttons>
                  <FormBtn onClick={back}>Back</FormBtn>
                  {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                </Buttons>
              </>
            )}
          </Controls>
    </div>
  </Step>

      {/*ZNIESMACZONY WSZYSTKO KONIEC*/}
      
      {/* LĘKLIWY WSZYSTKO POCZĄTEK*/}
      <Step name="step41">
    <div>
            <Qn>A tak dokłaniej?</Qn>
            <Controls>
              {({ back, destinations: { step42, step43, step44, step45, step46, step47, step4711} }) => (
                <>
                <Button onClick={step42}>Przestraszony</Button>
                  <Button onClick={step43}>Niespokojny</Button>
                  <Button onClick={step44}>Niepewny</Button>
                   <Button onClick={step45}>Uległy</Button>
                   <Button onClick={step46}>Odrzucony</Button>
                   <Button onClick={step47}>Zastraszony</Button>
                    <Button onClick={step4711}>Nie wiem</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

     <Step name="step42">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step464, step474} }) => (
                <>
                  <Button onClick={step464}>Bezsilny</Button>
                  <Button onClick={step474}>Zastraszony</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step43">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step461, step471} }) => (
                <>
                  <Button onClick={step461}>Przytłoczony</Button>
                  <Button onClick={step471}>Zmartwiony</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step44">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step481, step491} }) => (
                <>
                  <Button onClick={step481}>Niewystarczający</Button>
                  <Button onClick={step491}>Podrzędny</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step45">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step441, step451} }) => (
                <>
                  <Button onClick={step441}>Bezwartościowy</Button>
                  <Button onClick={step451}>Nieistotny</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
   <Step name="step46">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step444, step445} }) => (
                <>
                  <Button onClick={step444}>Wyobcowany</Button>
                  <Button onClick={step445}>Niepasujący</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step47">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step446, step447} }) => (
                <>
                  <Button onClick={step446}>Nerwowy</Button>
                  <Button onClick={step447}>Zdemaskowany</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
         <LękliwyBezsilny />
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
      
      <LękliwyZastraszony />
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Wstecz</FormBtn>
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
         <LękliwyPrzytłoczony />
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
      
      <LękliwyZmartwiony />
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
         <LękliwyNiewystarczający/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
      
      <LękliwyPodrzędny/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
         <LękliwyBezwartościowy/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
      
      <LękliwyNieistotny />
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
    <LękliwyWyobcowany />
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
      
      <LękliwyNiepasujący/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Wstecz</FormBtn>
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
         <LękliwyNerwowy/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
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
      
      <LękliwyZdemaskowany/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>
    <Step name="step4711">
    <div>
    <Qn>
    
    <LękliwyNiewiem/>
     </Qn>
      <br />
      <Controls>
            {({ back, destinations: { } }) => (
              <>
               <Buttons>
                  <FormBtn onClick={back}>Back</FormBtn>
                  {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                </Buttons>
              </>
            )}
          </Controls>
    </div>
  </Step>

      {/*LĘKLIWY WSZYSTKO KONIEC*/}


      {/* SMUTNY WSZYSTKO POCZĄTEK*/}
      <Step name="step51">
    <div>
            <Qn>A tak dokłaniej?</Qn>
            <Controls>
              {({ back, destinations: { step52, step53, step54, step55, step56, step57, step5711} }) => (
                <>
                <Button onClick={step52}>Samotny</Button>
                  <Button onClick={step53}>Zraniony</Button>
                  <Button onClick={step54}>Zrozpaczony</Button>
                   <Button onClick={step55}>Winny</Button>
                   <Button onClick={step56}>Przygnębiony</Button>
                   <Button onClick={step57}>Zraniony</Button>
                   <Button onClick={step5711}>Nie wiem</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

     <Step name="step52">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step564, step574} }) => (
                <>
                  <Button onClick={step564}>Odizolowany</Button>
                  <Button onClick={step574}>Porzucony</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step53">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step561, step571} }) => (
                <>
                  <Button onClick={step561}>Prześladowany</Button>
                  <Button onClick={step571}>Słabowity</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step54">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step581, step591} }) => (
                <>
                  <Button onClick={step581}>W bólu, w żałobie</Button>
                  <Button onClick={step591}>Bezsilny</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step55">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step541, step551} }) => (
                <>
                  <Button onClick={step541}>Zawstydzony</Button>
                  <Button onClick={step551}>Skruszony</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
   <Step name="step56">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step544, step545} }) => (
                <>
                  <Button onClick={step544}>Wyczerpany</Button>
                  <Button onClick={step545}>Gorszy od innych</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step57">
    <div>
            <Qn>Co teraz czujesz?</Qn>
            <Controls>
              {({ back, destinations: { step546, step547} }) => (
                <>
                  <Button onClick={step546}>Rozczarowany</Button>
                  <Button onClick={step547}>Zlekceważony</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step564">
      <div>
      <Qn>
         <SmutnyOdizolowany />
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step574">
      <div>
      <Qn>
      
      <SmutnyPorzucony />
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Wstecz</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>

 {/*output słaby, znudzony, apatyczny, obojętny */}
    <Step name="step561">
      <div>
      <Qn>
         <SmutnyPrześladowany />
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step571">
      <div>
      <Qn>
      
      <SmutnySłabowity />
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>


 <Step name="step581">
      <div>
      <Qn>
         <SmutnyWbólu/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step591">
      <div>
      <Qn>
      
      <SmutnyBezsilny/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>



    {/*output słaby, zestresowany, tracący kontrolę, przytłoczony */}
 <Step name="step541">
      <div>
      <Qn>
         <SmutnyZawstydzony/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step551">
      <div>
      <Qn>
      
      <SmutnySkruszony />
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>



        
    <Step name="step544">
      <div>
      <Qn>
    <SmutnyWyczerpany />
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step545">
      <div>
      <Qn>
      
      <SmutnyGorszyodinnych/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Wstecz</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>

 {/*output słaby, znudzony, apatyczny, obojętny */}
    <Step name="step546">
      <div>
      <Qn>
         <SmutnyRozczarowany/>
   
        </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
     </div>
    </Step>
    <Step name="step547">
      <div>
      <Qn>
      
      <SmutnyZlekceważony/>
       </Qn>
        <br />
        <Controls>
              {({ back, destinations: { } }) => (
                <>
                 <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>
    <Step name="step5711">
    <div>
    <Qn>
    
    <SmutnyNiewiem/>
     </Qn>
      <br />
      <Controls>
            {({ back, destinations: { } }) => (
              <>
               <Buttons>
                  <FormBtn onClick={back}>Back</FormBtn>
                  {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                </Buttons>
              </>
            )}
          </Controls>
    </div>
  </Step>

      {/*SMUTNY WSZYSTKO KONIEC*/}




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





