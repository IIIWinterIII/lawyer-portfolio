import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./reutes";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route path={path} element={Component} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
