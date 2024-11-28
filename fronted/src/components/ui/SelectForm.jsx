const SelectForm = ({ label,id='', options = [], error, ...rest }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray mb-1">
          {label}
        </label>
      )}
      <select
        {...rest}
        className={`shadow appearance-none border rounded w-full py-2 px-3 
          text-gray-dark leading-tight focus:outline-none focus:shadow-outline 
          ${error ? 'border-red' : 'border-gray'}`}
      >
        <option value="">Selecciona una opción</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red">{error}</p>
      )}
    </div>
  );
};

export default SelectForm;