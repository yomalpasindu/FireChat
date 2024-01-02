import { FieldValues, useForm } from "react-hook-form";
import Add from "../images/select-avatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent } from "react";
import { auth } from "../Firebase";

interface RegisterProps{
  email:string;
  password:string;
}

const Register = () => {

  const {register,handleSubmit} = useForm();

  const onSubmit=(data:FieldValues)=>{
    console.log(data);

    createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Fire Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Display Name"></input>
          <input type="email" placeholder="Email" {...register("email")}></input>
          <input type="password" placeholder="Password" {...register("password")}></input>
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add}></img>
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
