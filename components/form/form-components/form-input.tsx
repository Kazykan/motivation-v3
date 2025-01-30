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

  const inputType = type === "number" ? "number" : "text"; // устанавливаем правильный тип для инпута

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}
      <div className="relative">
        <Input
          className="text-md"
          type={inputType}
          {...register(name, { valueAsNumber: type === "number" })}
          {...props}
        />
        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
