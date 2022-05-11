import Navigatorbar from './components/Navigatorbar';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Social from "./pages/Social";
import Login from "./pages/Login";
import List from "./pages/list";

const App = () => {
    const user = false;
    return (
    <BrowserRouter>
      <div>
        <Navigatorbar user={user} />
        <Routes>
            {/*<Route path="/" element={<Home />} />*/}
            <Route path="/" element={<List />} />
            <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route path="/social/:id" element={user ? <Social/> : <Navigate to="/login"/>}/>
            <Route path="/bibliograph" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    );
};

export default App;