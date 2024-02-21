import { Route, Routes } from "react-router-dom";
//Pages
import HeroList from "./components/HeroList";
import HeroDetail from "./components/HeroDetail";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroList />} exact />
      <Route path="/detail:id" element={<HeroDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
