import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<RegisterPage />} />
            </Routes>
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
