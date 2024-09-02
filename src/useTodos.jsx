import { useContext } from "react";
import TodoContext from "./TodoContext";

const useTodos = () => {
  const context = useContext(TodoContext);

  return context;
};

export default useTodos;
