import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./reutes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
