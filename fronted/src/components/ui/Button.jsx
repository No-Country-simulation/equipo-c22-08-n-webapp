import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  bgColor = 'bg-verde-lila',
  iconPosition = 'start',
  className = '',
}) => {
  const isArray = Array.isArray(children);
  const icon = isArray && React.isValidElement(children[1]) ? children[1] : null;
  const text = isArray ? children[0] : children;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-${bgColor} 
        bg-opacity-90
        hover:bg-opacity-100
        rounded-lg 
        text-lg 
        px-5 
        py-2.5
        text-center 
        me-2 
        mb-2
        flex 
        items-center 
        justify-center
       
        ${className}
      `}
    >

       
        {/* transition-all 
        duration-300
        before:absolute 
        before:inset-0 
        before:bg-white 
        before:opacity-20 
        before:bg-gradient-to-r 
        before:from-transparent 
        before:via-white 
        before:to-transparent
        hover:brightness-110
        active:brightness-90 */}

        
      {icon && iconPosition === 'start' && (
        <span className="mr-1">{icon}</span>
      )}
      <span className="text-center">{text}</span>

      {icon && iconPosition === 'end' && (
        <span className="ml-1">{icon}</span>
      )}
    </button>
  );
};

export default Button;