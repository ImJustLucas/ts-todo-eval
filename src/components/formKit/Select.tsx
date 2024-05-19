import { Select, Option } from "@material-tailwind/react";

type SelectProps<T> = {
  set: (value: T | undefined) => void;
  get: T;
  label: string;
  options: { value: T; label: string }[];
};

export const SelectDefault = <T extends string>({
  // Assuming T extends string or number
  set,
  get,
  label,
  options,
}: SelectProps<T>) => {
  return (
    <div className="w-full">
      <Select
        onChange={(event) => {
          if (event) set(event as T);
        }}
        value={get}
        label={label}
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
        placeholder="Select an option"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {options.map((option, index) => (
          <Option key={`${option.value}-${index}`} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};
