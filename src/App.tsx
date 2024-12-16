import Projects from "./components/sections/projects";
import Skills from "./components/sections/skills";
import Header from "./components/header";
import Home from "./components/sections/home";
import About from "./components/sections/about";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  )
};

export default App;