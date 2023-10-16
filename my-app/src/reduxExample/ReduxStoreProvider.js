import store from '../redux-store/store';
import {Provider} from 'react-redux';
import ReduxConsumer from './ReduxConsumer';

export default function ReduxStoreProvider(){
    return <Provider store={store}>
        <ReduxConsumer/>
    </Provider>
}