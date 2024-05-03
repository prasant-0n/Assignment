import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, id, placeholder, value, onChange }) => {
  return (
   <div className="mb-3 md:mb-5">
      <label htmlFor={id} className="block text-base font-medium text-[#07074D]">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={id} // Using the provided id
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 md:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
  );
};

export default InputField;
