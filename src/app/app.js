import './app.css';
import {Heading} from "./parts/heading";
import {Timer} from "./parts/timer";
import {SignUp} from "./parts/sign-up";
import {BottomContent} from "./parts/bottom-content";

function App() {
  return (
    <div className="app">
      <div className="body">
        <Heading/>
        <Timer/>
      </div>
      <SignUp/>
      <BottomContent/>
    </div>
  );
}

export default App;
