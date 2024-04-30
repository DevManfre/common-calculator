import '../static/css/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function Calculator() {
    const [displayText, setDisplayText] = useState('');
    const handleDigitClick = (event) => setDisplayText(displayText + event.target.getAttribute('value'));
    const buttons = [
        { key: 0, value: '+', fun: () => { } },
        { key: 1, value: '-', fun: () => { } },
        { key: 2, value: 'x', fun: () => { } },
        { key: 3, value: '/', fun: () => { } },
        { key: 5, value: '7', fun: handleDigitClick },
        { key: 6, value: '8', fun: handleDigitClick },
        { key: 7, value: '9', fun: handleDigitClick },
        { key: 8, value: '=', fun: () => { } },
        { key: 9, value: '4', fun: handleDigitClick },
        { key: 10, value: '5', fun: handleDigitClick },
        { key: 11, value: '6', fun: handleDigitClick },
        { key: 12, value: '1', fun: handleDigitClick },
        { key: 13, value: '2', fun: handleDigitClick },
        { key: 14, value: '3', fun: handleDigitClick },
        { key: 15, value: '0', fun: handleDigitClick },
        { key: 16, value: '.', fun: () => { } },
        { key: 17, value: 'C', fun: () => { } }
    ];

    return (
        <div className='calculator'>
            <div className='display'>{displayText}</div>
            <div className="keyboard">
                {buttons.map(item => {
                    return (
                        <div className="button" onClick={item.fun} value={item.value}>{item.value}</div>
                    );
                })}
            </div>
        </div>
    );
}

export default Calculator;