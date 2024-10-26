import { initFlowbite } from "flowbite";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return <div></div>;
};

export default App;
