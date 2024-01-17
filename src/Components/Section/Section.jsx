import { useState } from 'react'
import Check from '../Icons/Check';
import './Section.css'

const Section = () => {
    const [inputValue, setInputValue] = useState('')
    const [Disable, setDisable] = useState(false)

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInputValue('')
            setDisable(false)
        } else if (value === '=') {
            try {
                const result = eval(inputValue)
                setInputValue(`${result.toString()}`)
                setDisable(true)
            } catch (error) {
                setInputValue('Error')
            }
        } else {
            setInputValue((prevValue) => prevValue + value);
        }
    }

    return (
        <section>
            <div className="container">
                <div className="Card">
                    <span className="InputResult">{Disable && <Check />} {inputValue}</span>
                    <div className="conatinerBtns">
                        <div className="Btns">
                            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.', 'C'].map((value) => (
                                <button key={value} onClick={() => handleButtonClick(value)}>
                                    {value}
                                </button>
                            ))}
                        </div>
                        <div className="BtnsOptions">
                            {['/', '*', '-', '+', '='].map((operator) => (
                                <button key={operator} onClick={() => handleButtonClick(operator)}>
                                    {operator}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
