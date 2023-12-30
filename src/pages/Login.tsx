const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Fire Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <button>Sign in</button>
        </form>
        <p>Don't you have an account? Register</p>
      </div>
    </div>
  );
};

export default Register;
