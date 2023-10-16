import {Provider} from './context/Context';
import A from "./components/contextExample/A";
import Add from './components/HOC/Add';
import LifeCycle from './lifecycle/LifeCycle';
import { useState } from 'react';
import Render from './components/renderExample/Render';
import ReduxStoreProvider from './reduxExample/ReduxStoreProvider';
import BubblingAndCapturing from './bubblingAndCapturing/BubblingAndCapturing';
import LifecycleUseEffect from './lifecycleUsingUseEffect/LifecycleUseEffect';
import ShowContent from './apiCall/ShowContent';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <Provider value='Naman'>
      {/* <div className="App">
        Start App
        <A/>
      </div>
      <div>
        <p>----------------------------------------------</p>
        <Add age="25"/>
      </div>
      <div>
        <p> ---------------------------------------------</p>
        <button onClick={e=>setToggle(!toggle)}>Toggle</button>
        {toggle && <LifeCycle />}
      </div>
      <div>
        <p> ---------------------------------------------</p>
        <Render render={(loggedin)=>loggedin?<p>User is logged in</p>:<p>Enter to login</p>} />
      </div>
      <div>
        <ReduxStoreProvider/>
      </div>
      <div>
        <BubblingAndCapturing/>
      </div>
      <div>
        <LifecycleUseEffect/>
      </div> */}
      <div>
        <ShowContent />
      </div>
    </Provider>
  );
}

export default App;
