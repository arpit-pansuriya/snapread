import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/login" component={LoginPage} exact />
              <Route path="/login/:guest" component={LoginPage} exact />
              <Route path="/register" component={RegisterPage} />
            </Routes>
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;