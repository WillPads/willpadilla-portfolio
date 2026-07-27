import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Introduction from "@/components/sections/Introduction";
import About from "@/components/sections/About";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Introduction />
        <About />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
