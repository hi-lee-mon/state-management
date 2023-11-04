import { Dispatch, SetStateAction } from 'react';
import { Todo } from '@/types';
import { NextPage } from 'next';
type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Home: NextPage<Props> = ({ todos, setTodos }) => {
  const toggleIsDone = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <div>
      <h3 className="text-3xl mb-4">TODO一覧</h3>
      <section className="flex flex-col gap-5">
        {todos.map((todo) => (
          <div key={todo.id}>
            <label className=" flex items-center gap-2 text-xl">
              <input
                type="checkbox"
                onChange={() => toggleIsDone(todo.id)}
                checked={todo.isDone}
                className="w-5 h-5"
              />
              {todo.text}
            </label>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
