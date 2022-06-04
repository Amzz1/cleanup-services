
import Getquote from "./components/Getquote";
import Footer from './components/Footer'
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Nothing from "./components/Nothing";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
  <div>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="getaquote" element={<Getquote/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='nothing' element={<Nothing/>}/>
      </Route>
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
