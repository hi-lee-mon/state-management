import React, { ComponentProps } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Todo } from '@/types';
import { NextPage } from 'next';
type Props = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Add: NextPage<Props> = ({ setTodos }) => {
  const handleAddTodoSubmit: ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    setTodos((prevTodos) => {
      const newTodo: Todo = {
        id: prevTodos.length + 1,
        text,
        isDone: false,
      };
      return [...prevTodos, newTodo];
    });
    e.currentTarget.reset();
  };

  return (
    <div>
      <h3 className="text-3xl mb-4">TODO追加</h3>
      <form onSubmit={handleAddTodoSubmit} className="border-2 rounded-md p-6">
        <input
          type="text"
          name="text"
          required
          className="border-2 rounded-md bg-slate-300 h-10 px-2"
        />
        <button
          type="submit"
          className="px-9 py-2 text-black ml-4 rounded-md bg-cyan-700 transition-all hover:bg-cyan-800  duration-300"
        >
          追加
        </button>
      </form>
    </div>
  );
};

export default Add;
