import Nav from './components/Nav';
import Home from "./components/Home";
import SignIn from "./components/SignIn"
import LogIn from "./components/LogIn"
import { Routes, Route } from 'react-router-dom';
import "./App.css"
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/login" element={<LogIn/>} />
    </Routes>
      </>

  );
}

export default App;
