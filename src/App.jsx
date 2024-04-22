import { useState } from "react";
import Grid from "./components/grid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" w-screen h-screen">
        <div className=" text-zinc-50 font-extrabold text-9xl text-center">
          Tipsy society
        </div>
        <Grid />
      </div>
    </>
  );
}

export default App;
