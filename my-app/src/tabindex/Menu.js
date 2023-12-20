import React, { useState } from 'react';
import './menu.css';

export default function Menu() {
    const [menuNo, setMenuNo] = useState(undefined);
    return (
        <div className='menu'>
            <p><a id="myAnchor1" href="#" tabIndex={1} onClick={() => setMenuNo(1)}>Link 1</a>
                <div className='menu-inner'>
                    <a id="myAnchor1" href="https://www.w3schools.com" tabIndex={menuNo === 1 ? 2 : -1}>Link 1.1</a>
                    <a id="myAnchor1" href="https://www.w3schools.com" tabIndex={menuNo === 1 ? 3 : -1}>Link 1.2</a>
                    <a id="myAnchor1" href="https://www.w3schools.com" tabIndex={menuNo === 1 ? 4 : -1}>Link 1.3</a>
                </div>
            </p>

            <p><a id="myAnchor2" href="#" tabIndex={5} onClick={() => setMenuNo(2)}>Link 2</a>
                <div className='menu-inner'>
                    <a id="myAnchor1" href="https://www.w3schools.com" tabIndex={menuNo === 2 ? 6 : -1}>Link 2.1</a>
                    <a id="myAnchor1" href="https://www.w3schools.com" tabIndex={menuNo === 2 ? 7 : -1}>Link 2.2</a>
                    <a id="myAnchor1" href="https://www.w3schools.com" tabIndex={menuNo === 2 ? 8 : -1}>Link 2.3</a>
                </div></p>
            <p><a id="myAnchor3" href="#" tabIndex={9} onClick={() => setMenuNo(3)}>Link 3</a>
                <div className='menu-inner'>
                    <a id="myAnchor1" href="https://www.w3schools.com" tabIndex={menuNo === 3 ? 10 : -1}>Link 3.1</a>
                    <a id="myAnchor1" href="https://www.w3schools.com" tabIndex={menuNo === 3 ? 11 : -1}>Link 3.2</a>
                    <a id="myAnchor1" href="https://www.w3schools.com" tabIndex={menuNo === 3 ? 12 : -1}>Link 3.3</a>
                </div></p>
        </div>
    );
}
