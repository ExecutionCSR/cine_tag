import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/Favoritos" element={<Favoritos />}></Route>
                </Routes>
            </Container>
        </BrowserRouter>
    )
};

export default AppRoutes;