import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";

import Inicio from "./pages/Inicio";
import Criptomoedas from "./pages/Criptomoedas";

export default function AppRoutes() {
  return (
    <>

    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Criptomoedas" element={<Criptomoedas />} />
        <Route path="*" element={<div> Erro 404 - Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>

    </>
  );
}