import "./App.css";
import HomepageLayout from "./components/Pages/Main";
import Footer from "./components/Reusable/Footer/Footer";
import NavBar from "./components/Reusable/NavBar/MainNavBar/MainNavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomepageLayout />
      <Footer />
    </div>
  );
}

export default App;
