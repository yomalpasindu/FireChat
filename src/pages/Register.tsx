import Add from "../images/select-avatar.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Fire Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
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
