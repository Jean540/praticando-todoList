import { Item } from "@/types/Item";
import { useState } from "react";

export const ListItem = ({
  item,
  handleDoneTask,
  handleDeletTask,
}: {
  item: Item;
  handleDoneTask: (id: number) => void;
  handleDeletTask: (id: number) => void;
}) => {
  // const [isChecked, setIsChecked] = useState(item.done);

  return (
    <div className="flex bg-[#20212C] p-[10px] rounded-[10px] mb-[10px] items-center">
      <input
        className="w-6 h-6 mr-1"
        type="checkbox"
        checked={item.done}
        onChange={() => handleDoneTask(item.id)}
      />
      <label
        className={`text-[#CCC] ${item.done && "line-through"}`}
        htmlFor=""
      >
        {item.name}
      </label>
      <div className="flex-1 flex justify-end">
        <div
          className="cursor-pointer"
          onClick={() => handleDeletTask(item.id)}
        >
          ❌
        </div>
      </div>
    </div>
  );
};
