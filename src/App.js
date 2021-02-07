import Header from "./Component/Header/Header";
import Home from "./Component/Layout/Home";
import Footer from "./Component/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <main className="container">
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
