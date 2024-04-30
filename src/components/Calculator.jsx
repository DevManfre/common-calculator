import '../static/css/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from './Button';

function Calculator(){
    const buttons = [
        {key: 0, value: '+', fun: () => {}},
        {key: 1, value: '-', fun: () => {}},
        {key: 2, value: 'x', fun: () => {}},
        {key: 3, value: '/', fun: () => {}},
        {key: 5, value: '7', fun: () => {}},
        {key: 6, value: '8', fun: () => {}},
        {key: 7, value: '9', fun: () => {}},
        {key: 8, value: '=', fun: () => {}},
        {key: 9, value: '4', fun: () => {}},
        {key: 10, value: '5', fun: () => {}},
        {key: 11, value: '6', fun: () => {}},
        {key: 12, value: '1', fun: () => {}},
        {key: 13, value: '2', fun: () => {}},
        {key: 14, value: '3', fun: () => {}},
        {key: 15, value: '0', fun: () => {}},
        {key: 16, value: '.', fun: () => {}},
        {key: 17, value: 'C', fun: () => {}}
    ];

    return(
        <div className='calculator'>
            <div className='display'>2+2+3</div>
            <div className="keyboard">
                {buttons.map(item => {
                    return (
                        <Button key={item.key}>{item.value}</Button>
                    );
                })}
            </div>
        </div>
    );
}

export default Calculator;