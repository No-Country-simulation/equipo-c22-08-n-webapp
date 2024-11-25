import React, { useState } from 'react';

const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  className = '',
  focusClass = 'focus:ring-2 focus:ring-blue-500',  // Clases para el enfoque (puedes personalizar)
  borderClass = 'border-gray-300',  // Clases para el borde (puedes personalizar)
}) => {
  const [inputValue, setInputValue] = useState(value);

  // Función para manejar los cambios en el input
  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e.target.value); 
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`p-3 border rounded-md shadow-sm focus:outline-none transition-colors duration-200 ease-in-out ${borderClass} ${focusClass} hover:border-blue-300`}
      />
    </div>
  );
};

export default Input;
