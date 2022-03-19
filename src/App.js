import "./App.css";
import Home from "./views/Home";
import Layout from "./views/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
