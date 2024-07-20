import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import MainComponent from "./components/MainComponent"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Projects from "./components/Projects"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MainComponent />}></Route>
          <Route path="/home" element={<MainComponent />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
