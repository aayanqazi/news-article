import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import Article from "./pages/Article";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/article/:id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
