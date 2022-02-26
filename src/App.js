import "./styles.css";
import { useEffect, useState } from "react";
function Rakshit() {
  return <h1>hello Rakshit</h1>;
}
export default function App() {
  const [mount, setmount] = useState(true);
  const [up, setup] = useState("CodeSandbox");
  useEffect(() => {
    console.log("mount");

    console.log("update");
    return () => {
      console.log("unmount");
    };
  }, [up, mount]);

  return (
    <div className="App">
      <h1>Hello {up}</h1>
      {mount ? <Rakshit /> : null}
      <button
        onClick={() => {
          setmount(!mount);
        }}
      >
        Unmout-mount
      </button>
      <button
        onClick={() => {
          setup("Change");
        }}
      >
        update
      </button>
    </div>
  );
}
