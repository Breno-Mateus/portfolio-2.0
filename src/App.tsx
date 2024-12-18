import Projects from "./components/sections/projects";
import Skills from "./components/sections/skills";
import Header from "./components/header";
import Home from "./components/sections/home";
import About from "./components/sections/about";
import HeaderMobile from "./components/header-mobile";
import Footer from "./components/footer";
import Contact from "./components/sections/contact";

const App = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
};

export default App;