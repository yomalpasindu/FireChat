import SearchedUser from "../images/propic.jpg";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user"></input>
      </div>
      <div className="userChat">
        <img src={SearchedUser}></img>
        <div className="userChatInfo">
          <span>Yomal</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
