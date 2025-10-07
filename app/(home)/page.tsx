import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import GitHubActivity from '../components/GitHubActivity';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Projects /> */}
      <Skills />
      {/* <GitHubActivity /> */}
      <Contact />
    </main>
  );
};