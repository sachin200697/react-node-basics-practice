import { useEffect, useRef } from "react"

export default function BubblingAndCapturing(props){
    const bubbling_grandparent = useRef();
    const bubbling_parent = useRef();
    const bubbling_child = useRef();

    const capturing_grandparent = useRef();
    const capturing_parent = useRef();
    const capturing_child = useRef();

    const bubbling_grandparent_p = useRef();
    const bubbling_parent_p = useRef();
    const bubbling_child_p = useRef();

    useEffect(()=>{
        bubbling_grandparent.current.addEventListener('click', ()=>{
            console.log('Bubbling_grandparet');
        }, false);

        bubbling_parent.current.addEventListener('click', ()=>{
            console.log('Bubbling_parent');
        }, false);

        bubbling_child.current.addEventListener('click', ()=>{
            console.log('Bubbling_child');
        }, false);




        capturing_grandparent.current.addEventListener('click', ()=>{
            console.log('capturing_grandparent');
        }, true);

        capturing_parent.current.addEventListener('click', ()=>{
            console.log('capturing_parent');
        }, true);

        capturing_child.current.addEventListener('click', ()=>{
            console.log('capturing_child');
        }, true);   
        
        

        bubbling_grandparent_p.current.addEventListener('click', (e)=>{
            console.log('Bubbling_grandparet stop propogation');
        }); // by default third agrument is false

        bubbling_parent_p.current.addEventListener('click', (e)=>{
            e.stopPropagation();
            console.log('Bubbling_parent stop propogation', e);
        });

        bubbling_child_p.current.addEventListener('click', (e)=>{
            console.log('Bubbling_child propogation');
        }, {capture: false});   // we can also pass third agrument in this way
    }, []);

    return <div>
        <div>
            <h1>Bubbling</h1>
            <div ref={bubbling_grandparent} style={{border: '1px solid black', padding: '5px'}}>
                Bubbling Grandparent
                <div ref={bubbling_parent} style={{border: '1px solid black', padding: '5px'}}>
                    Bubbling Parent
                    <div ref={bubbling_child} style={{border: '1px solid black', padding: '5px'}}>Bubbling Child</div>
                </div>
            </div>
        </div>

        <div>
            <h1>Capturing</h1>
            <div ref={capturing_grandparent}style={{border: '1px solid black', padding: '5px'}}>
                Capturing Grandparent
                <div ref={capturing_parent}style={{border: '1px solid black', padding: '5px'}}>
                    Capturing Parent
                    <div ref={capturing_child}style={{border: '1px solid black', padding: '5px'}}>Capturing Child</div>
                </div>
            </div>
        </div>

        <div>
            <h1>Bubbling with storpPropogation</h1>
            <div ref={bubbling_grandparent_p} style={{border: '1px solid black', padding: '5px'}}>
                Bubbling Grandparent
                <div ref={bubbling_parent_p} style={{border: '1px solid black', padding: '5px'}}>
                    Bubbling Parent
                    <div ref={bubbling_child_p} style={{border: '1px solid black', padding: '5px'}}>Bubbling Child</div>
                </div>
            </div>
        </div>
    </div>
}