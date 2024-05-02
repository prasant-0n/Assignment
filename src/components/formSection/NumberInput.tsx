import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Input } from "@nextui-org/react";

interface InputFieldProps {
  label: string;
  styles?: string;
}

const NumberInput: React.FC<InputFieldProps> = (props) => {
  const [value, setValue] = React.useState<string | undefined>();

  const handlePhoneNumberChange = (phoneNumber: string | undefined) => {
    setValue(phoneNumber);
  };

  return (
    <div>
    
      <label className="mb-3 block text-base font-medium text-[#07074D]">
        {props.label}
      </label>
      <div className="w-full">

        <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="RU"
            value={value}
            onChange={setValue}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        
      </div>

    </div>
  );
};

export default NumberInput;
