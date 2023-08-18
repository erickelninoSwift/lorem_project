import "./index.css";
import loremData from "./data";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [count, setCount] = useState(1);
  const [textLorem, setTextLorem] = useState([]);

  const HandleGenerate = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setTextLorem(loremData.slice(0, amount));
  };

  return (
    <section className="section-center" onSubmit={HandleGenerate}>
      <h4>Tired of boring lorem ipsum ?</h4>
      <form className="lorem-form">
        <label htmlFor="number">Paragraphs: </label>
        <input
          type="number"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      {textLorem.length > 0 ? (
        <article className="lorem-text">
          {textLorem.map((loremText) => {
            let id = uuidv4();
            console.log(id);
            return <p key={id}>{loremText}</p>;
          })}
          <br></br>
          <br></br>
        </article>
      ) : (
        ""
      )}
    </section>
  );
}

export default App;
