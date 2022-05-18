export function NavLink(props) {
  const {label}=props;
    return (
    <a className="nav-link" href="layout-static.html">
      {label}
    </a>
  );
}
