import React from "react";
import { Input } from "@nextui-org/react";
import "../../App.css"
interface InputFieldProps {
  type: string;
  label: string;
  styles?: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const [value, setValue] = React.useState<string>("junior2nextui.org");

  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return props.type === "email" ? !validateEmail(value) : false;
  }, [value, props.type]);

  return (
    <Input
      value={value}
      type={props.type}
      // label={props.label}
      // radius={""}
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage={isInvalid && "Please enter a valid email"}
      onValueChange={setValue}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
    />
  );
};

export default InputField;
