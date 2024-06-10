import "./App.css";
import HomepageLayout from "./Pages/Main";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar>
        <HomepageLayout />
        <Footer />
      </NavBar>
    </div>
  );
}

export default App;
