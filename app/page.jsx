import About from "./components/About";
import AIChat from "./components/AIChat";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Works from "./components/Works";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 overflow-hidden">
      <NavBar/>
      <Header/>
      <About/>
      <Works/>
      <Skills/>
      <Connect/>
      <AIChat/>
      <Footer/>
    </main>
  );
}
