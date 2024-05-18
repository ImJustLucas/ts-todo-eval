import {Button, Input} from "@material-tailwind/react";
export const AddTask: React.FC = () => {

    return (
        <div className="relative flex w-full max-w-[24rem]">
            <Input
                type="text"
                label="New Task"
                // value={task}
                // onChange={onChange}
                className="pr-20"
                containerProps={{
                    className: "min-w-0",
                }}
            />
            <Button
                size="sm"
                // color={email ? "gray" : "blue-gray"}
                // disabled={!email}
                className="!absolute right-1 top-1 rounded"
            >
                Add
            </Button>
        </div>
    );
};
