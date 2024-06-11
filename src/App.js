import "./App.css";
import HomepageLayout from "./components/Pages/Main";
import Footer from "./components/Reusable/Footer/Footer";
import NavBar from "./components/Reusable/NavBar/NavBar";

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
