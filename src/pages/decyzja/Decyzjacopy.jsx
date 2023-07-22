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
    step2: ['step3','step4', 'step5'],
    step3: ['step1'],
    step4: ['step1'],
    step5: ['step1'],
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
       <Qn>
      Jak się czujesz?
        </Qn>
        <br />
        <Controls>
              {({ destinations: { step2, step3 } }) => (
                <>
                  <OptionsContainer>
                    <Button onClick={() => setVisibleItem("injury")}>
                      Słaby
                    </Button>
                    <Button onClick={() => setVisibleItem("duration")}>
                      zaskoczony
                    </Button>
                    {(visibleItem === "injury") && (
                      <div>
                        <Qn>Duration of Symptoms </Qn>
                        <Button
                    onClick={(e) => {
                      setVisibleItem("duration");
                      createHighlight(e);
                    }}
                  />
                        <Button>4 to 6 months</Button>
                        
                      </div>
                    )}
                      {(visibleItem === "duration") && (
                      <div>
                        <Qn>Duration of Symptoms </Qn>
                     
                        <Button>12 months</Button>
                      </div>
                    )}
                  </OptionsContainer>
                  <Buttons>
                    {visibleItem === "injury" && (
                      <FormBtn onClick={step2}>Next</FormBtn>
                    )}
                    {visibleItem === "duration" && (
                      <FormBtn onClick={step3}>Next</FormBtn>
                    )}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>
    <Step name="step2">
      <div>
      <Qn>
        psychika 2
        </Qn>
        <br />
        {/*<Controls>
          {({ destinations: { step3, error } }) => (
            <div>
              <button onClick={error}>Go to error</button>
              <button onClick={step3}>Go to Step 3</button>
            </div>
          )}
          </Controls>*/}
          <Controls>
              {({ back, destinations: { step3,step4,step5 } }) => (
                <>
                  <Button onClick={() => setVisibleItem("nonSports")}>
                    Non Sports Injury
                  </Button>
                  <Button onClick={() => setVisibleItem("Sports")}>
                    Sports injury
                  </Button>
                  {visibleItem === "nonSports" && (
                    <div>
                      <Qn>
                        What activity were you involved in when you suffered
                        your injury?
                      </Qn>
                      <Button onClick={step5}>Dance</Button>
                      <Button onClick={step4}> Assault</Button>
                      <Button onClick={step3}>I had a Fall</Button>
                    </div>
                  )}
                  {visibleItem === "Sports" && (
                    <div>
                      <Qn>
                        What sport were you involved in when you suffered your
                        injury?
                      </Qn>
                      <Button onClick={step3}>Basketball</Button>
                      <Button onClick={step3}>Cricket</Button>
                      <Button onClick={step3}>Baseball</Button>
                    </div>
                  )}
                  <Buttons>
                    <FormBtn onClick={back}>Back</FormBtn>
                    {/*<FormBtn onClick={step3}>Next</FormBtn>*/}
                  </Buttons>
                </>
              )}
            </Controls>
      </div>
    </Step>
    <Step name="step3">
      <div>
      <Qn>
        I am step 3
        </Qn>
        <br />
        {/*<Controls>
          {({ destinations: { step1 } }) => (
            <button onClick={step1}>Go to Step 1</button>
          )}
          </Controls>*/}
      </div>
    </Step>
    <Step name="step4">
      <div>
      <Qn>
      Zostałes aoltowany
        </Qn>
        <br />
        <Controls>
          {({ destinations: { step1 } }) => (
           <Button onClick={step1}>Zaczni raz jeszcze</Button>
          )}
          </Controls>
      </div>
    </Step>
    <Step name="step5">
      <div>
      <Qn>
      Tańcowały dwa michały
        </Qn>
        <br />
      <Controls>
          {({ destinations: { step1 } }) => (
            <Button onClick={step1}>Zaczni raz jeszcze</Button>
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
