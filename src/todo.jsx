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
          className="rounded-[6px] w-[644px] h-14 bg-[#262626] border-[1px] border-[#000000] text-white text-2xl p-4 text-[16px] text-[#808080]]"
        />
        <button
          onClick={handleAddTodo}
          className="bg-[#1E6F9F] rounded-[8px] h-14 w-[84px] text-white text-[16px] flex justify-center items-center gap-2"
        >
          Add <img src={plus} alt="Add" />
        </button>
      </div>
      <div className="flex justify-center items-center gap-[600px] mt-11">
        <div className="flex justify-start items-start gap-2">
          <p className="text-[#4EA8DE] text-[14px]">Tasks</p>
          <p className="text-white rounded-[999px] text-center text-[12px] w-6 h-5 bg-[#333333]">
            {todos.length}
          </p>
        </div>
        <div className="flex justify-start items-start gap-2">
          <p className="text-[#8284FA] text-[14px]">Done</p>
          <p className="text-white rounded-[999px] text-center text-[12px] w-12 h-5 bg-[#333333]">
            {todos.filter((todo) => todo.completed).length} of {todos.length}
          </p>
        </div>
      </div>
      <div className="ml-[390px]">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="w-[736px] h-[72px] bg-[#262626] rounded-[8px] border-[1px] border-[#333333] flex justify-center items-center mt-6"
          >
            <img
              src={todo.completed ? checked : uncheck}
              alt={todo.completed ? "Checked" : "Unchecked"}
              className="relative right-4 bottom-2 cursor-pointer"
              onClick={() => toggleTodo(todo.id)}
            />
            <p
              className={`text-[14px] p-4 w-[632px] relative right-4 ${
                todo.completed
                  ? "text-[#808080] line-through"
                  : "text-[#F2F2F2]"
              }`}
            >
              {todo.text}
            </p>
            <img
              src={delet}
              alt="Delete"
              className="mb-4 cursor-pointer"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
