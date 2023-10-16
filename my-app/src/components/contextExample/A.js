import React from 'react';
import B from './B';
import Context from '../../context/Context';

class A extends React.Component {
    static contextType = Context;
    render(){
        return <div>
            A {this.context}
            <B/>
        </div>
    }
}
// A.contextType = Consumer;
export default A;