import LoginPage from "@/pages/loginPage.tsx";
import Form1 from "@/pages/registrationPage.tsx";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route
                  path="/"
                  element={<LoginPage/>}
              />
              <Route
                  path="/dashboard"
                  element={<Form1/>}
              />
          </Routes>
      </BrowserRouter>
     );
}

export default App;