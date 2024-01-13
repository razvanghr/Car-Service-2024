import Navigation from "./components/Navigation";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddClientPage from "./pages/AddClientPage";
import ClientPage from "./pages/ClientPage";
import SearchClientPage from "./pages/SearchClientPage";
import Footer from "./components/Footer";

import { StyledApp } from "./styles/App.styeld";

function App() {
  return (
    <>
      <StyledApp>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/clients" element={<AddClientPage />}></Route>
            <Route path="/search-client" element={<SearchClientPage />}></Route>
            <Route path="/client/:id" element={<ClientPage />}></Route>
          </Routes>
        </BrowserRouter>
      </StyledApp>
      <Footer />
    </>
  );
}

export default App;
