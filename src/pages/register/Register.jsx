import React, {useState} from 'react';
import SignedupForm from './formularz/SignedupForm';
import SignedupFormSuccess from './formularz/SignedupFormSuccess';
import Login from '../login/Login';
import "./formularz/SignedupForm.css";

const Register =() =>{
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm =() =>{
    setFormIsSubmitted(true);
  }

return <div>

  {!formIsSubmitted ? <SignedupForm submitForm={submitForm}/> : <Login/>}
</div>

};

export default Register;
