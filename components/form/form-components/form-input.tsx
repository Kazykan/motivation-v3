import React from "react";
import { Input } from "../../ui/input";
import { useFormContext } from "react-hook-form";
import { RequiredSymbol, ErrorText, ClearButton } from ".";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
  type?: string;
}

export const FormInput: React.FC<Props> = ({ className, name, label, required, type = "text", ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: string | number = e.target.value;

    // Преобразуем в число, если тип "number"
    if (type === "number" && newValue !== "") {
      newValue = Number(newValue);
    }

    register(name).onChange({ target: { value: newValue, name } });
  };

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}
      <div className="relative">
        <Input className="h-12 text-md" {...register(name)} {...props} onChange={handleChange} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
