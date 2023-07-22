import React , { useContext, useState } from "react";
import "./write.css";
import { Controls, Step, Wizard } from "react-decision-tree-flow";
import styled from "styled-components";
import { useHistory } from 'react-router';
import axios from "axios";
import { Context } from "../../context/Context";

import Lękliwy from "../uczucia/lękliwy/Lękliwy";
import Słaby from "../uczucia/słaby/Słaby"
import Rozgniewany from "../uczucia/rozgniewany/Rozgniewany"
import Zniesmaczony from "../uczucia/zniesmaczony/Zniesmaczony";
import Szczęśliwy from "../uczucia/szczęśliwy/Szczęśliwy";
import Smutny from "../uczucia/smutny/Smutny";
import Zaskoczony from "../uczucia/zaskoczony/Zaskoczony";




import SłabySenny from "../uczucia/słaby/SłabySenny";
import SłabyRozkojarzony from "../uczucia/słaby/SłabyRozkojarzony";
import SłabyObojętny from "../uczucia/słaby/SłabyObojętny";
import SłabyApatyczny from "../uczucia/słaby/SłabyApatyczny"
import SłabyPospieszany from "../uczucia/słaby/SłabyPospieszany";
import SłabyPodpresją from "../uczucia/słaby/SłabyPodpresją";
import SłabyTracącyKontrolę from "../uczucia/słaby/SłabyTracącyKontrolę";
import SłabyPrzytłoczony from "../uczucia/słaby/SłabyPrzytłoczony";
import SłabyNiewiem from "../uczucia/słaby/SłabyNiewiem"; 


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

import SzczęśliwyZuchwały from "../uczucia/szczęśliwy/SzczęśliwyZuchwały";
import SzczęśliwyPobudzony from "../uczucia/szczęśliwy/SzczęśliwyPobudzony";
import SzczęśliwyWolny from "../uczucia/szczęśliwy/SzczęśliwyWolny";
import SzczęśliwyWesoły from "../uczucia/szczęśliwy/SzczęśliwyWesoły";
import SzczęśliwyZaciekawiony from "../uczucia/szczęśliwy/SzczęśliwyZaciekawiony";
import SzczęśliwyDociekliwy from "../uczucia/szczęśliwy/SzczęśliwyDociekliwy";
import SzczęśliwyWażny from "../uczucia/szczęśliwy/SzczęśliwyWażny";
import SzczęśliwyPewnysiebie from "../uczucia/szczęśliwy/SzczęśliwyPewnysiebie";
import SzczęśliwySzanowany from "../uczucia/szczęśliwy/SzczęśliwySzanowany";
import SzczęśliwyDoceniony from "../uczucia/szczęśliwy/SzczęśliwyDoceniony";
import SzczęśliwyOdważny from "../uczucia/szczęśliwy/SzczęśliwyOdważny";
import SzczęśliwyKreatywny from "../uczucia/szczęśliwy/SzczęśliwyKreatywny";
import SzczęśliwyKochający from "../uczucia/szczęśliwy/SzczęśliwyKochający";
import SzczęśliwyWdzięczny from "../uczucia/szczęśliwy/SzczęśliwyWdzięczny";
import SzczęśliwyCzuły from "../uczucia/szczęśliwy/SzczęśliwyCzuły";
import SzczęśliwyFiglarny from "../uczucia/szczęśliwy/SzczęśliwyFiglarny";
import SzczęśliwyPełennadziei from "../uczucia/szczęśliwy/SzczęśliwyPełennadziei";
import SzczęśliwyZainspirowany from "../uczucia/szczęśliwy/SzczęśliwyZainspirowany";
import SzczęśliwyNiewiem from "../uczucia/szczęśliwy/SzczęśliwyNiewiem";

