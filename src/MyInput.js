export function MyInput(props) {
  const {type,label,id}=props;
  return (
    <div class="form-floating mb-3">
      <input
        class="form-control"
        id={id}
        type={type}
        placeholder="name@example.com" />
      <label >{label}</label>
    </div>
  );
}
