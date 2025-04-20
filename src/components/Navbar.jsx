import { BiSearch } from "react-icons/bi";
import Logo from "../imgs/logo.png";
import "../index.css";
const Navbar = ({ search }) => {
  const onSearch = (word) => {
    search(word);
  };
  return (
    <div className="nav">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={Logo} alt="logo" />
          </div>
          <div className="col-10">
            <div className="search d-flex align-items-center">
              <BiSearch className="icon" />
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                placeholder="search here..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
