import './App.css';

import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
    </div>
  );
}

export default App;
