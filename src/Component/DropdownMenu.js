export function DropDownMenu(props) {
  const {label1,label2,label3}=props;
  return (<ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-user fa-fw"></i>
      </a>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdown"
      >
        <li>
          <a className="dropdown-item" href="#">
            {label1}
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            {label2}
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            {label3}
          </a>
        </li>
      </ul>
    </li>
  </ul>);
}
