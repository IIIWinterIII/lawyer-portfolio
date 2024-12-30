import "./App.css";
import React from "react";

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
        </Routes>
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
