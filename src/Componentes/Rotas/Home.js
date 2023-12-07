import"../styles.css";
import Intro from "../componentes/Intro";
import Testimonials from "../componentes/Testimonials";
import Banner from "../Banner";
export default function App() {
  return (
    <div className="App">
      <Intro />
      <Testimonials />
      <Banner />
    </div>
  );
}
