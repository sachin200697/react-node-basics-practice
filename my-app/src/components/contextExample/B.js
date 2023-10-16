import { useContext } from 'react';
import C from './C';
import Context from '../../context/Context';


function B(props) {
    const name = useContext(Context);
    return <div>
        B {name}
        <C/>
    </div>
}

export default B;