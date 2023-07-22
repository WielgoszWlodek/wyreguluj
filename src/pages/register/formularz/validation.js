

const validation = (values) => {
    let errors={};
    if(!values.username){
        errors.username= "Nazwa jest wymagana."
    }

    if(!values.email){
        errors.email= "Email jest wymagany."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email ="Email is błędny."
    }
    if(!values.password){
        errors.password= "Hasło jest wymagane."
    }else if (values.password.length <5 ){
        errors.password = "Hasło musi być dłuższe niż 5 znaków."
    }
  return errors;
}

export default validation
