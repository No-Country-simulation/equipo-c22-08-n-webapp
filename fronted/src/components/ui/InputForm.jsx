import React, { forwardRef } from "react";

const InputForm = forwardRef(({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  focusClass = "focus:ring-2 focus:ring-beige",
  borderClass = "border-beige",
  icon: Icon,
  error,
  label,
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            onChange?.(e.target.value);
            props.onChangeNative?.(e);
          }}
          ref={ref}
          className={`
            w-full pl-12 pr-4 py-3 border rounded-lg
            ${error ? 'border-red b-4' : borderClass}
            ${error ? 'focus:ring-red focus:border-red' : focusClass}
            outline-none transition
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red">{error}</p>
      )}
    </div>
  );
});

InputForm.displayName = 'InputForm';

export default InputForm;