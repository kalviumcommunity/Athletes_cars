import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info'; 
import Form from './Form'; 



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/info" element={<Info/>} /> 
                <Route path="/form" element={<Form/>} />
       
            </Routes>
        </BrowserRouter>
    );
}

export default App;
