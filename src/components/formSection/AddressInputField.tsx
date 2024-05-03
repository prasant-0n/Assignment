// AddressInputField.tsx

import React, { ChangeEvent } from 'react';

interface AddressInputFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const AddressInputField: React.FC<AddressInputFieldProps> = ({ label, name, id, placeholder, value, onChange }) => {
  return (
    <div className="w-full px-3 sm:w-1/2">
      <div className="mb-3 ms:w-1/2">
        <input
          type="text"
          name={name}
          id={id} // Using the provided id
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
    </div>
  );
};


export default AddressInputField;
