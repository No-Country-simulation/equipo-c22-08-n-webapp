import { useEffect } from "react";

export const Filter = ({ children, isMoreFilters = false }) => {
    return (
       <>
       {isMoreFilters && children}
       
       </>
        
    );
};

export const FilterBy = ({ title, options, handleSelectedOption }) => {
    
    return (
        <div className="flex flex-col justify-evenly border-t py-4 mx-3">
            <h3 className="font-medium text-lg mb-2">{title}</h3>
            <div className="flex gap-2" onChange={handleSelectedOption}>
                {options.map((option, index) => (

                    <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name={title} 
                            value={option}                            
                            className="form-radio text-blue-500 focus:ring focus:ring-blue-200"
                            
                        />
                        <span>{option}</span>
                    </label>

                ))}
            </div>
        </div>
    );
};

