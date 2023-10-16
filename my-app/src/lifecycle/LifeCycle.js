import React from "react";

export default class LifeCycle extends React.Component {
    /* ---------- Mounting Start ----------- */
    /*

        1. constructor()
        2. getDerivedStateFromProps()
        3. render()
        4. componentDidMount()
    */

    //first
    constructor(props){
        super(props);
        this.state = {value: "initial Value"};
        console.log('constructor');
    }

    //second
    static getDerivedStateFromProps(props, state) {
        console.log('drivedstatefromprops');
        if(state.value==='initial Value')
        return {value: "drived"};
        else return null;
    };    

    //third
    render(){
        console.log('render');
        return <div>
            <div style={{border: '2px solid black', padding: '10px'}}>
                {this.state.value}
            </div>
            <br></br>
            <button onClick={e=>this.setState({value: 'First'})}>First</button> {' '}
            <button onClick={e=>this.setState({value: 'Second'})}>Second</button>
        </div>
    }

    //fourth
    componentDidMount() {
        console.log("did mount");
    }

    /* ---------- Mounting End ----------- */

    /* ---------- Updating Start ----------- */
    /*  
        1. getDerivedStateFromProps()
        2. shouldComponentUpdate()
        3. render()
        4. getSnapshotBeforeUpdate()
        5. componentDidUpdate()
    */
    shouldComponentUpdate(){
        console.log('should component update');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        let str = '';

        for(let key of Object.keys(prevState)){
            str+=' '+key+':'+prevState[key];
        }
        console.log(`getSnapshot ${str}`);
        return null;
    }

    componentDidUpdate() {
        console.log('updated');
    }
    /* ---------- Updating End ----------- */

    /* ---------- Unmounting Start ----------- */
    componentWillUnmount() {
        console.log('unmount');
    }
    /* ---------- Unmounting End ----------- */

}