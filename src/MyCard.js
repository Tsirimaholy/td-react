export function MyCard(props) {
  const { children } = props;
  return (
    <div class="card shadow-lg border-0 rounded-lg mt-5">
      <div class="card-header">
        <h3 class="text-center font-weight-light my-4">Login</h3>
      </div>
      <div class="card-body">{children}</div>
      <div class="card-footer text-center py-3">
        <div class="small">
          <a href="register.html">Need an account? Sign up!</a>
        </div>
      </div>
    </div>
  );
}
