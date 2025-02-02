import '../static/css/style.css'
import { useState } from 'react';
import { evaluate } from 'mathjs';
import 'bootstrap/dist/css/bootstrap.css';

function Calculator() {
    const [displayText, setDisplayText] = useState('');
    const handleDigitClick = (event) => setDisplayText(displayText + event.target.getAttribute('value'));
    const handleOperatorClick = (event) => {
        const lastChar = displayText[displayText.length - 1];
        const newChar = event.target.getAttribute('value');

        if (newChar !== lastChar)
            if (['*', '/', '+', '-'].includes(lastChar))
                setDisplayText(displayText.slice(0, -1) + newChar);
            else if (displayText !== '')
                handleDigitClick(event);
    }
    const buttons = [
        { value: '+', fun: handleOperatorClick },
        { value: '-', fun: handleOperatorClick },
        { value: '*', fun: handleOperatorClick },
        { value: '/', fun: handleOperatorClick },
        { value: '7', fun: handleDigitClick },
        { value: '8', fun: handleDigitClick },
        { value: '9', fun: handleDigitClick },
        {
            value: '=', fun: () => {
                try {
                    setDisplayText(`${evaluate(displayText)}`);
                }
                catch (error) {
                    switch (error) {
                        case SyntaxError:
                            break;
                        default:
                            console.error(error);
                    }
                }
            }
        },
        { value: '4', fun: handleDigitClick },
        { value: '5', fun: handleDigitClick },
        { value: '6', fun: handleDigitClick },
        { value: '1', fun: handleDigitClick },
        { value: '2', fun: handleDigitClick },
        { value: '3', fun: handleDigitClick },
        { value: '0', fun: handleDigitClick },
        { value: '.', fun: handleOperatorClick },
        { value: 'C', fun: () => setDisplayText('') }
    ];
    let keyCount = 0;

    return (
        <>
            <div className='calculator'>
                <div className='display'>{displayText}</div>
                <div className="keyboard">
                    {buttons.map(item => {
                        keyCount += 1;
                        return (
                            <div key={keyCount} className="button" onClick={item.fun} value={item.value}>{item.value}</div>
                        );
                    })}
                </div>
            </div>
            <p className='reference'>Coded by <a href='https://github.com/DevManfre'>DevManfre</a></p>
        </>
    );
}

export default Calculator;