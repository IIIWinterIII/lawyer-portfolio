import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./reutes";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageAlwaysOnTop from "./components/PageAlwaysOnTop.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
// import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <main className="main-container">
        <PageAlwaysOnTop />
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          {/* <Route path="/" element={<h1>Главная</h1>} />
          <Route path="/services" element={<h1>Услуги</h1>} />
          <Route
            path="/services/web-development"
            element={<h1>Разработка сайтов</h1>}
          />
          <Route path="/services/seo" element={<h1>SEO</h1>} />
          <Route path="/contacts" element={<h1>Контакты</h1>} /> */}
        </Routes>
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
