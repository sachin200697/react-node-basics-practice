import { Consumer } from "../../context/Context";
function C(props) {
    return <div>
        C
        <Consumer>
            {value=><h1>{value}</h1>}
        </Consumer>
    </div>
}

export default C;