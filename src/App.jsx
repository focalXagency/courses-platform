import "./App.css";
import { Routes, Route } from "react-router-dom/dist";
import Home from "../src/Components/Home/Home";
import Courses from "../src/modules/Courses/Courses/Courses/Courses";
import Blogs from "../src/modules/Blogs/Blogs/Blogs";

import Nav from "./Components/Nav/Nav";

import Footer from "./Components/Footer/Footer";
import ArticlePage from "./modules/Articles/ArticlePage/ArticlePage";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/article" element={<ArticlePage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