import RozgniewanyOburzony from "../uczucia/rozgniewany/RozgniewanyOburzony";
import RozgniewanyOśmieszony from "../uczucia/rozgniewany/RozgniewanyOśmieszony";
import RozgniewanyPodejrzliwy from "../uczucia/rozgniewany/RozgniewanyPodejrzliwy";
import RozgniewanyPoirytowany from "../uczucia/rozgniewany/RozgniewanyPoirytowany";
import RozgniewanySarkastyczny from "../uczucia/rozgniewany/RozgniewanySarkastyczny";
import RozgniewanySceptyczny from "../uczucia/rozgniewany/RozgniewanySceptyczny";
import RozgniewanySprowokowany from "../uczucia/rozgniewany/RozgniewanySprowokowany";
import RozgniewanyUrażony from "../uczucia/rozgniewany/RozgniewanyUrażony";
import RozgniewanyWrogonastawiony from "../uczucia/rozgniewany/RozgniewanyWrogonastawiony";
import RozgniewanyZamkniętywsobie from "../uczucia/rozgniewany/RozgniewanyZamkniętywsobie";
import RozgniewanyZazdrosny from "../uczucia/rozgniewany/RozgniewanyZazdrosny";
import RozgniewanyZbeszczeszczony from "../uczucia/rozgniewany/RozgniewanyZbeszczeszczony";
import RozgniewanyZdradzony from "../uczucia/rozgniewany/RozgniewanyZdradzony";
import RozgniewanyZgorszony from "../uczucia/rozgniewany/RozgniewanyZgorszony";
import RozgniewanyZlekceważony from "../uczucia/rozgniewany/RozgniewanyZlekceważony";
import RozgniewanyNiepewny from "../uczucia/rozgniewany/RozgniewanyNiepewny";
import RozgniewanyNiewiem from "../uczucia/rozgniewany/RozgniewanyNiewiem";


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
font-size: 1.75rem;
font-weight: 600;
justify-content: center;
line-height: 0.75rem;
padding: .75rem 1.65rem;
margin-bottom: 10px;


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


    step61: ['step62', 'step63', 'step64','step65', 'step66','step67','step68', 'step69','step70', 'step6711'],//zmęczony zestresowany, zapracowany, 
    
    step62: ['step664', 'step674'],// słaby 13- wstrząśnięty, 17- skonsternowany
    step63: ['step661', 'step671'],//słaby 13- znudzony, 161 -apatyczny, 171- obojętny
    step64: ['step681', 'step691'],// słaby 14-- zapracowany, 181-pospieszany,191  pod presją
    step65: ['step641', 'step651'],// słaby 14-- zestresowany, 181-pospieszany,191  pod presją
    step66: ['step644', 'step645'], // słaby 13- wstrząśnięty, 17- skonsternowany
    step67: ['step646', 'step647'], //słaby 13- znudzony, 161 -apatyczny, 171- obojętny
    step68: ['step6411', 'step6511'],// słaby 14-- zestresowany, 181-pospieszany,191  pod presją
    step69: ['step6441', 'step6451'], // słaby 13- wstrząśnięty, 17- skonsternowany
    step70: ['step6461', 'step6471'], //słaby 13- znudzony, 161 -apatyczny, 171- obojętny

    step71: ['step72', 'step73', 'step74','step75', 'step76','step77','step78', 'step79', 'step7711'],//zmęczony zestresowany, zapracowany, 
    
    step72: ['step764', 'step774'],// słaby 13- wstrząśnięty, 17- skonsternowany
    step73: ['step761', 'step771'],//słaby 13- znudzony, 161 -apatyczny, 171- obojętny
    step74: ['step781', 'step791'],// słaby 14-- zapracowany, 181-pospieszany,191  pod presją
    step75: ['step741', 'step751'],// słaby 14-- zestresowany, 181-pospieszany,191  pod presją
    step76: ['step744', 'step745'], // słaby 13- wstrząśnięty, 17- skonsternowany
    step77: ['step746', 'step747'], //słaby 13- znudzony, 161 -apatyczny, 171- obojętny
    step78: ['step7411', 'step7511'],// słaby 14-- zestresowany, 181-pospieszany,191  pod presją
    step79: ['step7441', 'step7451'], // słaby 13- wstrząśnięty, 17- skonsternowany
   

    
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

        
    step664: [],//output Rozkojarzony
    step674: [], //output Senny
    step661: [], //outpu Zakłopotany
    step671: [], //output Rozczarowany
    step681: [], //outpu Pośpieszany
    step691: [], //output Pod presją
    step641: [],//output tracący kontrolę
    step651: [], //output przytłoczony
     step644: [], //outpu Pośpieszany
    step645: [], //output Pod presją
    step646: [],//output tracący kontrolę
    step647: [], //output przytłoczony
    step6411: [],//output tracący kontrolę
    step6511: [], //output przytłoczony
     step6441: [], //outpu Pośpieszany
    step6451: [], //output Pod presją
    step6461: [],//output tracący kontrolę
    step6471: [], //output przytłoczony

    step6711: [], //output przytłoczony

    step764: [],//output Rozkojarzony
    step774: [], //output Senny
    step761: [], //outpu Zakłopotany
    step771: [], //output Rozczarowany
    step781: [], //outpu Pośpieszany
    step791: [], //output Pod presją
    step741: [],//output tracący kontrolę
    step751: [], //output przytłoczony
     step744: [], //outpu Pośpieszany
    step745: [], //output Pod presją
    step746: [],//output tracący kontrolę
    step747: [], //output przytłoczony
    step7411: [],//output tracący kontrolę
    step7511: [], //output przytłoczony
     step7441: [], //outpu Pośpieszany
    step7451: [], //output Pod presją
    

    step7711: [], //output przytłoczony

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
      <div>
            <Qn1>Jak się teraz czujesz?</Qn1>
       </div>     
            <Controls>
              {({ back, destinations: { step11, step21, step31, step41, step51, step61, step71} }) => (
                <>
                  
                  <button className="button-53" onClick={step11} role="button">Słaby</button>
                  <button className="button-54"  onClick={step71} role="button">Rozgniewany</button>
                  <button className="button-55"  onClick={step31} role="button">Zniesmaczony</button>
                  <button className="button-56"  onClick={step41} role="button">Lękliwy</button> 
                  <button className="button-58"  onClick={step61} role="button">Szczęśliwy</button>
                  <button className="button-57"  onClick={step51} role="button">Smutny</button>
                  <button className="button-59"  onClick={step21} role="button">Zaskoczony</button>
                  
            
                </>
              )}
            </Controls>
            </div>
          </Step>


