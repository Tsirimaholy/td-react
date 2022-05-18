export function CollapsableNav(props) {
  const { children } = props;
  return (
    <div
      className="collapse"
      id="collapseLayouts"
      aria-labelledby="headingOne"
      data-bs-parent="#sidenavAccordion"
    >
      <nav className="sb-sidenav-menu-nested nav">{children}</nav>
    </div>
  );
}
