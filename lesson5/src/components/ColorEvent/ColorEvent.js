import React, { useRef } from 'react';
import './ColorEvent.css';



function ColorEvent() {

    const divRef1 = useRef()
    const divRef2 = useRef()
    const divRef3 = useRef()


    let index = 0;

    const handleColorClick = () => {

        if (typeof 'click') {
            index++;
            if (index > 3) {
                index = 1;
            }
        }

        switch (index) {
            case 1: {
                divRef1.current.style.backgroundColor = 'red';
                divRef3.current.style.backgroundColor = 'unset';
                break;
            }
            case 2: {
                divRef1.current.style.backgroundColor = 'unset';
                divRef2.current.style.backgroundColor = 'green';
                break;
            }
            case 3: {
                divRef2.current.style.backgroundColor = 'unset';
                divRef3.current.style.backgroundColor = 'yellow';
                break;
            }
            default: {
                return;
            }
        }

    }


    return (
        <div className="color-list">
            <div className="button-block">
                <button onClick={handleColorClick}>Next</button>
            </div>
            <div className="color-event" ref={divRef1}></div>
            <div className="color-event" ref={divRef2}></div>
            <div className="color-event" ref={divRef3}></div>
        </div>
    );
}

export default ColorEvent;