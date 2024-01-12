import Navigation from "./components/Navigation";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import styled from "styled-components";
import AddClientPage from "./pages/AddClientPage";
import ClientPage from "./pages/ClientPage";

const StyledApp = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 50px;
  gap: 50px;
`;

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/clients" element={<AddClientPage />}></Route>
          <Route path="/cars" element={<Cars />}></Route>
          <Route path="/client/:id" element={<ClientPage />}></Route>
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
