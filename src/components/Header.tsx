import { Select, Option } from "@material-tailwind/react";

export const Header: React.FC = () => {

    function handleSort(event) {
        console.log(event);
    }

  return (
      <div className="inline-flex space-x-2 items-center">
          <div className="w-1/2">
              <Select variant="outlined" label="Sort by" onChange={handleSort}>
                    <Option value="priority">Priority</Option>
                    <Option value="state">State</Option>
                    <Option value="date">Date</Option>
              </Select>
          </div>
      </div>
  );
};
