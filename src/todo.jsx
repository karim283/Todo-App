import React, { useState } from "react";
import logo from "./assets/Logo.png";
import plus from "./assets/plus.png";
import delet from "./assets/delet.png";
import checked from "./assets/checked.png";
import uncheck from "./assets/uncheck.png";
import useTodos from "./useTodos";

export default function Todo() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen w-full">
      <div className="bg-black h-52 w-full flex justify-center items-center">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex justify-center items-center gap-2 relative bottom-7">
        <input
          type="text"
          placeholder="Write your note and press “Enter” ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo();
            }
          }}
          className="rounded-[6px] w-[18rem] md:w-[50.33vw] h-14 bg-[#262626] border-[1px] border-[#000000] text-white text-2xl p-4 text-[16px] text-[#808080]]"
        />
        <button
          onClick={handleAddTodo}
          className="bg-[#1E6F9F] rounded-[8px] h-14 w-[84px] text-white text-[16px] flex justify-center items-center gap-2"
        >
          Add <img src={plus} alt="Add" />
        </button>
      </div>
      <div className="flex justify-center items-center gap-[45.56vw] mt-11 ml-5 mr-5">
        <div className="flex justify-center items-center gap-2">
          <p className="text-[#4EA8DE] text-[1rem]">Tasks</p>
          <p className="text-white rounded-[999px] text-center text-[12px] w-6 h-5 bg-[#333333]">
            {todos.length}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="text-[#8284FA] text-[1rem]">Done</p>
          <p className="text-white rounded-[999px] text-center text-[12px] w-12 h-5 bg-[#333333]">
            {todos.filter((todo) => todo.completed).length} of {todos.length}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="w-[20rem]  md:w-[50.33vw] h-full bg-[#262626] rounded-[8px] border-[1px] border-[#333333] flex justify-start items-center mt-6  "
          >
            <div className="flex justify-start items-center">
              <img
                src={todo.completed ? checked : uncheck}
                alt={todo.completed ? "Checked" : "Unchecked"}
                className="pl-4 pr-4 cursor-pointer"
                onClick={() => toggleTodo(todo.id)}
              />
              <p
                className={`text-[14px] w-60 pt-5 pb-5 md:w-[40vw]  ${
                  todo.completed
                    ? "text-[#808080] line-through"
                    : "text-[#F2F2F2]"
                }`}
              >
                {todo.text}
              </p>
            </div>
            <img
              src={delet}
              alt="Delete"
              className=" pl-4 pr-4 cursor-pointer  "
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
