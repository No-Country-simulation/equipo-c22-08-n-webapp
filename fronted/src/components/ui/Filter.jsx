import { FindForm } from "./FindForm";

export const Filter = ({ children,isMoreFilters=false,onSubmitHandlerForm }) => {
    return (
        <section className="mr-2 lg:1/4 xl:block mt-3 ps-4 sticky top-0 sm:flex">        
            {isMoreFilters && children}
        </section>
    );
};

export const FilterBy = ({ title, options, selectedOption, setSelectedOption }) => {
    return (
        <div className="flex flex-col justify-evenly border-t py-4 mx-3">
            <h3 className="font-medium text-lg mb-2">{title}</h3>
            <div className="flex gap-2">
                {options.map((option, index) => (
                    <label key={index} className="flex items-center gap-2 cursor-pointer">
                       
                        <input
                            type="radio"
                            name={title} // Este atributo agrupa los radios dentro de cada filtro
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => setSelectedOption(option)}
                            className="form-radio text-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

