import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
import { Outlet } from 'react-router-dom';
import { UserContext } from "./components/context/UserContext";

function App() {
  const msg = useContext(UserContext);
  return (
    <div className="App">
    <Navbar />
{/* <div>{msg}</div> */}
    <Outlet />

    {/* If viewport is phone do not render footer */}
    <Footer/>
    </div>
  );
} 

export default App;
