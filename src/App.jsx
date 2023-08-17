import "./index.css";
import loremData from "./data";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum</h4>
    </section>
  );
}

export default App;
