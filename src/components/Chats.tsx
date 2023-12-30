import ChatUser from "../images/propic.jpg";

const Chats = () => {
  return (
    <>
      <div className="chats">
        <img src={ChatUser} alt="" />
        <div className="chatInfo">
          <span>Yomal</span>
          <p>hello good morning!</p>
        </div>
      </div>
    </>
  );
};

export default Chats;
