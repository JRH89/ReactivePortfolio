import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

import Skills from "./components/Skills";
const App = () => {
return (
    <div className="App">
      // Nav, Header, and other components should be here. I'm only importing my Skills component for styling. 
      <Skills />
    </div>
  );
};

export default App;