
import Getquote from "./components/Getquote";
import Footer from './layout/Footer'
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Nothing from "./components/Nothing";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
  <div>
    <Routes>
      <Route path='/this-is-neat' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="getaquote" element={<Getquote/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='nothing' element={<Nothing/>}/>
      </Route>
    </Routes>
   
  </div>
  );
}

export default App;
