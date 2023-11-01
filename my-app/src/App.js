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
import SendDataForm from './apiCall/SendDataForm';
import StopWatch from './stopwatch/StopWatch';
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';
import CustomHookExample from './hooks/useContext/CustomHookExample';
import UseReducer from './hooks/UseReducer';
import UseCallback from './hooks/UseCallback';
import CustomHookForLocalStorage from './hooks/customHook/CustomHookForLocalStorage';
import UseLayoutEffect from './hooks/UseLayoutEffect';
import UseTransition from './hooks/UseTransition';
import UseDeferredValue from './hooks/UseDeferredValue';
import UseImperativeHandle from './hooks/useImperativeHandle/UseImperativeHandle';
import UseDebugValue from './hooks/useDebugValue/UseDebugValue';
import UseId from './hooks/UseId';


function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <Provider value='Naman'>
      {/* <div className="App">
        Start App
        <A/>
      </div> */}
      {/* <div>
        <p>----------------------------------------------</p>
        <Add age="25"/>
      </div> */}
      {/* <div>
        <p> ---------------------------------------------</p>
        <button onClick={e=>setToggle(!toggle)}>Toggle</button>
        {toggle && <LifeCycle />}
      </div> */}
      {/* <div>
        <p> ---------------------------------------------</p>
        <Render render={(loggedin)=>loggedin?<p>User is logged in</p>:<p>Enter to login</p>} />
      </div> */}
      {/* <div>
        <ReduxStoreProvider/>
      </div> */}
      {/* <div>
        <BubblingAndCapturing/>
      </div> */}
      {/* <div>
        <LifecycleUseEffect/>
      </div> */}
      {/* <div>
        <ShowContent />
      </div> */}
      {/* <div>
        <SendDataForm />
      </div> */}
      {/* <div>
        <StopWatch />
      </div> */}
      {/* <div>
        <UseState />
      </div> */}
      {/* <div>
        <UseEffect/>
      </div> */}
      {/* <div>
        <UseMemo />
      </div> */}
      {/* <div>
        <UseRef />
      </div> */}

      {/* <div>
        <CustomHookExample />
      </div> */}
      {/* <div>
        <UseReducer />
      </div> */}

      {/* <div>
        <UseCallback />
      </div> */}

      {/* <div>
        <CustomHookForLocalStorage />
      </div> */}

      {/* <div>
        <UseLayoutEffect />
      </div> */}
      {/* <div>
        <UseTransition/>
      </div> */}

      {/* <div>
        <UseDeferredValue />
      </div> */}

      {/* <div>
        <UseImperativeHandle />
      </div> */}

      {/* <div>
        <UseDebugValue />
      </div> */}
      <div>
        <UseId />
      </div>

    </Provider>
  );
}

export default App;
