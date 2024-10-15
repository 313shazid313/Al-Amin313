import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import Navigation from "./component/Navigation";

const App = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div>
      <Navigation />
    </div>
  );
};

export default App;
