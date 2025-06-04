import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";

import LoginForm from "./components/LoginForm/login";
import Home from "./components/HomePage/home";
import CodeAnalysis from "./components/CodeAnalysis/codeAnalysis";
import Coding from "./components/Coding/coding";
import './App.css'; // Import your main CSS file
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/" element={<Home />} />
                <Route path="/CodeAnalysis" element={<CodeAnalysis />} />
                <Route path='/Coding' element ={<Coding/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;

