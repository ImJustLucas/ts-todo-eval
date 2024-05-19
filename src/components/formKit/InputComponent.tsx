import { Input } from "@material-tailwind/react";

export const InputComponent: React.FC<{
  set: (value: string) => void;
  get: string;
  label: string;
}> = ({ set, get, label }) => {
  return (
    <div className="relative flex w-full">
      <Input
        type="text"
        label={label}
        value={get}
        containerProps={{
          className: "min-w-0",
        }}
        onChange={(e) => set(e.target.value)}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
    </div>
  );
};
