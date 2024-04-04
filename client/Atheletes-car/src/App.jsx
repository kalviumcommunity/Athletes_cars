// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info';
import Form from './Form';
import UpdateForm from './UpdateForm';
import Login from './Login'; 
import Signup from './Signup'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/form" element={<Form />} />
        <Route path="/update/:id" element={<UpdateForm />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
