export function SandwichButton(props) {
  const {id,href} = props;
  return (
    <button
      className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
      id={id}
      href={href}
    >
      <i className="fas fa-bars"></i>
    </button>
  );
}
