export function MyCheckBox(props) {
  const { label, id } = props;
  return (
    <div class="form-check mb-3">
      <input class="form-check-input" id={id} type="checkbox" value="" />
      <label class="form-check-label">{label}</label>
    </div>
  );
}
