import React , {useState, useEffect} from "react";
import validation from "./validation";


const [errors, setErrors] = useState({});
const [dataIsCorrect, setDataIsCorrect] = useState(false);

const [values, setValues] = useState({
fullname:"",
email:"",
password:"",

})

const handleChange = (event)=>{
setValues({
...values,
[event.target.name ]:event.target.value,
})

};

const handleFormSubmit =(event) =>{
event.preventDefault();
setErrors(validation(values));
setDataIsCorrect(true);
}


useEffect(()=>{
if(Object.keys(errors).length === 0 && dataIsCorrect)
{
submitForm(true);
}

}, [errors]);