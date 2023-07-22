import React, { useEffect, useState } from 'react';
import validation from './validation';
import './SignedupForm.css';
import axios from "axios";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
            res.data &&  setDataIsCorrect(true);
        } catch (err) {
            setErrors(validation(values));
        }
        setErrors(validation(values));
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }

    }, [errors]);

    return (
        <div className='register'>
            <div className='app-wrapper'>
                <div className="group">
                    <div>
                        <h2 className='title'>Stwórz konto</h2>
                    </div>

                    <form className='form-wrapper'>
                        <div className="fullname">
                            <p className="label">Nazwa</p>
                            <input type="text" className='input1'
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                            />

                            {errors.username && <p className='error'>{errors.username}</p>}
                            {/* {errors.fullname ? <label>{errors.fullname}</label>: <label>Podaj nazwę</label>} */}
                        </div>

                        <div className="email">
                            <p className="label">Email</p>
                            <input type="email" className="input1"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />

                            {errors.email && <p className='error'>{errors.email}</p>}
                            {/*{errors.email ? <label>{errors.email}</label>: <label>Podaj email</label>}*/}
                        </div>
                        <div className="password">
                            <p className="label">Hasło</p>
                            <input type="password" className='input1'
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />

                            {errors.password && <p className='error'>{errors.password}</p>}
                            {/* {errors.password? <label>{errors.password}</label>: <label>Podaj hasło</label>}*/}
                        </div>
                        <div>
                            <button className='submit' onClick={handleFormSubmit}> Zarejestruj</button>
                        </div>

                    </form>
                </div>
            </div>

{/*
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Stwórz nowe konto użytkownika
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
           icon='user' 
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
            placeholder='Password'
            type='password'
            name="password"
            value={values.password}
            onChange={handleChange}
          />
 {errors.password && <p className='error'>{errors.password}</p>}
          <Button onClick={handleFormSubmit} color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
    */}
        </div>
    )
}

export default SignedupForm
