import { Dispatch, SetStateAction } from 'react';
import { Todo } from '@/types';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import { toggleTodo } from '@/state/todos';
type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Home: NextPage<Props> = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h3 className="text-3xl mb-4">TODO一覧</h3>
      <section className="flex flex-col gap-5">
        {todos.map((todo) => (
          <div key={todo.id}>
            <label className=" flex items-center gap-2 text-xl">
              <input
                type="checkbox"
                onChange={() => dispatch(toggleTodo(todo.id))}
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
