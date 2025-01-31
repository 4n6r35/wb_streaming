import { useState } from "react";
import { DropdownLanguagesOptionsInterface } from "../../domain/interface";

export const DropdownComponent = ({ options }: { options: DropdownLanguagesOptionsInterface[]; }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    // const handleMouseEnter = () => {
    //     setIsOpen(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsOpen(false);
    // };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: DropdownLanguagesOptionsInterface) => {
        setSelectedOption(option)
        setIsOpen(false)
        console.log(option)
    };

    return (
        <section className="relative">
            <div className="flex items-center cursor-pointer text-white-2" onClick={toggleDropdown}>
                <img className="w-7 h-7 object-contain"
                    src={selectedOption.img} alt="option/flag" />
                <h1 className="block px-3"> {selectedOption.option}</h1>
                <svg
                    className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.5a1 1 0 01-1.414 0l-4-4.5a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            {isOpen && (
                <div className="absolute top-full left-0 mt-1 z-10 text-sm">
                    {options.map((op) => (
                        <div key={op.id} className="flex items-center hover:bg-gray-100/20 transition-colors duration-200 cursor-pointer"
                            onClick={() => handleOptionClick(op)}>
                            <img className="w-7 h-7 object-contain"
                                src={op.img}
                                alt="option/flag" />
                            <p className="block px-3 py-2 hover:text-gray-900 transition-colors duration-200">
                                {op.option}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};
