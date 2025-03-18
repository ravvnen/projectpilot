import LoginPage from "@/pages/loginPage.tsx";
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
          </Routes>
      </BrowserRouter>
     );
}

export default App;