{/*SŁABY WSZYSTKO*/}


    <Step name="step11">
    <div>
            <Qn1>
            <Słaby/>
            </Qn1>
            <Controls>
              {({ back, destinations: { step12, step13, step14, step15, step1511} }) => (
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
            <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step16, step17} }) => (
                <>
                  <button className="button-53" onClick={step16} role="button">Rozkojarzony</button>
                  <button className="button-53" onClick={step17} role="button">Senny</button>
                  
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step161, step171} }) => (
                <>
                  
                  <button className="button-53" onClick={step161} role="button">Apatyczny</button>
                  <button className="button-53" onClick={step171} role="button">Obojętny</button>
                  
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step181, step191} }) => (
                <>
                   <button className="button-53" onClick={step181} role="button">Pośpieszany</button>
                  <button className="button-53" onClick={step191} role="button">Pod presją</button>
                  
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
            <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step141, step151} }) => (
                <>
                  <button className="button-53" onClick={step141} role="button">Tracący kontrolę</button>
                  <button className="button-53" onClick={step151} role="button">Przytłoczony</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
      
      <SłabySenny/>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                  <FormBtn onClick={back}>Wróć</FormBtn>
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
            <Qn1><Zaskoczony/></Qn1>
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step26, step27} }) => (
                <>
                  
                  <button className="button-59" onClick={step26} role="button">Wstrząśnięty</button>
                  <button className="button-59" onClick={step27} role="button">Skonsternowany</button>
                  
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step261, step271} }) => (
                <>
                  

                  <button className="button-59" onClick={step261} role="button">Zakłopotany</button>
                  <button className="button-59" onClick={step271} role="button">Rozczarowany</button>
                  
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step281, step291} }) => (
                <>
                

                  <button className="button-59" onClick={step281} role="button">Zatrwożony</button>
                  <button className="button-59" onClick={step291} role="button">Zdziwiony</button>
                  
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step241, step251} }) => (
                <>
                  
                  <button className="button-59" onClick={step241} role="button">Ochoczy</button>
                  <button className="button-59" onClick={step251} role="button">Energiczny</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
      
      <ZaskoczonySkonsternowany/>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
    <Qn1><Zniesmaczony/></Qn1>
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
    <Step name="step32">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step36, step37} }) => (
                <>
                  
                  <button className="button-551" onClick={step36} role="button">Niechętny</button>
                  <button className="button-551" onClick={step37} role="button">Krytykancki</button>
                  
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step361, step371} }) => (
                <>
                 
                  <button className="button-551" onClick={step361} role="button">Zbuntowany</button>
                  <button className="button-551" onClick={step371} role="button">Antypatyczny</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step34">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step381, step391} }) => (
                <>
                  
                  <button className="button-551" onClick={step381} role="button">Podburzony</button>
                  <button className="button-551" onClick={step391} role="button">Obrzydzony</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step35">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step341, step351} }) => (
                <>
                
                  <button className="button-551" onClick={step341} role="button">Czujący odrazę</button>
                  <button className="button-551" onClick={step351} role="button">Niepewny</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                  <FormBtn onClick={back}>Wróć</FormBtn>
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
      <Qn>
         <Lękliwy/>
   
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

 

     <Step name="step42">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step464, step474} }) => (
                <>
                 
                  <button className="button-56" onClick={step464} role="button">Bezislny</button>
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step461, step471} }) => (
                <>
                 
                  <button className="button-56" onClick={step461} role="button">Przytłoczony</button>
                  <button className="button-56" onClick={step471} role="button">Zmartwiiony</button>
                  
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step481, step491} }) => (
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step441, step451} }) => (
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step444, step445} }) => (
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step446, step447} }) => (
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
    <Step name="step4711">
    <div>
    <Qn>
    
   
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


      {/* SMUTNY WSZYSTKO POCZĄTEK*/}
      <Step name="step51">
    <div>
    <Qn1><Smutny/></Qn1>
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

     <Step name="step52">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step564, step574} }) => (
                <>
                 
                  <button className="button-57" onClick={step564} role="button">Odizolowany</button>
                  <button className="button-57" onClick={step574} role="button">Porzucony</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step53">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step561, step571} }) => (
                <>
                  
                  <button className="button-57" onClick={step561} role="button">Prześladowany</button>
                  <button className="button-57" onClick={step571} role="button">Słabowity</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step54">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step581, step591} }) => (
                <>
                  
                  <button className="button-57" onClick={step581} role="button">W żałobie</button>
                  <button className="button-57" onClick={step591} role="button">Bezsilny</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step55">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step541, step551} }) => (
                <>
                 
                  <button className="button-57" onClick={step541} role="button">Zawstydzony</button>
                  <button className="button-57" onClick={step551} role="button">Skruszony</button>
                  
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
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step544, step545} }) => (
                <>
                  
                  <button className="button-57" onClick={step544} role="button">Wyczerpany</button>
                  <button className="button-57" onClick={step545} role="button">Gorszy od innych</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step57">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step546, step547} }) => (
                <>
               
                  <button className="button-57" onClick={step546} role="button">Rozczarowany</button>
                  <button className="button-57" onClick={step547} role="button">Zlekceważony</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                    <FormBtn onClick={back}>Wróć</FormBtn>
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
                  <FormBtn onClick={back}>Wróć</FormBtn>
                  {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                </Buttons>
              </>
            )}
          </Controls>
    </div>
  </Step>

      {/*SMUTNY WSZYSTKO KONIEC*/}

      

      {/* SZCZĘŚLIWY WSZYSTKO POCZĄTEK*/}
      <Step name="step61">
    <div>
    <Qn1><Szczęśliwy/></Qn1>
            <Controls>
              {({ back, destinations: {} }) => (
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

     <Step name="step62">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step664, step674} }) => (
                <>
                 

                  <button className="button-581" onClick={step664} role="button">Zuchwały</button>
                  <button className="button-581" onClick={step674} role="button">Pobudzony</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step63">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step661, step671} }) => (
                <>
                 
                  <button className="button-581" onClick={step661} role="button">Wolny</button>
                  <button className="button-581" onClick={step671} role="button">Wesoły</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step64">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step681, step691} }) => (
                <>
                  
                  <button className="button-581" onClick={step681} role="button">Zaciekawiony</button>
                  <button className="button-581" onClick={step691} role="button">Dociekliwy</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step65">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step641, step651} }) => (
                <>
                
                  <button className="button-581" onClick={step641} role="button">Ważny</button>
                  <button className="button-581" onClick={step651} role="button">Pewny siebie</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
   <Step name="step66">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step644, step645} }) => (
                <>
                
                  <button className="button-581" onClick={step644} role="button">Szanowany</button>
                  <button className="button-581" onClick={step645} role="button">Doceniony</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step67">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step646, step647} }) => (
                <>
              
                  <button className="button-581" onClick={step646} role="button">Odważny</button>
                  <button className="button-581" onClick={step647} role="button">Kreatywny</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>



    <Step name="step68">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step6411, step6511} }) => (
                <>
                  
                  <button className="button-581" onClick={step6411} role="button">Kochający</button>
                  <button className="button-581" onClick={step6511} role="button">Wdzięczny</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step69">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step6441, step6451} }) => (
                <>
                 
                  <button className="button-581" onClick={step6441} role="button">Czuły</button>
                  <button className="button-581" onClick={step6451} role="button">Figlarny</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step70">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step6461, step6471} }) => (
                <>
                
                  <button className="button-581" onClick={step6461} role="button">Pełen nadziei</button>
                  <button className="button-581" onClick={step6471} role="button">Zainspirowany</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step664">
      <div>
      <Qn>
         <SzczęśliwyZuchwały />
   
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
    <Step name="step674">
      <div>
      <Qn>
      
      <SzczęśliwyPobudzony />
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
    <Step name="step661">
      <div>
      <Qn>
         <SzczęśliwyWolny />
   
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
    <Step name="step671">
      <div>
      <Qn>
      
      <SzczęśliwyWesoły />
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


 <Step name="step681">
      <div>
      <Qn>
         <SzczęśliwyZaciekawiony/>
   
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
    <Step name="step691">
      <div>
      <Qn>
      
      <SzczęśliwyDociekliwy/>
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
 <Step name="step641">
      <div>
      <Qn>
         <SzczęśliwyWażny/>
   
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
    <Step name="step651">
      <div>
      <Qn>
      
      <SzczęśliwyPewnysiebie />
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



        
    <Step name="step644">
      <div>
      <Qn>
    <SzczęśliwySzanowany />
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
    <Step name="step645">
      <div>
      <Qn>
      
      <SzczęśliwyDoceniony/>
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
    <Step name="step646">
      <div>
      <Qn>
         <SzczęśliwyOdważny/>
   
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
    <Step name="step647">
      <div>
      <Qn>
      
      <SzczęśliwyKreatywny/>
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

    <Step name="step6411">
      <div>
      <Qn>
      
      <SzczęśliwyKochający/>
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
    <Step name="step6511">
      <div>
      <Qn>
      
      <SzczęśliwyWdzięczny/>
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

    <Step name="step6441">
      <div>
      <Qn>
      <SzczęśliwyCzuły />
      
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
    <Step name="step6451">
      <div>
      <Qn>
      
      <SzczęśliwyFiglarny/>
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
   
    <Step name="step6461">
      <div>
      <Qn>
      
      <SzczęśliwyPełennadziei/>
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
    <Step name="step6471">
      <div>
      <Qn>
      
      <SzczęśliwyZainspirowany/>
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
   



    <Step name="step6711">
    <div>
    <Qn>
    
    <SzczęśliwyNiewiem/>
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

      {/*SZCZĘŚLIWY WSZYSTKO KONIEC*/}


    

      

      {/* ROZGNIEWANY WSZYSTKO POCZĄTEK*/}
      <Step name="step71">
    <div>
    <Qn1><Rozgniewany/></Qn1>
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

     <Step name="step72">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step764, step774} }) => (
                <>
               
                  <button className="button-541" onClick={step764} role="button">Zdradzony</button>
                  <button className="button-541" onClick={step774} role="button">Urażony</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step73">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step761, step771} }) => (
                <>
                  
                  <button className="button-541" onClick={step761} role="button">Zlekceważony</button>
                  <button className="button-541" onClick={step771} role="button">Ośmieszony</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step74">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step781, step791} }) => (
                <>
                  <button className="button-541" onClick={step781} role="button">Zgorszony</button>
                  <button className="button-541" onClick={step791} role="button">Zbeszczeszczony</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step75">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step741, step751} }) => (
                <>
                
                  <button className="button-541" onClick={step741} role="button">Niepewny</button>
                  <button className="button-541" onClick={step751} role="button">Zazdrosny</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
   <Step name="step76">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step744, step745} }) => (
                <>
                 
                  <button className="button-541" onClick={step744} role="button">Wrogo nastawiony</button>
                  <button className="button-541" onClick={step745} role="button">Sprowokowany</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>

    <Step name="step77">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step746, step747} }) => (
                <>
                  
                  <button className="button-541" onClick={step746} role="button">Oburzony</button>
                  <button className="button-541" onClick={step747} role="button">Poirytowany</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>



    <Step name="step78">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step7411, step7511} }) => (
                <>
                
                  <button className="button-541" onClick={step7411} role="button">Zamknięty w sobie</button>
                  <button className="button-541" onClick={step7511} role="button">Podejrzliwy</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step79">
    <div>
    <Qn1>A tak dokładniej?</Qn1>
            <Controls>
              {({ back, destinations: { step7441, step7451} }) => (
                <>
           
                  <button className="button-541" onClick={step7441} role="button">Sceptyczny</button>
                  <button className="button-541" onClick={step7451} role="button">Sarkastyczny</button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Wróć</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
 

    <Step name="step764">
      <div>
      <Qn>
         <RozgniewanyZdradzony />
   
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
    <Step name="step774">
      <div>
      <Qn>
      
      <RozgniewanyUrażony />
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
    <Step name="step761">
      <div>
      <Qn>
         <RozgniewanyZlekceważony />
   
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
    <Step name="step771">
      <div>
      <Qn>
      
      <RozgniewanyOśmieszony />
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


 <Step name="step781">
      <div>
      <Qn>
         <RozgniewanyZgorszony />
   
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
    <Step name="step791">
      <div>
      <Qn>
      <RozgniewanyZbeszczeszczony />
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
 <Step name="step741">
      <div>
      <Qn>
         <RozgniewanyNiepewny/>
   
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
    <Step name="step751">
      <div>
      <Qn>
      <RozgniewanyZazdrosny />
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



        
    <Step name="step744">
      <div>
      <Qn>
      <RozgniewanyWrogonastawiony />
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
    <Step name="step745">
      <div>
      <Qn>
      
      <RozgniewanySprowokowany />
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
    <Step name="step746">
      <div>
      <Qn>
      <RozgniewanyOburzony />
   
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
    <Step name="step747">
      <div>
      <Qn>
      
      <RozgniewanyPoirytowany/>
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

    <Step name="step7411">
      <div>
      <Qn>
      
      <RozgniewanyZamkniętywsobie />
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
    <Step name="step7511">
      <div>
      <Qn>
      
      <RozgniewanyPodejrzliwy />
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

    <Step name="step7441">
      <div>
      <Qn>
      <RozgniewanySceptyczny/>
      
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
    <Step name="step7451">
      <div>
      <Qn>
      
      <RozgniewanySarkastyczny />
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
   
 
   



    <Step name="step7711">
    <div>
    <Qn>
    
    <RozgniewanyNiewiem/>
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





