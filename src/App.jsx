import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./reutes";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageAlwaysOnTop from "./components/PageAlwaysOnTop.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <PageAlwaysOnTop />
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
