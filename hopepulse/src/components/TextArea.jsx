import React from 'react';

const TextArea = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  isRequired = true,
  placeholder,
  customClass
}) => {
  return (
    <div className= "flex items-center text-center">
      <label htmlFor={labelFor} className="block text-md ml-2 font-medium text-grayish">
        {labelText}
      </label>
      <textarea
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        rows={4}
        required={isRequired}
        className={` focus:ring-primary focus:border-secondary block w-full shadow-sm sm:text-md border-grayish rounded-md mx-6 ${customClass}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
