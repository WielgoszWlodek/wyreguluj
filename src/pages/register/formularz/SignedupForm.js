import React, { useEffect, useState } from 'react';
import validation from './validation';
import './SignedupForm.css';
import axios from "axios";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const SignedupForm = ({ submitForm }) => {

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    
      

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",

    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })

    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
    
      try {
          const res = await axios.post("/auth/register", {
              ...values
          });
          console.log(res)
          !setErrors(validation(values)) && setDataIsCorrect(true);
      } catch (err) {
          setErrors(validation(values));
      }
  }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }

    }, [errors]);

    return (
        <div className='register'>
              <div className="pulsatorr">
  <span  className="a"></span>
  <span className="b" ></span>
  <span  className="c"></span>
  <span className="d" ></span>
  <span className="e" ></span>
    </div>
          
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center' style={{width:"320px"}}>
       <Image style={{width:"170px", height:"80px", marginLeft:"-10px", marginBottom:"-12px"}} src = 'logo.png'/>Rejestracja
      </Header>
     
      <Form size='large'>

        <Segment stacked>

          <Form.Input fluid
           icon='user' 
           iconPosition='left'
            placeholder='Nazwa użytkownika'
            name="username"
            value={values.username}
            onChange={handleChange}
             />
 {errors.username && <p className='error'>{errors.username}</p>}
<Form.Input fluid
           icon='mail' 
           iconPosition='left'
            placeholder='Adres e-mail'
            name="email"
            value={values.email}
            onChange={handleChange}
             />
{errors.email && <p className='error'>{errors.email}</p>}
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Hasło'
            type='password'
            name="password"
            value={values.password}
            onChange={handleChange}
          />
 {errors.password && <p className='error'>{errors.password}</p>}
          <Button onClick={handleFormSubmit} className="button-teal" color='teal' fluid size='large'>
            Zarejestruj się
          </Button>
        </Segment>
      </Form>
      <Message>
        Masz już konto?   <Link to={`/login`}>Zaloguj się </Link>
      </Message>
    </Grid.Column>
  </Grid>
   
        </div>
    )
}

export default SignedupForm
