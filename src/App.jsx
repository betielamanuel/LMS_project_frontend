import styles from "./App.module.css";
import { Navbar } from "../src/components/Navbar/Navbar";
import { Hero } from "../src/components/Hero/Hero";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
