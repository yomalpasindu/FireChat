import Pic from "../images/select-avatar.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Yomal</span>
        <div className="chatIcons">
          <img src={Pic} alt="" />
          <img src={Pic} alt="" />
          <img src={Pic} alt="" />
        </div>
      </div>

      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
