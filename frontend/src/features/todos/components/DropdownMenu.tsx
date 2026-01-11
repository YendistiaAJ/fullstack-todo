type Props = {
  showMenu: boolean;
};

function DropdownMenu({ showMenu }: Props) {
  if (!showMenu) return null;

  return (
    <div className="dropdown-menu">
      <ul>
        <li className="dropdown-item">
          <a href="#">Sign Out</a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
