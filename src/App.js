
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Stack from "./components/Stack";



function App() {
  return (
    <div className="appjs" >
     
      <Loading />
      <Navbar />
      <Hero />
      <Services />
      <Stack />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
