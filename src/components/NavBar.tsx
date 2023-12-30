import Propic from "../images/propic.jpg";

const NavBar = () => {
  return (
    <div className="navbar">
      <span className="logo">Fire Chat</span>
      <div className="user">
        <img src={Propic} alt="" />
        <span>Yomal Pasindu</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
