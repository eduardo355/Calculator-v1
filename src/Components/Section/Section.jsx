import { useState } from "react";
import Check from "../Icons/Check";


const Section = () => {
    const [inputValue, setInputValue] = useState("");
    const [Disable, setDisable] = useState(false);

    const handleButtonClick = (value) => {
        if (value === "C") {
            setInputValue("");
            setDisable(false);
        } else if (value === "=") {
            try {
                const result = eval(inputValue);
                setInputValue(`${result.toString()}`);
                setDisable(true);
            } catch (error) {
                setInputValue("Error");
            }
        } else {
            setInputValue((prevValue) => prevValue + value);
        }
    };

    return (
        <section >
            <div className="flex justify-center items-center mt-20">
                <div className="flex flex-col sm:w-11/12 md:w-1/2 lg:w-1/3 xl:w-4/12 border rounded-md border-gray-300 pt-32 shadow-sm dark:bg-dark-card">
                    <span className="flex items-center gap-4 text-xl border-t border-gray-300 h-16 p-5 dark:text-white dark:bg-dark-card">
                        {Disable && <Check />} {inputValue}
                    </span>
                    <div className="flex justify-center gap-1 p-2 bg-gray-300 border-t border-gray-300 dark:bg-dark-card">
                        <div className="sm:w-2/3 xl:1/2 lg:w-1/2 flex flex-wrap gap-4">
                            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "C"].map((value) => (
                                <button
                                    className="p-1 text-xl w-14 rounded-md bg-gray-400 dark:bg-dark-bg dark:text-white"
                                    key={value}
                                    onClick={() => handleButtonClick(value)}
                                >
                                    {value}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            {["/", "*", "-", "+", "="].map((operator) => (
                                <button
                                className="p-2 text-xl w-14 flex-grow bg-white my-1 rounded-md dark:bg-dark-bg dark:text-white"
                                    key={operator}
                                    onClick={() => handleButtonClick(operator)}
                                >
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
