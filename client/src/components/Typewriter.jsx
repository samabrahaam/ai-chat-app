import { useEffect, useState } from "react";

function Typewriter({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index));

      index++;

      if (index > text.length) {
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [text]);

  return <p>{displayed}</p>;
}

export default Typewriter;
