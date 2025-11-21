import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  async function getData() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    //console.log(data.slip.advice);
    setData(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getData();
  }, []);

  //getData();

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={getData}>Get news Here</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces news.
    </p>
  );
}
