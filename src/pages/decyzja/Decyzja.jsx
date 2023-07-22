import React , {useState} from "react"
import { Controls, Step, Wizard } from "react-decision-tree-flow";
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
    flex-direction: row;
  }
`;
const Qn = styled.legend``;

const Button = styled.button`
  background-color: gray;
  color: aliceblue;
  width: 200px;
  height: 60px;
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
  height: 50px;
  font-size: 16px;
  color: #fff;
  background-color: #107896;
  border: none;
  margin-top: 15px;
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
  step1: ['step2', 'step3'],
    step2: ['step4', 'step5', 'step6','step7'],
    step7: ['step8', 'step9'],
    step4: ['step1'],
    step5: ['step1'],
    step8: [],
    step9: [],
    error: ['step2'],
  };




function Decyzja() {
  
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
    <Container>
    <McqContainer>
    <Wizard tree={tree} first="step1">
    <Step name="step1">
      <div>
            <Qn>Jak się teraz czujesz?</Qn>
            
            <Controls>
              {({ back, destinations: { step2, step3} }) => (
                <>
                  <Button onClick={step2}>Słaby</Button>
                  <Button onClick={step3}>Lękliwy</Button>
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
          </Step>

    <Step name="step2">
    <div>
            <Qn>A tak dokłaniej?</Qn>
            
            <Controls>
              {({ back, destinations: { step4, step5, step6, step7} }) => (
                <>
                  <Button onClick={step4}>Znudzony</Button>
                  <Button onClick={step5}>Zapracowany</Button>
                   <Button onClick={step6}>Zestresowany</Button>
                  <Button onClick={step7}>Zmęczony</Button>z
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step7">
    <div>
            <Qn>Co czuesz?</Qn>
            
            <Controls>
              {({ back, destinations: { step8, step9} }) => (
                <>
                  <Button onClick={step8}>Rozkojarzony</Button>
                  <Button onClick={step9}>Senny</Button>
                  
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step4}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
            </div>
    </Step>
    <Step name="step8">
      <div>
      <Qn>
     Jesteś rozkojarzony
        </Qn>
        <br />
     
      </div>
    </Step>
    <Step name="step9">
      <div>
      <Qn>
     Jesteś senny
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
  );
}

export default Decyzja;
