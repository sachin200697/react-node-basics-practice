import Wrapper from "./Wrapper"
function Add(props) {
    return <div>
        <h2>HOC Example</h2>
        <h4>{props.name}</h4>
        <h4>{props.age}</h4>
    </div>
}

export default Wrapper(Add);