const fixedInputClass="rounded-md flex justify-center mx-auto px-3 py-2 w-80 border border-grayish placeholder-grayish text-gray-900 focus:outline-none focus:ring-secondary focus:border-primary sm:text-sm"

const Input = ({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass
}) => {
    return(
        <div className="my-5">
          <label htmlFor={labelFor} className="sr-only">
            {labelText}
          </label>
          <input
            onChange={handleChange}
            value={value}
            id={id}
            name={name}
            type={type}
            required={isRequired}
            className={fixedInputClass+customClass}
            placeholder={placeholder}
          />
        </div>
    );
};
export default Input;
