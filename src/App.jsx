import Navigatorbar from './components/Navigatorbar';
import './App.css';
import Home from "./pages/Home";
import Social from "./pages/Social";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route, NavLink, Navigate} from "react-router-dom";


const App = () => {
    const user = false;
    return (
    <BrowserRouter>
      <div>
        <Navigatorbar user={user} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route path="/social/:id" element={user ? <Social/> : <Navigate to="login"/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    );
};

export default App;