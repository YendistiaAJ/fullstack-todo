import AppLogo from "../../../assets/app-logo.png";
import Avatar from "../../../assets/avatar-default.png";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

function Header() {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <img src={AppLogo} alt="App Logo" />
          My Todo List
        </li>
        <li>
          <div className="user-menu-trigger">
            <img
              src={Avatar}
              alt="User Profile Picture"
              onClick={() => setShowDropdownMenu(!showDropdownMenu)}
            />
            <DropdownMenu showMenu={showDropdownMenu} />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
