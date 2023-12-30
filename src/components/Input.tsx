import Attach from "../images/select-avatar.png";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something..."></input>
      <div className="inputIcons">
        <img src={Attach}></img>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
