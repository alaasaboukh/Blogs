// import './content.scss'
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Services from "../components/Services"
import About from "../components/About"
import Blogs from "../components/Blogs"
import Contact from "../components/Contact"

function Content() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default Content;
