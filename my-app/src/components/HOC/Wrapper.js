import React from "react";

function Wrapper(OldComponent){
    return class NewComponent extends React.Component {
        render(){
            return <OldComponent name="Prabhat" {...this.props}/>;
        }
    }
}

export default Wrapper;