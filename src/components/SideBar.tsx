import NavBar from "./NavBar";
import Search from "./Search";
import Chats from "./Chats";

const SideBar = () => {
  return (
    <div className="sidebar">
      <NavBar></NavBar>
      <Search></Search>
      <Chats></Chats>
    </div>
  );
};

export default SideBar;
