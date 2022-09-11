import { ChangeEventHandler, useState } from "react";

interface IInputOptions {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

type UseInputHookOutput = [IInputOptions, () => void];

export const useInput = (initialValue: string): UseInputHookOutput => {
  const [inputValue, setinputValue] = useState<string>(initialValue);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setinputValue(target.value);
  };
  const clearInput = () => {
    setinputValue("");
  };

  return [{ value: inputValue, onChange: handleInputChange }, clearInput];
};
