
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info'; 


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/info" element={<Info/>} /> {}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
