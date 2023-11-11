import React, { ComponentProps } from 'react';
import { Todo } from '@/types';
import { NextPage } from 'next';
import { useTodosDispatchContext } from '@/context/todosContext';

const Add: NextPage = () => {
  const { addTodo } = useTodosDispatchContext();

  const handleAddTodoSubmit: ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    addTodo(text);
    e.currentTarget.reset();
  };

  console.info('contextを分けているので追加操作だけでは再レンダリングは発生しない');

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
