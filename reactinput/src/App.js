import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const hadleClick = () => {
    setUpdated(message);
    setMessage("");
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <h2>Get input value after Button click!!</h2>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        ref={inputRef}
      />
      <button onClick={hadleClick}>click</button>
      <p>{updated}</p>
    </div>
  );
}

export default App;
