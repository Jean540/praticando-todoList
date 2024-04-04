"use client";
import { AddArea } from "@/components/AddArea";
import { ListItem } from "@/components/ListItem";
import { Item } from "@/types/Item";
import { useState } from "react";

const Page = () => {
  const [list, setList] = useState<Item[]>([]);
  const [id, setId] = useState(0);

  const handleAddTask = (taskName: string) => {
    setList([...list, { name: taskName, id, done: false }]);
    setId(id + 1);
  };

  const handleDoneTask = (id: number) => {
    setList(
      list.map((e) => {
        if (e.id === id) {
          e.done = !e.done;
        }
        return e;
      })
    );
  };

  const handleDeletTask = (id: number) =>
    setList(list.filter((e) => e.id != id));

  return (
    <div className="bg-[#17181F] text-[rgb(121,122,129)] h-screen">
      <div className="m-auto max-w-[980px] p-[10px]">
        <h1 className=" m-0 p-0 text-white text-center border-b-[1px] border-b-[#444] pb-5 text-4xl font-bold">
          Lista de Tarefas
        </h1>
        <p>{list.length > 0 && `Número Total de Tarefas: ${list.length}`}</p>
        <AddArea handleAddTask={handleAddTask} />

        {list.map((item, key) => (
          <ListItem
            key={key}
            item={item}
            handleDoneTask={handleDoneTask}
            handleDeletTask={handleDeletTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
