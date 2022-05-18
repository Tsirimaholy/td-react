import "./App.css";
import { MyCard } from "./MyCard";
import { MyCheckBox } from "./MyCheckBox";
import { MyInput } from "./MyInput";
function App() {
  return (
    <body class="bg-primary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-5">
                  <MyCard>
                    <form>
                        <MyInput
                          typ="email"
                          label="Addresse Email"
                          id="inputEmail"
                        ></MyInput>
                        <MyInput
                          type="password"
                          id="inputPassword"
                          label="Password"
                        ></MyInput>
                        <MyCheckBox
                          id="inputRememberPassword"
                          label="Remember Password"
                        ></MyCheckBox>
                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a class="small" href="password.html">
                            Forgot Password?
                          </a>
                          <a class="btn btn-primary" href="index.html">
                            Login
                          </a>
                        </div>
                      </form>
                  </MyCard>
                    
                    </div>
                    
                  </div>
                </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
          <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
              <div class="d-flex align-items-center justify-content-between small">
                <div class="text-muted">Copyright &copy; Your Website 2022</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </body>
  );
}

export default App;
