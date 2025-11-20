import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");

  async function getData() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    //console.log(data.slip.advice);
    setData(data.slip.advice);
  }

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={getData}>Get Data Here</button>
    </div>
  );
}
