import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Outlet />
    {/* If viewport is phone do not render footer */}
    <Footer/>
    </div>
  );
}

export default App;
