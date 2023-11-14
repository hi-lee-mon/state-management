import { useEffect } from 'react';
import { NextPage } from 'next';
import { useStore } from '@/state/store';

const Home: NextPage = () => {
  const todos = useStore((state) => state.todos);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const fetchUsers = useStore((state) => state.fetchUsers);
  const users = useStore((state) => state.users);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h3 className="text-3xl mb-4">TODO一覧</h3>
      <section className="flex flex-col gap-5">
        {todos.map((todo) => (
          <div key={todo.id}>
            <label className=" flex items-center gap-2 text-xl">
              <input
                type="checkbox"
                onChange={() => toggleTodo(todo.id)}
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
