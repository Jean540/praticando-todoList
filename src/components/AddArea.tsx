import { useState } from "react";

export const AddArea = ({
  handleAddTask,
}: {
  handleAddTask: (inputText: string) => void;
}) => {
  const [inputText, setInputText] = useState("");

  const handlekeyUp = (key: string) => {
    if (key == "Enter" && inputText != "") {
      handleAddTask(inputText);
      setInputText("");
    }
  };

  return (
    <div className="flex items-center border rounded-[15px] border-[#555] my-[20px] p-[10px]">
      <div
        className="mr-[5px] cursor-pointer"
        onClick={() => [handleAddTask(inputText), setInputText("")]}
      >
        ➕
      </div>
      <input
        className="border-0 bg-transparent outline-none text-white flex-1"
        type="text"
        placeholder="Adicione uma tarefa"
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={(e) => handlekeyUp(e.key)}
        value={inputText}
      />
    </div>
  );
};
